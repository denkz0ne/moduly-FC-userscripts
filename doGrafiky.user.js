// ==UserScript==
// @name         Do grafiky
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      1.2
// @description  Pridá button DO GRAFIKY, označí ZaPoGRAF a zaradí VP do CG_Grafik - Grafika
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafikyuser.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const FLAG_CHECKBOX_ID = 'f602'; // ZaPoGRAF
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
            console.log('[DO GRAFIKY] DO VF button nenájdený 😵');
            return;
        }

        if (document.querySelector('#doGrafikyBtn')) {
            return;
        }

        const btn = vfButton.cloneNode(true);

        btn.id = 'doGrafikyBtn';
        btn.innerHTML = 'DO GRAFIKY';

        //
        // pozícia za DO VF
        //
        btn.style.right = '-95px';

        //
        // farba
        //
        btn.style.background = '#7b1fa2';
        btn.style.borderColor = '#6a1b9a';

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
                // 1. otvor OZNACENIA
                //
                console.log('[DO GRAFIKY] otváram označenia 🎨');

                if (typeof window.showTags === 'function') {
                    window.showTags(vpId);
                } else {
                    throw new Error('Funkcia showTags() neexistuje');
                }

                //
                // 2. čakaj na checkbox
                //
                let checkbox = null;

                for (let i = 0; i < 20; i++) {

                    checkbox = document.querySelector(`#${FLAG_CHECKBOX_ID}`);

                    if (checkbox) {
                        break;
                    }

                    await sleep(300);
                }

                if (!checkbox) {
                    throw new Error('Checkbox ZaPoGRAF sa nenašiel');
                }

                //
                // 3. klik checkbox
                //
                checkbox.click();

                console.log('[DO GRAFIKY] ZaPoGRAF označený ✅');

                await sleep(800);

                //
                // 4. zatvor dialog
                //
                const closeBtn = document.querySelector('.ui-dialog-titlebar-close');

                if (closeBtn) {
                    closeBtn.click();
                }

                await sleep(600);

                //
                // 5. otvor DO VF
                //
                console.log('[DO GRAFIKY] otváram VF dialog 📦');

                vfButton.click();

                //
                // 6. čakaj na formulár
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
                    throw new Error('VF formulár sa nenašiel');
                }

                await sleep(700);

                //
                // 7. nastav VF
                //
                const select = form.querySelector('#frm-VF');

                if (!select) {
                    throw new Error('VF select sa nenašiel');
                }

                [...select.options].forEach(opt => {
                    opt.selected = (opt.value === VF_ID);
                });

                select.dispatchEvent(new Event('change', {
                    bubbles: true
                }));

                console.log('[DO GRAFIKY] nastavená CG_Grafik ✨');

                await sleep(500);

                //
                // 8. submit formulára
                //
                console.log('[DO GRAFIKY] odosielam VP 🚚');

                form.submit();

                console.log('[DO GRAFIKY] hotovo 😎');

            } catch (err) {

                console.error('[DO GRAFIKY]', err);
                alert('DO GRAFIKY zlyhalo 😵');

            } finally {

                btn.style.pointerEvents = 'auto';
                btn.style.opacity = '1';
            }
        });

        vfButton.parentNode.insertBefore(btn, vfButton.nextSibling);

        console.log('[DO GRAFIKY] button pridaný 🎉');
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
