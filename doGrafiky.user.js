// ==UserScript==
// @name         Do grafiky
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.0
// @description  Pridá button DO GRAFIKY, označí ZaPoGRAF a zaradí VP do CG_Grafik - Grafika
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafikyuser.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const FLAG_ID = 602; // ZaPoGRAF
    const VF_ID = '301'; // CG_Grafik - Grafika

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function getVpId() {
        const match = window.location.pathname.match(/index\/(\d+)/);
        return match ? match[1] : null;
    }

    function createButton() {

        const vfButton = [...document.querySelectorAll('a.button.green.small')]
            .find(btn => btn.textContent.trim().toLowerCase() === 'do vf');

        if (!vfButton) {
            console.log('[DO GRAFIKY] Nenašiel som DO VF button 😵');
            return;
        }

        if (document.querySelector('#doGrafikyBtn')) {
            return;
        }

        const btn = vfButton.cloneNode(true);

        btn.id = 'doGrafikyBtn';
        btn.innerHTML = 'DO GRAFIKY';

        btn.style.background = '#7b1fa2';
        btn.style.borderColor = '#6a1b9a';
        btn.style.marginRight = '5px';

        btn.addEventListener('click', async (e) => {

            e.preventDefault();

            const vpId = getVpId();

            if (!vpId) {
                alert('Nepodarilo sa načítať ID VP 😵');
                return;
            }

            try {

                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.6';

                console.log('[DO GRAFIKY] štart 🚀');

                //
                // 1. nastav ZaPoGRAF
                //
                console.log('[DO GRAFIKY] označujem ZaPoGRAF 🎨');

                if (typeof window.set === 'function') {
                    window.set(FLAG_ID, vpId);
                } else {
                    throw new Error('Funkcia set() neexistuje');
                }

                await sleep(1200);

                //
                // 2. otvor DO VF dialog
                //
                console.log('[DO GRAFIKY] otváram VF dialog 📦');

                vfButton.click();

                //
                // 3. čakaj na form
                //
                let form = null;

                for (let i = 0; i < 30; i++) {

                    form = document.querySelector('#frm-industrialVPForm');

                    if (form) {
                        break;
                    }

                    await sleep(300);
                }

                if (!form) {
                    throw new Error('Nenašiel som VF formulár');
                }

                await sleep(500);

                //
                // 4. nastav VF
                //
                const select = form.querySelector('#frm-VF');

                if (!select) {
                    throw new Error('Nenašiel som VF select');
                }

                [...select.options].forEach(opt => {
                    opt.selected = (opt.value === VF_ID);
                });

                select.dispatchEvent(new Event('change', { bubbles: true }));

                console.log('[DO GRAFIKY] nastavená fronta CG_Grafik ✨');

                await sleep(400);

                //
                // 5. submit
                //
                form.submit();

                console.log('[DO GRAFIKY] VP odletel do grafiky 🛸');

            } catch (err) {

                console.error('[DO GRAFIKY]', err);
                alert('DO GRAFIKY zlyhalo 😵');

            } finally {

                btn.style.pointerEvents = 'auto';
                btn.style.opacity = '1';
            }
        });

        vfButton.parentNode.insertBefore(btn, vfButton);
    }

    function init() {

        let tries = 0;

        const interval = setInterval(() => {

            tries++;

            const vfButton = [...document.querySelectorAll('a.button.green.small')]
                .find(btn => btn.textContent.trim().toLowerCase() === 'do vf');

            if (vfButton) {

                clearInterval(interval);
                createButton();

                console.log('[DO GRAFIKY] pripravený 😎');
            }

            if (tries > 30) {
                clearInterval(interval);
            }

        }, 1000);
    }

    window.addEventListener('load', init);

})();
