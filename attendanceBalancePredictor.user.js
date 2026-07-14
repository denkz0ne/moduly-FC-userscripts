// ==UserScript==
// @name         attendanceBalancePredictor
// @namespace    https://person.faxcopy.sk/
// @author       Codex
// @version      0.2.1
// @description  Prepocet upravenej dochadzky, kumulativnej bilancie a predikcie buducich dni.
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/attendanceBalancePredictor.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/attendanceBalancePredictor.user.js
// @match        https://person.faxcopy.sk/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const TABLE_SELECTOR = '#attendance-month';
    const DAILY_PRESENCE_TARGET_MINUTES = 8 * 60 + 30;
    const DAILY_WORK_TARGET_MINUTES = 8 * 60;
    const LUNCH_BREAK_MINUTES = 30;
    const FORECAST_ARRIVAL_MINUTES = 6 * 60 + 15;
    const MAX_DAILY_DEVIATION_MINUTES = 45;

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
        if (totalMinutes === 0) return '0:00';
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

    function ensureAdjustedCells(day) {
        if (day.adjustedTimeCell && day.adjustedTotalCell) {
            return {
                adjustedTimeCell: day.adjustedTimeCell,
                adjustedTotalCell: day.adjustedTotalCell
            };
        }

        const row = day.firstRow;
        const adjustedEmptyCell = row.querySelector('td[colspan="2"]:not(.approved):not(.planned)');

        if (!adjustedEmptyCell) {
            return null;
        }

        const adjustedCells = [
            document.createElement('td'),
            document.createElement('td')
        ];

        adjustedCells[0].className = '';
        adjustedCells[1].className = 'text-right';

        adjustedEmptyCell.replaceWith(...adjustedCells);
        day.adjustedTimeCell = adjustedCells[0];
        day.adjustedTotalCell = adjustedCells[1];

        return {
            adjustedTimeCell: day.adjustedTimeCell,
            adjustedTotalCell: day.adjustedTotalCell
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
        let adjustedTimeCell = null;
        let adjustedTotalCell = null;

        if (actualRow && actualRow.cells.length >= 7) {
            actualTimeCell = actualRow.cells[3] || null;
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

    function computeActualDay(day, today) {
        const result = {
            adjustedArrival: null,
            adjustedDeparture: null,
            presenceMinutes: null,
            workedMinutes: null,
            balanceMinutes: null,
            planningBalanceMinutes: null,
            tooltip: ''
        };

        if (!day.isScheduled || day.isNonWorkingDay) {
            result.presenceMinutes = 0;
            result.workedMinutes = 0;
            result.balanceMinutes = 0;
            result.planningBalanceMinutes = 0;
            return result;
        }

        if (day.isSpecialScheduledDay && day.arrivalRaw == null && day.departureRaw == null) {
            result.presenceMinutes = DAILY_PRESENCE_TARGET_MINUTES;
            result.workedMinutes = DAILY_WORK_TARGET_MINUTES;
            result.balanceMinutes = 0;
            result.planningBalanceMinutes = 0;
            result.tooltip = 'Osobitny den: pre vypocet sa rata 8:30 pritomnost a 8:00 dochadzka.';
            return result;
        }

        if (day.arrivalRaw == null) {
            return result;
        }

        result.adjustedArrival = roundUpQuarter(day.arrivalRaw);

        if (day.departureRaw != null) {
            result.adjustedDeparture = roundDownQuarter(day.departureRaw);
        } else if (sameDay(day.date, today)) {
            result.adjustedDeparture = result.adjustedArrival + DAILY_PRESENCE_TARGET_MINUTES;
            result.tooltip = `Dnes otvoreny den. Odhadovany odchod pre dennu nulu: ${minutesToTime(result.adjustedDeparture)}.`;
        }

        if (result.adjustedDeparture == null) {
            return result;
        }

        result.presenceMinutes = Math.max(0, result.adjustedDeparture - result.adjustedArrival);
        result.workedMinutes = Math.max(0, result.presenceMinutes - LUNCH_BREAK_MINUTES);
        result.balanceMinutes = result.workedMinutes - DAILY_WORK_TARGET_MINUTES;
        result.planningBalanceMinutes = day.departureRaw != null ? result.balanceMinutes : 0;

        return result;
    }

    function collectForecastCandidates(days, today) {
        return days.filter((day) => day.isScheduled && !day.isNonWorkingDay && isAfterDay(day.date, today));
    }

    function allocateForecasts(days, today) {
        let runningBalance = 0;

        days.forEach((day) => {
            day.computed = computeActualDay(day, today);
            if (isBeforeDay(day.date, today)) {
                runningBalance += day.computed.balanceMinutes || 0;
            } else if (sameDay(day.date, today)) {
                runningBalance += day.computed.planningBalanceMinutes || 0;
            }
        });

        const futureDays = collectForecastCandidates(days, today);
        let remainingBalance = runningBalance;

        futureDays.forEach((day, index) => {
            const forecast = {
                adjustedArrival: null,
                adjustedDeparture: null,
                presenceMinutes: DAILY_PRESENCE_TARGET_MINUTES,
                workedMinutes: DAILY_WORK_TARGET_MINUTES,
                balanceMinutes: 0,
                planningBalanceMinutes: 0,
                tooltip: ''
            };

            if (!day.isSpecialScheduledDay) {
                const daysLeft = futureDays.length - index;
                const desiredDailyBalance = roundNearestQuarter((-remainingBalance) / daysLeft);
                const cappedBalance = Math.max(-MAX_DAILY_DEVIATION_MINUTES, Math.min(MAX_DAILY_DEVIATION_MINUTES, desiredDailyBalance));
                forecast.balanceMinutes = cappedBalance;
                forecast.planningBalanceMinutes = cappedBalance;
                forecast.workedMinutes = DAILY_WORK_TARGET_MINUTES + cappedBalance;
                forecast.presenceMinutes = forecast.workedMinutes + LUNCH_BREAK_MINUTES;
                forecast.adjustedArrival = FORECAST_ARRIVAL_MINUTES;
                forecast.adjustedDeparture = FORECAST_ARRIVAL_MINUTES + forecast.presenceMinutes;
                forecast.tooltip = `Predikcia pri preferovanom prichode ${minutesToTime(FORECAST_ARRIVAL_MINUTES)}.`;
            } else {
                forecast.tooltip = 'Osobitny den: pre vypocet sa rata 8:30 pritomnost a 8:00 dochadzka.';
            }

            day.forecast = forecast;
            remainingBalance += forecast.balanceMinutes;
        });
    }

    function updateAdjustedCells(day, payload, className) {
        const cells = ensureAdjustedCells(day);
        if (!cells) return;

        if (payload.adjustedArrival != null && payload.adjustedDeparture != null) {
            setCellValue(
                cells.adjustedTimeCell,
                `${minutesToTime(payload.adjustedArrival)} - ${minutesToTime(payload.adjustedDeparture)}`,
                className,
                payload.tooltip
            );
            setCellValue(cells.adjustedTotalCell, signedDuration(payload.balanceMinutes || 0), className, payload.tooltip);
            return;
        }

        if (payload.workedMinutes != null && day.isSpecialScheduledDay) {
            setCellValue(cells.adjustedTimeCell, '', className, payload.tooltip);
            setCellValue(cells.adjustedTotalCell, signedDuration(payload.balanceMinutes || 0), className, payload.tooltip);
        }
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
            const isFuture = isAfterDay(day.date, currentDay);
            const payload = isFuture ? (day.forecast || null) : day.computed;

            if (payload && (day.isScheduled || day.isSpecialScheduledDay)) {
                updateAdjustedCells(day, payload, isFuture ? 'abp-forecast' : 'abp-muted');
            }

            cumulativeBalance += payload && payload.balanceMinutes ? payload.balanceMinutes : 0;
            updateBalanceCell(day, cumulativeBalance, isFuture, payload ? payload.tooltip : '');
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
