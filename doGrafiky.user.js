// ==UserScript==
// @name         Do grafiky
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      3.0
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

    async function warmUpQueueForm(vpId) {
        try {
            await postForm(`/vyrobne_prikazy/industrialQueue/industrialQueueAddVpForm/${vpId}`, {
                data: ''
            }, true);
        } catch (error) {
            console.warn('[DO GRAFIKY] Nepodarilo sa nacitat queue formular, pokracujem dalej.', error);
        }
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
        button.textContent = label;
        button.style.pointerEvents = busy ? 'none' : 'auto';
        button.style.opacity = busy ? '0.6' : '1';
    }

    function createButton() {
        const vfButton = [...document.querySelectorAll('a.button.green.small')]
            .find((button) => button.textContent.trim().toLowerCase() === 'do vf');

        if (!vfButton || document.getElementById(BUTTON_ID)) {
            return;
        }

        const button = vfButton.cloneNode(true);
        button.id = BUTTON_ID;
        button.textContent = 'DO GRAFIKY';
        button.style.right = '-95px';
        button.style.background = '#7b1fa2';
        button.style.borderColor = '#6a1b9a';

        button.addEventListener('click', async (event) => {
            event.preventDefault();

            const originalLabel = 'DO GRAFIKY';

            try {
                const vpId = getVpId();

                setButtonState(button, 'SPRACOVAVAM...', true);
                console.log('[DO GRAFIKY] Startujem request-based flow pre VP', vpId);

                await setGrafikaTag(vpId);
                await warmUpQueueForm(vpId);
                await assignToGrafikaQueue(vpId);

                setButtonState(button, 'HOTOVO', true);
                console.log('[DO GRAFIKY] VP uspesne zaradene do grafiky.');

                window.location.reload();
            } catch (error) {
                console.error('[DO GRAFIKY] Chyba:', error);
                setButtonState(button, originalLabel, false);
                alert(`DO GRAFIKY zlyhalo: ${error.message}`);
            }
        });

        vfButton.parentNode.insertBefore(button, vfButton.nextSibling);
        console.log('[DO GRAFIKY] Button pridany.');
    }

    function init() {
        let tries = 0;

        const interval = setInterval(() => {
            tries += 1;

            const vfButton = [...document.querySelectorAll('a.button.green.small')]
                .find((button) => button.textContent.trim().toLowerCase() === 'do vf');

            if (vfButton) {
                clearInterval(interval);
                createButton();
                return;
            }

            if (tries > 30) {
                clearInterval(interval);
            }
        }, 1000);
    }

    window.addEventListener('load', init);
})();
