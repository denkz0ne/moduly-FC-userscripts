// ==UserScript==
// @name         attendanceBalancePredictor
// @namespace    https://person.faxcopy.sk/
// @author       Codex
// @version      0.1.0
// @description  Prepocet upravenej dochadzky, kumulativnej bilancie a predikcie buducich dni.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/attendanceBalancePredictor.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/attendanceBalancePredictor.user.js
// @match        https://person.faxcopy.sk/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const TABLE_SELECTOR = '#attendance-month';
    const DAILY_TARGET_MINUTES = 8 * 60 + 30;
    const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15;
    const MAX_DAILY_DEVIATION_MINUTES = 45;
    const FORECAST_STATUS = 'ODH';

    const STYLE_ID = 'attendance-balance-predictor-style';

    function injectStyles() {
        if (document.getElementById(STYLE_ID)) return;

        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .abp-muted {
                color: #7a7a7a;
            }
            .abp-forecast {
                color: #7a7a7a;
                font-style: italic;
            }
            .abp-positive {
                color: #1f8a3b;
                font-weight: 700;
            }
            .abp-negative {
                color: #c53434;
                font-weight: 700;
            }
            .abp-neutral {
                color: #666666;
                font-weight: 700;
            }
        `;
        document.head.appendChild(style);
    }

    function cleanText(value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    }

    function parseDate(dateText) {
        const match = cleanText(dateText).match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (!match) return null;
        return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    }

    function timeToMinutes(value) {
        const match = cleanText(value).match(/^(\d{1,2}):(\d{2})$/);
        if (!match) return null;
        return Number(match[1]) * 60 + Number(match[2]);
    }

    function minutesToTime(totalMinutes) {
        const normalized = Math.max(0, totalMinutes);
        const hours = Math.floor(normalized / 60);
        const minutes = normalized % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    }

    function durationToText(totalMinutes) {
        const abs = Math.abs(totalMinutes);
        const hours = Math.floor(abs / 60);
        const minutes = abs % 60;
        return `${hours}:${String(minutes).padStart(2, '0')}`;
    }

    function signedDuration(totalMinutes) {
        if (totalMinutes === 0) return '+0:00';
        return `${totalMinutes > 0 ? '+' : '-'}${durationToText(totalMinutes)}`;
    }

    function roundUpQuarter(minutes) {
        return Math.ceil(minutes / 15) * 15;
    }

    function roundDownQuarter(minutes) {
        return Math.floor(minutes / 15) * 15;
    }

    function roundNearestQuarter(minutes) {
        return Math.round(minutes / 15) * 15;
    }

    function sameDay(a, b) {
        return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
    }

    function isBeforeDay(a, b) {
        if (!a || !b) return false;
        const left = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
        const right = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
        return left < right;
    }

    function isAfterDay(a, b) {
        if (!a || !b) return false;
        const left = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime();
        const right = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
        return left > right;
    }

    function parseTimeRange(text) {
        const normalized = cleanText(text);
        const range = normalized.match(/(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})/);
        if (range) {
            return {
                arrival: timeToMinutes(range[1]),
                departure: timeToMinutes(range[2])
            };
        }

        const single = normalized.match(/^(\d{1,2}:\d{2})$/);
        if (single) {
            return {
                arrival: timeToMinutes(single[1]),
                departure: null
            };
        }

        return {
            arrival: null,
            departure: null
        };
    }

    function createValueSpan(text, className, title) {
        const span = document.createElement('span');
        span.textContent = text;
        if (className) span.className = className;
        if (title) span.title = title;
        return span;
    }

    function setCellValue(cell, text, className, title) {
        cell.textContent = '';
        cell.appendChild(createValueSpan(text, className, title));
    }

    function getDayGroups(table) {
        const body = table.tBodies[0];
        if (!body) return [];

        const rows = Array.from(body.rows);
        const groups = [];
        let current = null;

        rows.forEach((row) => {
            const firstCell = row.cells[0];
            const firstText = cleanText(firstCell ? firstCell.textContent : '');
            const isDayStart = /^\d{4}-\d{2}-\d{2}/.test(firstText);

            if (isDayStart) {
                current = {
                    rows: [row],
                    firstRow: row,
                    dateText: firstText,
                    date: parseDate(firstText)
                };
                groups.push(current);
                return;
            }

            if (current) {
                current.rows.push(row);
            }
        });

        return groups;
    }

    function ensureForecastCells(day) {
        if (day.rows.length > 1) {
            return {
                actualStatusCell: day.actualRow.cells[1],
                actualTypeCell: day.actualRow.cells[2],
                actualTimeCell: day.actualRow.cells[3],
                actualTotalCell: day.actualRow.cells[4],
                adjustedTimeCell: day.actualRow.cells[5],
                adjustedTotalCell: day.actualRow.cells[6]
            };
        }

        const row = day.firstRow;
        const actualEmptyCell = row.querySelector('td.actual.empty[colspan="4"]');
        const adjustedEmptyCell = row.querySelector('td[colspan="2"]:not(.approved):not(.planned)');

        if (!actualEmptyCell || !adjustedEmptyCell) {
            return null;
        }

        if (!row.dataset.abpForecastExpanded) {
            const actualCells = [
                document.createElement('td'),
                document.createElement('td'),
                document.createElement('td'),
                document.createElement('td')
            ];

            actualCells[0].className = 'text-center actual';
            actualCells[1].className = 'text-center actual';
            actualCells[2].className = 'actual';
            actualCells[3].className = 'text-right actual';

            actualEmptyCell.replaceWith(...actualCells);

            const adjustedCells = [
                document.createElement('td'),
                document.createElement('td')
            ];

            adjustedCells[0].className = '';
            adjustedCells[1].className = 'text-right';

            adjustedEmptyCell.replaceWith(...adjustedCells);
            row.dataset.abpForecastExpanded = '1';
        }

        return {
            actualStatusCell: row.cells[6],
            actualTypeCell: row.cells[7],
            actualTimeCell: row.cells[8],
            actualTotalCell: row.cells[9],
            adjustedTimeCell: row.cells[10],
            adjustedTotalCell: row.cells[11]
        };
    }

    function parseDay(group) {
        const firstRow = group.firstRow;
        const actualRow = group.rows.length > 1 ? group.rows[group.rows.length - 1] : null;
        const plannedTypeCell = firstRow.cells[1] || null;
        const plannedTimeCell = firstRow.cells[2] || null;
        const plannedTotalCell = firstRow.cells[3] || null;
        const balanceCell = firstRow.cells.length >= 2 ? firstRow.cells[firstRow.cells.length - 2] : null;

        const plannedType = cleanText(plannedTypeCell ? plannedTypeCell.textContent : '');
        const plannedTime = cleanText(plannedTimeCell ? plannedTimeCell.textContent : '');
        const plannedTotal = cleanText(plannedTotalCell ? plannedTotalCell.textContent : '');

        let actualTimeCell = null;
        let actualTotalCell = null;
        let adjustedTimeCell = null;
        let adjustedTotalCell = null;
        let actualTypeCell = null;
        let actualStatusCell = null;

        if (actualRow && actualRow.cells.length >= 7) {
            actualStatusCell = actualRow.cells[1] || null;
            actualTypeCell = actualRow.cells[2] || null;
            actualTimeCell = actualRow.cells[3] || null;
            actualTotalCell = actualRow.cells[4] || null;
            adjustedTimeCell = actualRow.cells[5] || null;
            adjustedTotalCell = actualRow.cells[6] || null;
        }

        const actualTimeText = cleanText(actualTimeCell ? actualTimeCell.textContent : '');
        const parsedActual = parseTimeRange(actualTimeText);
        const isScheduled = !!plannedTotal;
        const hasWeekendOrHolidayColor = /background-color:\s*#(?:d2ebfd|fdd2d2)/i.test(firstRow.getAttribute('style') || '');
        const isNonWorkingDay = !isScheduled && hasWeekendOrHolidayColor;
        const isSpecialScheduledDay = isScheduled && plannedType && plannedType !== 'PrZ';

        return {
            ...group,
            firstRow,
            actualRow,
            plannedType,
            plannedTime,
            plannedTotal,
            isScheduled,
            isNonWorkingDay,
            isSpecialScheduledDay,
            actualTimeText,
            actualStatusCell,
            actualTypeCell,
            actualTimeCell,
            actualTotalCell,
            adjustedTimeCell,
            adjustedTotalCell,
            balanceCell,
            arrivalRaw: parsedActual.arrival,
            departureRaw: parsedActual.departure
        };
    }

    function buildDays(table) {
        return getDayGroups(table).map(parseDay).filter((day) => day.date);
    }

    function computeActualDay(day, today, nowMinutes) {
        const result = {
            isForecast: false,
            isPartialToday: false,
            adjustedArrival: null,
            adjustedDeparture: null,
            workedMinutes: null,
            balanceMinutes: null,
            planningBalanceMinutes: null,
            tooltip: ''
        };

        if (!day.isScheduled || day.isNonWorkingDay) {
            result.workedMinutes = 0;
            result.balanceMinutes = 0;
            result.planningBalanceMinutes = 0;
            return result;
        }

        if (day.isSpecialScheduledDay && day.arrivalRaw == null && day.departureRaw == null) {
            result.workedMinutes = DAILY_TARGET_MINUTES;
            result.balanceMinutes = 0;
            result.planningBalanceMinutes = 0;
            result.tooltip = 'Osobitny den: pre vypocet sa rata presne 8:30.';
            return result;
        }

        if (day.arrivalRaw == null) {
            return result;
        }

        result.adjustedArrival = roundUpQuarter(day.arrivalRaw);

        if (day.departureRaw != null) {
            result.adjustedDeparture = roundDownQuarter(day.departureRaw);
        } else if (sameDay(day.date, today)) {
            result.isPartialToday = true;
            result.adjustedDeparture = Math.max(result.adjustedArrival, roundDownQuarter(nowMinutes));
        }

        if (result.adjustedDeparture == null) {
            return result;
        }

        result.workedMinutes = Math.max(0, result.adjustedDeparture - result.adjustedArrival);
        result.balanceMinutes = result.workedMinutes - DAILY_TARGET_MINUTES;
        result.planningBalanceMinutes = day.departureRaw != null ? result.balanceMinutes : 0;

        if (result.isPartialToday) {
            const departureForZero = result.adjustedArrival + DAILY_TARGET_MINUTES;
            result.tooltip = `Dnes priebezne k ${minutesToTime(result.adjustedDeparture)}. Odchod pre dennu nulu: ${minutesToTime(departureForZero)}.`;
        }

        return result;
    }

    function collectForecastCandidates(days, today) {
        return days.filter((day) => day.isScheduled && !day.isNonWorkingDay && isAfterDay(day.date, today));
    }

    function allocateForecasts(days, today) {
        let runningBalance = 0;
        const nowMinutes = getCurrentMinutes();

        days.forEach((day) => {
            day.computed = computeActualDay(day, today, nowMinutes);
            if (isBeforeDay(day.date, today)) {
                runningBalance += day.computed.balanceMinutes || 0;
            } else if (sameDay(day.date, today)) {
                runningBalance += day.computed.planningBalanceMinutes || 0;
            }
        });

        const futureDays = collectForecastCandidates(days, today);
        let remainingBalance = runningBalance;

        futureDays.forEach((day, index) => {
            const isSpecial = day.isSpecialScheduledDay;
            const forecast = {
                isForecast: true,
                adjustedArrival: null,
                adjustedDeparture: null,
                workedMinutes: DAILY_TARGET_MINUTES,
                balanceMinutes: 0,
                planningBalanceMinutes: 0,
                tooltip: ''
            };

            if (!isSpecial) {
                const daysLeft = futureDays.length - index;
                const desiredDailyBalance = roundNearestQuarter((-remainingBalance) / daysLeft);
                const cappedBalance = Math.max(-MAX_DAILY_DEVIATION_MINUTES, Math.min(MAX_DAILY_DEVIATION_MINUTES, desiredDailyBalance));
                forecast.balanceMinutes = cappedBalance;
                forecast.planningBalanceMinutes = cappedBalance;
                forecast.workedMinutes = DAILY_TARGET_MINUTES + cappedBalance;
                forecast.adjustedArrival = FORECAST_ARRIVAL_MINUTES;
                forecast.adjustedDeparture = FORECAST_ARRIVAL_MINUTES + forecast.workedMinutes;
                forecast.tooltip = `Predikcia pri preferovanom prichode ${minutesToTime(FORECAST_ARRIVAL_MINUTES)}.`;
            } else {
                forecast.tooltip = 'Osobitny den: pre vypocet sa rata presne 8:30.';
            }

            day.forecast = forecast;
            remainingBalance += forecast.balanceMinutes;
        });
    }

    function getCurrentMinutes() {
        const now = new Date();
        return now.getHours() * 60 + now.getMinutes();
    }

    function updateAdjustedCells(day, payload, className) {
        if (!day.adjustedTimeCell || !day.adjustedTotalCell) return;

        if (payload.adjustedArrival != null && payload.adjustedDeparture != null) {
            setCellValue(
                day.adjustedTimeCell,
                `${minutesToTime(payload.adjustedArrival)} - ${minutesToTime(payload.adjustedDeparture)}`,
                className,
                payload.tooltip
            );
            setCellValue(
                day.adjustedTotalCell,
                durationToText(payload.workedMinutes || 0),
                className,
                payload.tooltip
            );
            return;
        }

        if (payload.workedMinutes != null && day.isSpecialScheduledDay) {
            setCellValue(day.adjustedTimeCell, '', className, payload.tooltip);
            setCellValue(day.adjustedTotalCell, durationToText(payload.workedMinutes), className, payload.tooltip);
        }
    }

    function updateFutureCells(day, payload) {
        const cells = ensureForecastCells(day);
        if (!cells) return;

        setCellValue(cells.actualStatusCell, FORECAST_STATUS, 'abp-forecast', payload.tooltip);
        setCellValue(cells.actualTypeCell, day.plannedType || 'PrZ', 'abp-forecast', payload.tooltip);

        if (payload.adjustedArrival != null && payload.adjustedDeparture != null) {
            setCellValue(
                cells.actualTimeCell,
                `${minutesToTime(payload.adjustedArrival)} - ${minutesToTime(payload.adjustedDeparture)}`,
                'abp-forecast',
                payload.tooltip
            );
            setCellValue(cells.actualTotalCell, durationToText(payload.workedMinutes || 0), 'abp-forecast', payload.tooltip);
            setCellValue(
                cells.adjustedTimeCell,
                `${minutesToTime(payload.adjustedArrival)} - ${minutesToTime(payload.adjustedDeparture)}`,
                'abp-forecast',
                payload.tooltip
            );
            setCellValue(cells.adjustedTotalCell, durationToText(payload.workedMinutes || 0), 'abp-forecast', payload.tooltip);
            return;
        }

        setCellValue(cells.actualTimeCell, '', 'abp-forecast', payload.tooltip);
        setCellValue(cells.actualTotalCell, durationToText(payload.workedMinutes || DAILY_TARGET_MINUTES), 'abp-forecast', payload.tooltip);
        setCellValue(cells.adjustedTimeCell, '', 'abp-forecast', payload.tooltip);
        setCellValue(cells.adjustedTotalCell, durationToText(payload.workedMinutes || DAILY_TARGET_MINUTES), 'abp-forecast', payload.tooltip);
    }

    function updateBalanceCell(day, cumulativeBalance, isFuture, tooltip) {
        if (!day.balanceCell) return;

        const className = isFuture
            ? 'abp-forecast'
            : cumulativeBalance > 0
                ? 'abp-positive'
                : cumulativeBalance < 0
                    ? 'abp-negative'
                    : 'abp-neutral';

        setCellValue(day.balanceCell, signedDuration(cumulativeBalance), className, tooltip);
    }

    function renderDays(days) {
        const today = new Date();
        const currentDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        allocateForecasts(days, currentDay);

        let cumulativeBalance = 0;

        days.forEach((day) => {
            const isPast = isBeforeDay(day.date, currentDay);
            const isToday = sameDay(day.date, currentDay);
            const isFuture = isAfterDay(day.date, currentDay);

            if (isPast || isToday) {
                const payload = day.computed;
                if (payload && payload.workedMinutes != null) {
                    updateAdjustedCells(day, payload, 'abp-muted');
                    cumulativeBalance += payload.balanceMinutes || 0;
                }

                const tooltip = payload && payload.tooltip ? payload.tooltip : '';
                updateBalanceCell(day, cumulativeBalance, false, tooltip);
                return;
            }

            if (isFuture) {
                const payload = day.forecast || {
                    isForecast: true,
                    workedMinutes: 0,
                    balanceMinutes: 0,
                    planningBalanceMinutes: 0,
                    tooltip: ''
                };
                if (day.isScheduled && !day.isNonWorkingDay) {
                    updateFutureCells(day, payload);
                }
                cumulativeBalance += payload.balanceMinutes || 0;
                updateBalanceCell(day, cumulativeBalance, true, payload.tooltip);
            }
        });
    }

    let tableObserver = null;
    let applyTimer = null;

    function applyScript(table) {
        if (!table || table.dataset.abpProcessed === '1') return;
        injectStyles();

        const days = buildDays(table);
        if (!days.length) return;

        renderDays(days);
        table.dataset.abpProcessed = '1';
    }

    function resetAndApply(table) {
        if (!table) return;
        delete table.dataset.abpProcessed;
        applyScript(table);
    }

    function watchTable() {
        if (tableObserver) return;

        tableObserver = new MutationObserver(() => {
            if (applyTimer) {
                clearTimeout(applyTimer);
            }

            applyTimer = window.setTimeout(() => {
                applyTimer = null;
                const table = document.querySelector(TABLE_SELECTOR);
                if (!table) return;

                tableObserver.disconnect();
                try {
                    resetAndApply(table);
                } finally {
                    tableObserver.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                }
            }, 60);
        });

        tableObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function init() {
        const table = document.querySelector(TABLE_SELECTOR);
        if (table) {
            resetAndApply(table);
        }
        watchTable();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
