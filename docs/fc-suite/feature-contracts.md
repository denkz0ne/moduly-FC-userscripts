# Prevádzkové kontrakty aktívnych funkcií

Ku každému zdroju patrí úplný mechanický index funkcií/premenných v [audite](audit/INDEX.md). Tu je význam a migračná hranica; názvy parametrov sú z aktuálneho kódu, nie nový schválený settings API.

## Clipboard VP – nová požadovaná funkcia

Zaznamenané na požiadanie vlastníka 2026-10-23. Stav: prijatá požiadavka do FC Party mode, zatiaľ neimplementovaná; nejde o súčasť pôvodných 15 inštalácií ani baseline auditu.

Po skopírovaní čísla VP (napríklad `3591344`) do systémovej schránky script automaticky rozpozná kandidáta a hore na FC stránke zobrazí malý plávajúci panel **VP 3591344 – Otvoriť ↗ · ×**. Kliknutie otvorí `/vyrobne_prikazy/detail/index/3591344` na `https://moduly.faxcopy.sk` v novej karte. Krížik znamená ignorovanie; rovnaká hodnota sa nemá opakovane vnucovať. Samotné rozpoznanie neotvára stránku a nedokazuje existenciu VP.

Funkcia patrí pod Navigácia, má samostatný prepínač v centrálnych nastaveniach a vlastnú diagnostiku. Panel používa FC dizajn manuál. Prístup k schránke sa povoľuje vedome používateľským úkonom; automatická kontrola po povolení prebieha na aktívnej podporovanej FC stránke a pri návrate z inej aplikácie/karty. Nie je sľúbené čítanie pri práci mimo aktívneho browserového dokumentu. Pri odmietnutí oprávnenia sa opakované čítanie pozastaví a zobrazí sa zrozumiteľný stav.

Navrhované implementačné predvoľby na overenie:

- Stabilné ID funkcie `navigation.clipboard-vp`; text zo schránky orezať a akceptovať iba samostatných sedem číslic, nie ľubovoľné čísla vložené vo väčšom texte. Dĺžka formátu je zatiaľ návrh odvodený z príkladu.
- Kontrola cez `navigator.clipboard.readText()` pri focus/visibility návrate a najviac raz za 2 sekundy pri aktívnej karte. Žiadne paralelné read promise ani polling skrytej/neaktívnej karty; po vypnutí odstrániť timer/listenery/panel. Konkrétne správanie focus a permission treba overiť v aktuálnom Chrome/Tampermonkey.
- Ignorované čísla držať pre aktuálnu kartu/reláciu a deduplikovať zobrazovaný návrh. Obnovenie stránky začne novú reláciu; toto je navrhovaná hranica ignorovania, nie požiadavka na trvalú blacklist DB.
- Aktivovať v hlavnom dokumente podporovaných stránok moduly.faxcopy.sk; nezdvojovať panel v iframe, tlačovom okne alebo label stránke. Odkaz vytvárať len z validovaného čísla a pevného FC originu.
- Obsah schránky ani nerozpoznaný text neukladať do diagnostických logov, služby DB či GH. Logovať iba stav funkcie/permission/error a počty akcií; žiadne neobmedzené konzolové výpisy pri každom pollingu.

Overiť prípady: kopírovanie z mailu a návrat do FC, validné číslo/okrajové medzery/neplatný text, opakovaný rovnaký obsah, ignorovanie, nové číslo, klik otvorí práve jeden VP, zamietnuté oprávnenie, chýbajúce API/HTTP, strata focus, iframe/popup, vypnutie a opätovné zapnutie. Odmietnutie oprávnenia nesmie ovplyvniť ostatné funkcie balíka.

Podklad: [Clipboard.readText](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText), [Clipboard API – Chromium permission/focus podmienky](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#security_considerations), overené 2026-10-23. Konkrétna implementácia nesmie predpokladať neobmedzený prístup iba preto, že beží ako userscript.

## Pôvodné funkcie

| Oblasť | Vstup → spracovanie → výstup | Nastavenia a životný cyklus |
|---|---|---|
| Action panel | Nadpis AKCIA → ensureActionPanel/adoptKnownButtons/orderButtons → NEXT CFG, MD CFG, CALC a DO FRONTY/menu | KNOWN_BUTTONS + ID/style hodnoty, body observer s RAF; jediný spoločný vlastník. Technické ID sú interný kontrakt, nie používateľská hodnota. |
| CALC | Riadky rozmerov/formátov/jednotiek/m² + ks → parseLine/calc → tabuľka a súčty m²/A4 | A4 plocha a prevody sú doménové invarianty. Ponechať ručnú úpravu ks, min 1, rovnaké zaokrúhlenie; init load/readyState, čakanie na action panel, panel nad AKTIVITY. |
| CSS/layout | Existujúci DOM FC → pevné CSS pravidlá + meranie hlavičky AKCIA → upravené texty/ikony/grid | document-start, následná inicializácia alignment po nájdení badge/boxov; RAF pri resize/content. Rozdeliť farby/rozmery od meracej logiky. |
| Pôvodná detekcia | API collectPageContext + registrované detektory + nastavenia → detectCurrentLabel → zóny, badge a per-VP stav | STATE_TTL_MS=30000, STATE_KEY_PREFIX=`materialDetectorState:`, LAST_SIZE_ALIAS_STORAGE_PREFIX. MD alias/config kľúče v detector_api. Termín z pôvodnej detectExpeditionDate. |
| Premenovanie | Anchor súboru + per-VP výsledok/settings → build filename template + sanitize → Blob download, GM_download fallback | DEFAULT_RENAME_PATTERN=`{alias}_{size}_{quantity}_{vp} {original}.{ext}`. Zachovať flag natívneho downloadu, fallback, pôvodný názov/príponu a chovanie pri neexistujúcej detekcii. Samostatné prenesenie pred vypnutím legacy MD. |
| Next | Tabuľka `#vpProducts` + `#VPZDParams`, katalóg, alias resolver → service + detector/generic → detegované polia, preview a renameDebug | OUTPUT_MODE dnes preview; source labels/šírka/výška/ks. Návrhy musia byť ručne kontrolované. DB schema/dataVersion 1; CACHE_TTL_MS=6h, URL manifestu a povoleného dátového priečinka. |
| MD/Next konfigurácia | Výsledky, katalóg a uložené settings → editácia služieb/šablón/návrhov → zápis nastavení a lokálnych návrhov/export | Pôvodné dve UI sa nahradia jedným user/admin pohľadom. Pôvodné storage namespaces ostanú na prvom importe mapované a zdokumentované; neprepísať konfliktné hodnoty potichu. |
| Štítky | VP + TM zóny + layout → historický renderer/overlay + ďalšie vrstvy → štítok/popup/manual print/instant print | Pôvodný layout 62×45 mm, zdroj 86×50 mm v základnej vrstve; ide o zachovávané defaulty, nie nový dizajn. Config/localStorage vrátane `labelRegeneratorLayoutConfigV201`, mode/panel/selected block. L, K, E v popup, Ctrl+P a ochrana pri písaní. |
| Instant print | VP + badge/last zones → hidden iframe + readiness check → print a cleanup | READY_TIMEOUT_MS=10000, CLEANUP_AFTER_PRINT_MS=2500, activeJob; zachovať font/image/layout readiness a neduplikovať kláves K. |
| Pokyny | Submit formulára + príjemca/typ/text/tagy → uloženie timestamp/url/VP/message/tags → IndexedDB archív, filter/exportJSON | DB `fc_pokyny_archiv`, store `pokyny`, schema1 a indexy timestamp/vp/recipientText. Šesť existujúcich tagov. Submit handler existuje spolu s pôvodným formulárom webu; overiť uloženie pri navigácii. |
| Session | Čas, status `/sso/status`, oficiálny toast a SDK → watch/keep active → indikátor a oficiálny stay-signed-in flow | RANDOM_INTERVAL 2.5–5.5min; STATUS_INTERVAL 58–86s; TRIGGER_COOLDOWN 65s; pracovné dni Po–Pi a 6–16h; recheck mimo hodín15–75s; countdown1s. Manuálne aktivity sa nezamieňajú s novou autentifikáciou. |
| Výroba/príslušenstvo | Form settings/select, accept linky a popup → background POST/GET/XHR hooks → Rozrobená/spracovanie, tubusy, zero-out flow | STATE_VALUE_IN_PROGRESS=`1`, AUTO_CONFIRM_WINDOW_MS=3000, TUBE_OPTIONS T75/T63/T45/T120 s pôvodnými kódmi. Správy `fc-accessory-zero-out-done`; zachovať host/frame kontext. |
| Prehliadač obrázkov | Image extension/Alt+klik bez blokujúcich modifiers → GM GET blob → overlay, zoom0.1–8, copy URL a download | document-start; obrázkové prípony avif/bmp/gif/jpg/jpeg/png/svg/webp; @connect*; objectURL revoke pri close, Escape a wheel. Dizajn toolbaru sa zjednotí podľa manuálu, obrazový obsah sa nemení. |
| Fronta | DataTables a obsah queue/log → title/favicon/count, EXPR navrch, stavové riadky, bezpečné linky, print link | BACKGROUND_CHECK_INTERVAL=30000, TABLE_REFRESH_SETTLE_MS=4000; iba skrytá fronta sa pravidelne refreshuje; uloženie sekcií prefix `fc-industrial-queue-section-state:{pathname}:{sectionId}`. Detail VP mení iba title. |
| Do grafiky | VP ID + tlačidlo VF → požiadavky zaradenia/tagovania → feedback a reload po úspechu | GRAFIKA_VF_ID=`301`, ZAPOGRAF_TAG_ID=`602`, stav busy a error. Akcia má serverové vedľajšie účinky; pozorovanie/audit ju nesmie samo vykonať. |
| Dochádzka | `#attendance-month`, dátumy/časové rozsahy → actual day/forecast/quarter rounding → dopočítané bunky a saldo | DAILY_PRESENCE_TARGET=510min, DAILY_WORK_TARGET=480min, LUNCH_BREAK=30min, FORECAST_ARRIVAL=375min, MAX_DAILY_DEVIATION=45min. Vlastný table observer; zachovať detekciu zmien bez spracovania vlastných zápisov. |
| VP navigácia | Pole rýchleho hľadania, ID v queue logu, link VP → upravené odkazy/search → VP/printLabel/background tab | GM_openInTab + window.open fallback, ochrana modifiers a natívnych interakcií. Identické link helpery sa zdieľajú až po porovnaní pravidiel fronty a searchbaru. |
| Klik ID → copy | XPath `vpVpDetail/div[1]/strong[1]` → clipboard.writeText → krátke zelené zvýraznenie | init hneď alebo observer do nájdenia elementu; observer sa odpojí. Nezavádzať druhý listener k tomu istému ID. |

## Úložiská a udalosti ako verejné kontrakty

Kompletné priame volania, dynamické výrazy kľúčov a window zápisy sú pri každom súbore. Dôležité skupiny:

- Legacy MD: `materialDetector.materialAliases.v1`, `materialDetector.panelConfig.v1`, `materialDetector.lastSizeAlias:`, `materialDetectorState:`, `TM_*`, aliasy `testoleft/testoright` v label vrstve.
- Next: `materialDetectorNext.materialAliases.v1`, `materialDetectorNext.panelConfig.v1`, `materialDetectorNext.lastSizeAlias:`, `.database.cache.v1`, `.database.lastCheck.v1`, `.proposals.v1`, `.publicState.v1`.
- Štítky: layout/panel/mode/selected block + popup panel hidden, pripravenosť `__labelRegeneratorReady` a udalosť `labelRegeneratorReady`; historické export/importy môžu používať ďalšie kľúče zaznamenané v AST inventári.
- API povrchy: `window.FCUserscripts`, `window.MaterialDetectorAPI`, `window.MaterialDetectorControlPanel`, `window.MaterialDetectorNext*`, `window.labelInstantPrintBeta`; pri migrácii budú adaptéry zachovávať potrebných spotrebiteľov, nie každý globál navždy.
- Udalosti: `materialDetector:updated`, Next updated/configChanged/databaseUpdated/refreshDatabase, `storage`, page keyboard/click/message/resize/load/visibilitychange. Každý nový typ v runtime bude mať jednu payload schému a vlastníka.
