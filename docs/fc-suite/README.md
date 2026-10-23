# FC Party mode – príprava zlúčenia

Stav: zdrojový audit a pracovný návrh, 2026-10-23. Produktový balík sa ešte nevytvára.
Názov schválený vlastníkom: **FC Party mode**. Inštalovateľný súbor: **FC-partymode.user.js**.
Baseline: `75087f8c4cbd34190e69318038bda6ef36eee0f2`; posledný zdrojový stav scriptov je `114ef7b`.
GitHub koordinácia: [issue #34](https://github.com/denkz0ne/moduly-FC-userscripts/issues/34).

## Rozhodujúci rozsah

Autoritatívny je zoznam zapnutých scriptov na screenshote dodanom vlastníkom, nie každý súbor v repe. Verzie na screenshote sú vizuálne odčítané; samotný screenshot nedokazuje zhodu zdrojov alebo uložených nastavení. Pôvodné moduly a historické vrstvy, ktoré aktívny script potrebuje, zostávajú v audite aj bez samostatnej inštalácie.

| Aktívna inštalácia | Chrome / repo | Úloha a zachovávané správanie | Cieľ |
|---|---|---|---|
| FC Action Panel | 1.9 / 1.9 | Spoločný riadok nad AKCIA, configy vľavo, DO FRONTY vpravo, podmenu DO GRAFIKY | spoločný UI host |
| M2 + A4 kalkulačka | 1.11 / 1.11 | Parsovanie rozmerov a plôch, množstvo, prepočet m²/A4, CALC, skrytý panel nad AKTIVITY | calculator |
| stylesheetTune | 1.4 / 1.4 | Typografia, vzhľad, scrollbary, zarovnanie panelov VP | rozdelené štýly + layout owner |
| materialDetector | 5.3.7-core / 5.3.7-core | 8 detektorov, aliasy, štyri zóny, termín, badge, stav podľa VP, premenovanie downloadov | zdroj schválených pravidiel; nahradí ho Next |
| Pokyny Pre - Archiv | 1.9 / **1.10** | IndexedDB archív pokynov, tagy, filtre, export, predvyplnenie pobočky, úprava submit tlačidla | instructions; rozdiel je vzhľad tagov, cieľ zachová oválne |
| Material Detector Next | 0.1.6 / 0.1.6 | Katalóg služieb, DB/cache, návrhy, všeobecné parametre, náhľad a rename debug | jediný cieľový poskytovateľ detekcie |
| labelRegeneratorV2 | 2.0.27 / 2.0.27 | Štítok, layout/editor, zóny, popup, L/E/Ctrl+P; 4 historické vrstvy a instant print K | labels, samostatný pôvodný dizajn |
| FaxCopy Session Keeper | 1.2.2 / 1.2.2 | Oficiálny SSO toast/SDK, kontrola session, pracovné hodiny, indikátor | session |
| setIndustrialState | 2.19 / 2.19 | Rozrobená, spracovanie VP, príslušenstvo, tubusy, potvrdenia, XHR watcher, správy medzi oknami | production + accessories |
| FaxCopy – interný prehliadač obrázkov | 1.2 / dodaný zdroj | Capture klik na obrázok/Alt+klik, blob viewer, zoom, URL clipboard, download, Escape | image-viewer |
| setTitleForIndustrialQueue | 1.6.1 / 1.6.1 | Title/favicon, EXPR/STOP/storno, poradie, sekcie, bezpečné odkazy, refresh skrytej fronty | queue |
| Do grafiky | 3.7 / 3.7 | Zaradenie do VF `301`, tag `602`, požiadavky na server, reload | DO FRONTY (`queue-actions`), prvá položka `queue-actions.graphics`; ďalšie fronty neskôr |
| attendanceBalancePredictor | 0.2.1 / 0.2.1 | Dochádzka person.faxcopy.sk, časové zaokrúhlenie, obed, denný cieľ, prognóza | attendance |
| VP Searchbar | 1.2.4 / 1.2.4 | Vyhľadávanie VP, odkazy v logu, tlač štítka, otváranie VP na pozadí | navigation |
| VPclickToCopy | 1.0 / 1.0 | Klik na ID výrobného príkazu → clipboard, spätná väzba | navigation.copy-vp |

Vypnutý **Slowly Export 1.0** je mimo migrácie. Corel/Mimaki je nesúvisiaci projekt. `detector_template.js`, `detector_common_size.js` a `service-catalog/core/preview.js` sú evidované pomocné/nezapojené zdroje, nie automaticky ďalšie aktívne funkcie. Pôvodný MD sa v budúcom produkte nespustí ako druhý poskytovateľ.

## Dokumentácia

- [Podrobný index 49 zdrojov](audit/INDEX.md): každý súbor má funkcie, signatúry a scopes, premenné a inicializátory, eventy, storage, DOM selektory a zápisy, I/O, logy a lifecycle.
- [Strojový AST inventár](audit/inventory.json): úplné inicializátory premenných, zdrojové riadky, SHA-256, kandidáti identických funkcií. Anonýmne callbacks sú zahrnuté v počte funkcií.
- [Schválené pôvodné detektory](audit/approved-legacy-detectors.json): osem používaných detektorov, pôvodné hashe a porovnanie kópií v Next. Schválenie je rozhodnutie vlastníka, nie tvrdenie o novom regresnom teste.
- [Prevádzkové kontrakty](feature-contracts.md), [architektúra](architecture.md), [konflikty a riziká](risks.md), [rozdiely verzií](version-differences.md), [migračný plán](migration-plan.md), [denník rozhodnutí](progress.md).
- [Dizajn manuál](../fc-web-design-manual.md) je záväzný pre webové UI; dizajn samotných štítkov sa zachováva, rovnako oválne tagy/príznaky.

## Čo tento audit dokazuje

AST parser úspešne prečítal všetky zahrnuté JS zdroje vrátane dodaného vieweru a štyroch historických vrstiev štítkov. Zachytáva 1 498 funkcií/callbackov a 2 111 deklarácií premenných; tieto počty nie sú počet samostatných funkcií v používateľskom menu. Našlo sa 95 skupín doslova rovnakých pomenovaných funkcií medzi rôznymi súbormi. Zhodný text nie je dôkazom zhodného kontextu alebo bezpečnej deduplikácie.

Audit nespúšťa produktové scripty, nepreveruje fyzickú tlač, aktuálne hodnoty localStorage/IndexedDB ani poradie samostatných scriptov v Chrome. Odvodené dynamické kľúče/URL sú v inventári ako výrazy, nie ako domyslené finálne hodnoty. Žiadne zákaznícke údaje ani obsah osobných pokynov neboli exportované.

Pôvodný ZIP zachytáva zdroje v repe; neobsahuje vtedy chýbajúci viewer, historické štítkové súbory z iných commitov ani osobné runtime nastavenia. Táto príprava dopĺňa viewer a historické vrstvy ako neaktívne referenčné `.js.txt` zdroje. Kompletná obnoviteľnosť používateľských dát vyžaduje samostatný export nastavení a IndexedDB pred prechodom.

## Opakovanie inventarizácie

`node --expose-internals tools/audit-fc-sources.cjs 75087f8c4cbd34190e69318038bda6ef36eee0f2`

Vývojový nástroj využíva Acorn dodaný s aktuálnym Node (8.18.0), prípadne dostupný balík acorn. Nevytvára runtime závislosť userscriptu. Uvedený baseline musí byť lokálne dostupný vrátane historických commitov; nástroj pri ich absencii zlyhá. Interná cesta Node nie je stabilné verejné API; pred opakovaním v inom Node prostredí treba dostupnosť parsera overiť.
