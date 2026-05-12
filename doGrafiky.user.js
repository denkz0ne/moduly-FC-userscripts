// ==UserScript==
// @name         Do grafiky
// @namespace    faxcopy-userscripts
// @author       mato e.
// @version      2.1
// @description  DO GRAFIKY → označí ZaPoGRAF a zaradí VP do CG_Grafik - Grafika
// @updateURL    https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js
// @downloadURL  https://github.com/denkz0ne/moduly-FC-userscripts/raw/main/doGrafiky.user.js
// @match        https://moduly.faxcopy.sk/vyrobne_prikazy/detail/index/*
// @run-at       document-end
// ==/UserScript==

(function () {
    'use strict';

    const GRAFIKA_VF_ID = '301';

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
        // pozícia
        //
        btn.style.right = '-95px';

        //
        // farba
        //
        btn.style.background = '#7b1fa2';
        btn.style.borderColor = '#6a1b9a';

        btn.addEventListener('click', async (e) => {

            e.preventDefault();

            try {

                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.6';

                console.log('[DO GRAFIKY] štart 🚀');

                //
                // OTVOR OZNACENIA
                //
                const tagsButton = [...document.querySelectorAll('a')]
                    .find(a => a.getAttribute('title') === 'Označenia');

                if (!tagsButton) {
                    throw new Error('Button Oznacenia sa nenašiel');
                }

                console.log('[DO GRAFIKY] otváram označenia 🎨');

                tagsButton.click();

                //
                // ČAKAJ NA CHECKBOX
                //
                let checkbox = null;

                for (let i = 0; i < 50; i++) {

                    const dialogs = [...document.querySelectorAll('.ui-dialog')];

                    const activeDialog = dialogs.find(dialog =>
                        dialog.style.display !== 'none' &&
                        dialog.innerText.includes('ZaPoGRAF')
                    );

                    if (activeDialog) {

                        const labels = [...activeDialog.querySelectorAll('label')];

                        const targetLabel = labels.find(label =>
                            label.textContent.includes('ZaPoGRAF')
                        );

                        if (targetLabel) {

                            const forId = targetLabel.getAttribute('for');

                            if (forId) {
                                checkbox = activeDialog.querySelector(`#${forId}`);
                            }

                            if (checkbox) {
                                break;
                            }
                        }
                    }

                    await sleep(300);
                }

                if (!checkbox) {
                    throw new Error('Checkbox ZaPoGRAF sa nenašiel');
                }

                //
                // OZNAČ CHECKBOX
                //
                if (!checkbox.checked) {

                    checkbox.click();

                    console.log('[DO GRAFIKY] ZaPoGRAF označený ✅');

                    await sleep(800);

                } else {

                    console.log('[DO GRAFIKY] ZaPoGRAF už bol označený 🙂');
                }

                //
                // ZAVRI LEN OZNACENIA DIALOG
                //
                const dialogs = [...document.querySelectorAll('.ui-dialog')];

                const tagsDialog = dialogs.find(dialog =>
                    dialog.style.display !== 'none' &&
                    dialog.innerText.includes('ZaPoGRAF')
                );

                if (tagsDialog) {

                    const closeBtn = tagsDialog.querySelector('.ui-dialog-titlebar-close');

                    if (closeBtn) {

                        closeBtn.click();

                        console.log('[DO GRAFIKY] dialog zatvorený 🚪');
                    }
                }

                //
                // POČKAJ NA ZATVORENIE
                //
                await sleep(1200);

                //
                // OTVOR DO VF
                //
                console.log('[DO GRAFIKY] otváram DO VF 📦');

                vfButton.click();

                await sleep(1200);

                //
                // ČAKAJ NA VF FORMULÁR
                //
                let form = null;

                for (let i = 0; i < 50; i++) {

                    form = document.querySelector('#frm-industrialVPForm');

                    if (form && document.body.contains(form)) {
                        break;
                    }

                    await sleep(300);
                }

                if (!form) {
                    throw new Error('VF formulár sa nenašiel');
                }

                console.log('[DO GRAFIKY] VF formulár nájdený ✅');

                //
                // NASTAV VF
                //
                const select = form.querySelector('#frm-VF');

                if (!select) {
                    throw new Error('VF select sa nenašiel');
                }

                [...select.options].forEach(opt => {
                    opt.selected = (opt.value === GRAFIKA_VF_ID);
                });

                select.dispatchEvent(new Event('change', {
                    bubbles: true
                }));

                console.log('[DO GRAFIKY] nastavená CG_Grafik ✨');

                //
                // POČKAJ NA MULTISELECT
                //
                await sleep(1500);

                //
                // SUBMIT BUTTON
                //
                console.log('[DO GRAFIKY] klikám na Zaradiť 🚚');

                const submitBtn = form.querySelector('input[type="submit"][value="Zaradiť"]');

                if (!submitBtn) {
                    throw new Error('Submit button sa nenašiel');
                }

                submitBtn.click();

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
