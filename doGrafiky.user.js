// ==UserScript==
// @name         Do grafiky
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      3.8
// @description  DO GRAFIKY -> oznaci ZaPoGRAF a zaradi VP do CG_Grafik - Grafika bez modalov a klikania
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const GRAFIKA_VF_ID = '301';
    const ZAPOGRAF_TAG_ID = '602';
    const BUTTON_ID = 'doGrafikyBtn';
    const ACTION_ROW_ID = 'doGrafikyActionRow';
    const DEFAULT_LABEL = ' do GRAFIKY';

    function getVpId() {
        const match = window.location.pathname.match(/\/detail\/index\/(\d+)/);
        if (!match) {
            throw new Error('Nepodarilo sa zistit ID VP z URL.');
        }

        return match[1];
    }

    function buildSerializedVp(vpId) {
        return `a:1:{i:0;s:${vpId.length}:"${vpId}";}`;
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function showToast(message, type = 'success') {
        const existingToast = document.getElementById('doGrafikyToast');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.id = 'doGrafikyToast';
        toast.textContent = message;
        toast.style.position = 'fixed';
        toast.style.top = '20px';
        toast.style.right = '20px';
        toast.style.zIndex = '99999';
        toast.style.padding = '12px 16px';
        toast.style.borderRadius = '8px';
        toast.style.color = '#fff';
        toast.style.fontSize = '14px';
        toast.style.fontWeight = '600';
        toast.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.25)';
        toast.style.background = type === 'success' ? '#2e7d32' : '#c62828';

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3500);
    }

    async function postForm(url, params, ajax = false) {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        };

        if (ajax) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }

        const response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers,
            body: new URLSearchParams(params).toString(),
            redirect: 'follow'
        });

        if (!response.ok) {
            throw new Error(`Request zlyhal: ${response.status} ${response.statusText}`.trim());
        }

        return response;
    }

    async function setGrafikaTag(vpId) {
        await postForm('/vyrobne_prikazy/tags/saveCartTags', {
            id: ZAPOGRAF_TAG_ID,
            vpId,
            selected: '1'
        }, true);
    }

    async function assignToGrafikaQueue(vpId) {
        await postForm('/vyrobne_prikazy/industrialQueue', {
            'VF[]': GRAFIKA_VF_ID,
            VP_ID_PRODUCTION_STATUS: '',
            STAV_OBJEDNAVKY: '',
            VP: buildSerializedVp(vpId),
            id: vpId,
            save: 'Zaradiť',
            _form_: 'industrialVPForm'
        });
    }

    function setButtonState(button, label, busy) {
        const textNode = button.querySelector('.do-grafiky-label');
        if (textNode) {
            textNode.textContent = label;
        }

        button.style.pointerEvents = busy ? 'none' : 'auto';
        button.style.opacity = busy ? '0.6' : '1';
    }

    function makeButtonFlowInRow(button) {
        button.style.setProperty('position', 'static', 'important');
        button.style.setProperty('right', 'auto', 'important');
        button.style.setProperty('left', 'auto', 'important');
        button.style.setProperty('top', 'auto', 'important');
        button.style.setProperty('float', 'none', 'important');
        button.style.setProperty('display', 'inline-flex', 'important');
        button.style.setProperty('align-items', 'center', 'important');
        button.style.setProperty('justify-content', 'center', 'important');
        button.style.setProperty('gap', '4px', 'important');
        button.style.setProperty('margin', '0', 'important');
        button.style.setProperty('white-space', 'nowrap', 'important');
        button.style.setProperty('box-sizing', 'border-box', 'important');
    }

    function findButtonByAction(actionName) {
        return [...document.querySelectorAll('a.datatable-add.button.green.small')]
            .find((button) => (button.getAttribute('onclick') || '').includes(`${actionName}(`));
    }

    function createActionRow(actionBox, toolbar) {
        const row = document.createElement('div');
        row.id = ACTION_ROW_ID;
        row.style.setProperty('display', 'flex', 'important');
        row.style.setProperty('align-items', 'center', 'important');
        row.style.setProperty('justify-content', 'flex-end', 'important');
        row.style.setProperty('gap', '8px', 'important');
        row.style.setProperty('padding', '8px 10px 0 10px', 'important');
        row.style.setProperty('min-height', '28px', 'important');
        row.style.setProperty('clear', 'both', 'important');

        toolbar.insertAdjacentElement('afterend', row);
        actionBox.style.setProperty('position', 'relative', 'important');

        return row;
    }

    function createButton(vfButton) {
        if (document.getElementById(BUTTON_ID)) {
            return;
        }

        const actionBox = vfButton.closest('.box-content');
        const toolbar = actionBox && actionBox.querySelector('.table-toolbar');
        const checkedButton = actionBox && actionBox.querySelector('a.checked-button[title="Skontrolované"], a.checked-button');
        const hfButton = findButtonByAction('showHfSingleForm');
        const edButton = findButtonByAction('showEdSingleForm');

        if (!actionBox || !toolbar || !checkedButton || !hfButton || !edButton || !vfButton) {
            console.warn('[DO GRAFIKY] Nepodarilo sa najst cely blok akcii.');
            return;
        }

        const button = document.createElement('a');
        button.id = BUTTON_ID;
        button.href = '#';
        button.className = vfButton.className;
        button.innerHTML = `<img src="/assets/img/icons/checkbox-white.png" alt=""><span class="do-grafiky-label">${DEFAULT_LABEL}</span>`;
        button.title = 'do GRAFIKY';
        button.style.background = '#7b1fa2';
        button.style.borderColor = '#6a1b9a';
        button.style.cursor = 'pointer';
        button.style.minWidth = '118px';

        button.addEventListener('click', async (event) => {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            try {
                const vpId = getVpId();

                setButtonState(button, 'SPRACOVAVAM...', true);
                console.log('[DO GRAFIKY] Startujem request-based flow pre VP', vpId);

                await setGrafikaTag(vpId);
                await assignToGrafikaQueue(vpId);

                setButtonState(button, 'HOTOVO', true);
                showToast('VP bolo uspesne zaradene do grafiky.');
                console.log('[DO GRAFIKY] VP uspesne zaradene do grafiky.');

                await sleep(1400);
                window.location.reload();
            } catch (error) {
                console.error('[DO GRAFIKY] Chyba:', error);
                setButtonState(button, DEFAULT_LABEL, false);
                showToast(`DO GRAFIKY zlyhalo: ${error.message}`, 'error');
            }
        }, true);

        const row = document.getElementById(ACTION_ROW_ID) || createActionRow(actionBox, toolbar);
        [checkedButton, hfButton, edButton, vfButton, button].forEach((actionButton) => {
            makeButtonFlowInRow(actionButton);
            row.appendChild(actionButton);
        });

        console.log('[DO GRAFIKY] Button pridany priamo do bloku akcii.');
    }

    function init() {
        let tries = 0;

        const interval = setInterval(() => {
            tries += 1;

            const vfButton = findButtonByAction('showVpSingleForm');

            if (vfButton) {
                clearInterval(interval);
                createButton(vfButton);
                return;
            }

            if (tries > 30) {
                clearInterval(interval);
            }
        }, 1000);
    }

    window.addEventListener('load', init);
})();
