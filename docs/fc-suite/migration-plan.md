# FC Party mode – prípravný migračný plán

**Goal:** Preniesť 15 aktívnych inštalácií do jediného balíka FC Party mode so zachovaním výsledkov, jedným Next providerom, zlúčeným configom a centrálnymi prevádzkovými voľbami.

**Architecture:** Modulárny zdroj zostavovaný do `FC-partymode.user.js`; deterministické poradie, lifecycle a routovanie, FC UI host. Toto je pracovný plán odvodený z [návrhu](architecture.md), nie pokyn spustiť implementáciu bez jeho posúdenia.

**Tech stack:** Browser JavaScript, Tampermonkey API, pôvodné page API a IndexedDB/localStorage; vývojový bundler bez runtime vzdialených JS závislostí.

## Globálne podmienky

- Main-only workflow podľa AGENTS.md, existujúci ZIP baseline a nezmenené pôvodné inštalácie počas prípravy. Issue #34 koordinuje prípravu; produktové zmeny majú konkrétne issues podľa dotknutých entrypointov.
- Názov FC Party mode; artifact FC-partymode.user.js. Jedna nová identita; pôvodné identity a dáta slúžia na obnovu, neprepisovať ich.
- Next nahrádza MD, osem pôvodných detektorov je schválených as-is. MD/Next config sa zlúči do používateľského a admin pohľadu; štítkový dizajn sa nemení.
- Bez simultánnych zápisov starého a nového vlastníka na rovnakej stránke. Testy najprv offline/fixture, následne kontrolovaný profil alebo stránka s vypnutými pôvodnými príslušnými modulmi.
- Každá migrácia má nový kontrakt a parity kontrolu. Deduplikovať až po prenose správania, žiadna súbežná zmena algoritmu a vzhľadu a úložiska v tom istom neporovnateľnom kroku.

## 0. Zafixovanie referencie a prijatie návrhu

- [x] Zapísať aktívny screenshot zoznam, source SHA, verzie a rozdiely.
- [x] Zachovať viewer 1.2 a 4 pinned label vrstvy ako neaktívne referenčné zdroje.
- [x] Vygenerovať audit všetkých dostupných zdrojov a ich doslovných funkčných duplicít.
- [x] Evidovať 8 pôvodných detektorov ako schválené, import do runtime zatiaľ nenastal.
- [ ] Rozhodnúť o modular-source/single-artifact návrhu a pokročilom config flow.
- [x] Porovnať repo archiver 1.9/1.10: iba návrat vzhľadu oválnych tagov, doménová logika a DB schéma bez zmeny.
- [ ] Pred cutover doplniť osobné nastavenia z browsera cez schválený export a odlíšiť ich od repo defaults.
- [ ] Pripraviť anonymizované vstupy/výstupy známych služieb a dokumentovať current capture order v Chrome. Nerobiť ostré serverové akcie len za účelom inventarizácie.

Výstup: odsúhlasený kontrakt, matica parity a verziovaná baseline; až potom produktová implementácia.

## 1. Overenie kontextov a prvý spoločný runtime

- [ ] Vytvoriť malý diagnostický prototyp pre TM grants/page window, jQuery/DataTables/SSO a frame kontext; bez produkčných operácií.
- [ ] Definovať manifest route/phase/dependsOn/capabilities a idempotentné init/start/stop. Prototyp musí dokázať identitu hookov v skutočnom page window (setTimeout/open/print, confirm a XHR), nielen úspešné vykreslenie UI. Zachovať aj HTTP a wildcard subdomény vieweru v route politike, pokiaľ vlastník nerozhodne o zmene.
- [ ] Zaviesť lifecycle registry, log levels a príznaky funkcií. Odskúšať dvojitý init, oneskorený DOM, zlyhaný provider, off a reload-required stavy.
- [ ] Zaviesť deterministický bundler a fixnú verziu všetkých zdrojov v jedinom artefakte; skontrolovať výsledné metadata/update/download/grants/match, žiadne živé @require k main.

Výstup: jeden vypínateľný runtime shell, zatiaľ bez nahradenia pracovnej inštalácie.

## 2. Nastavenia, UI host a súbeh

- [ ] Vytvoriť validačné schémy allowlistovaných parametrov s hodnotami z inventára; žiadny automatický editor všetkých premenných.
- [ ] Jeden settings store s export/import/version a návratom na default per modul. Podrobné doménové nastavenia zostávajú cez adaptéry.
- [ ] FC theme tokeny, menu a panel-host/action-row; configy/CALC nad AKTIVITY, DO FRONTY napravo, bez pozadia toolbaru, zarovnané tri hlavičky a malé odsadenie od zelenej lišty.
- [ ] Vyriešiť detekciu súbehu starej/nového verzie len tam, kde je overiteľná; inak zobraziť konkrétnu kontrolu vypnutia. Beta používa debug výstupy/izolované DOM ID a blokuje kolízne ostré akcie pri zistenom súbehu; automaticky nevypína iné inštalácie. Bez falošného tvrdenia, že browser spoľahlivo poskytuje zoznam všetkých ďalších TM scriptov.

Kontrola: viac otvorených panelov, úzky/široký viewport, zoom, vypnutý modul, nulová zmena štítkového canvasu/CSS.

## 3. Nezávislé a navigačné funkcie

- [ ] Preniesť copy VP a VP Searchbar so zachovaním background/modifier správania.
- [ ] Doplniť novú samostatne vypínateľnú funkciu [Clipboard VP](feature-contracts.md#clipboard-vp--nová-požadovaná-funkcia): automatický návrh otvorenia čísla zo schránky, plávajúci panel, otvorenie klikom a ignorovanie krížikom. Overiť permission/focus, formát, deduplikáciu/ignore, nové číslo, vypnutie, pause v skrytej karte a žiadne logovanie obsahu schránky. Je to nová funkcia, nie zmena pôvodného search/copy správania.
- [ ] Preniesť Session Keeper vrátane pracovných hodín a oficiálneho SSO flow; overiť viditeľnú/skrytú kartu a offline zlyhanie.
- [ ] Preniesť dochádzku s pôvodnými defaultmi a scénarmi quarter rounding/obed/rozdiel kalendárnych dní.
- [ ] Preniesť CALC s vlastnými view/styles a pôvodným parserom; porovnať formáty A4, mm/cm/m, m², ks, editáciu množstva a súčty.

Každý podkrok je samostatný reviewable commit s runtime switchom. Časti neprislúchajúce route sa vôbec neinicializujú.

## 4. Detekcia a konsolidovaný config

- [ ] Importovať schválené originálne detektory podľa `approved-legacy-detectors.json`, vrátane kontraktu API/router/control panel a skutočnej priority registrácie; nemiešať ich bez porovnania s odlišnými kópiami v Next.
- [ ] Kompatibilitný API/context adaptér zachová match/prioritu, alias resolver, settings, zóny, rozmer/quantity a rename tokeny. Udržať pôvodné doménové názvy/tokeny.
- [ ] Lokálny import legacy alias/config settings je jeden verzovaný krok; pri existujúcich Next hodnotách vytvoriť záznam konfliktov, nestratiť ani jeden vstup.
- [ ] V Next oddeliť schválený výstup a neznámu službu/generic návrh. Univerzálna normalizácia šírka/výška/ks nesmie potichu zmeniť schválený výstup.
- [ ] Zlúčiť MD a Next config user/admin nad jedným modelom, schválené importy odlíšiť od pending návrhov. Zachovať manuálny review/edit/schválenie nových hodnôt a manuálny GH upload DB.
- [ ] Doplniť label/rename/badge/termín adaptéry a jasné event payloady. Next zostáva v tejto vývojovej etape debug pre ostré výstupy.

Parity scenáre: všetkých 8 detektorov a ich varianty, šablóny/aliasy s override, nulový/chýbajúci parameter, termíny, neznámy 82/f, rozmer mm→cm, nezávislé ks, dva rôzne VP v taboch, fallback pri nedostupnej DB, generický parser bez preschvaľovania schválených pravidiel.

## 5. Súbory a štítky

- [ ] Preniesť viewer 1.2 a rename s explicitným capture poradím; obrázok, Alt+klik, Ctrl/Shift/Cmd, link bez prípony, chybná odpoveď, download fallback, opakované otvorenie a cleanup blobu.
- [ ] Konsolidovať label vrstvy v presnom poradí 2.0.6 → 2.0.18 → 2.0.21 → 2.0.22 → instant-print → 2.0.27. Každý odstránený patch musí mať pokryté pôvodné správanie.
- [ ] Overiť L, K, E, Ctrl+P, ochranu pri písaní, načítanie fontov a obrázkov, readiness, popup blokovanie, editor a uloženie layoutu. Print preview je samostatná kontrola; fyzickú tlač označiť vykonanou len po reálnom potvrdení.
- [ ] Porovnať číselné rozloženie štítka a jeho vizuálny výstup; FC téma sa nesmie aplikovať na samotný štítok.

## 6. Fronty, výroba, príslušenstvo a pokyny

- [ ] Preniesť queue title/sekcie/EXPR/STORNO/STOP/linky a refresh cez pôvodné DataTables, s uložením viditeľnosti podľa route.
- [ ] Preniesť DO GRAFIKY ako modul akcie v DO FRONTY s rovnakými serverovými požiadavkami a fallbackmi; network spies/fixture pred reálnou obsluhou.
- [ ] Preniesť výrobu a príslušenstvo vrátane XHR/confirm wrapperov, admin frame a postMessage, tubusov a busy guards. Otestovať stop/start a vlastníctvo wrapperov.
- [ ] Preniesť archiver a jeho vlastnú IndexedDB bez premenovania, zachovať submit/pobočka/tagy/filter/export a oválne tagy. Otestovať opakované mount a návrat na stránku.

## 7. Deduplikácia, výkon a ostrý prechod

- [ ] Až po parity konsolidovať identické utility, selektory a I/O adaptéry; ručné potvrdenie kontextov pri 95 AST kandidátoch.
- [ ] Zmerať idle callback count, bounded polling, init count, memory/DOM nodes po opakovanom otvorení a CPU na rovnakých stránkach. Žiadny vlastný DOM výstup nesmie nekonečne spúšťať vstupný observer.
- [ ] Exportovať osobné nastavenia/archív a verziu katalógu. Nechať pôvodné inštalácie dostupné na návrat a vypnúť ich jednotlivo až pri prechode.
- [ ] Po schválenej parity prepnúť Next na jediný ostrý label/rename provider. Skontrolovať, že pôvodné MD a pôvodné moduly už paralelne neobsluhujú stránku.
- [ ] Publikovať jednu overenú verziu FC Party mode, jeden inštalačný link a obnoviteľný snapshot s presným manifestom. Raw aktualizácia sama neukončí starý runtime v už otvorených kartách; po prechode je potrebný reload príslušných dokumentov.

## Rollback

Vypnúť FC Party mode, obnoviť stránky a zapnúť pôvodné inštalácie. Pôvodné storage schémy zostanú dostupné; prípadné obnovenie z exportu je explicitné a bez zmazania novších záznamov. Na serveri už vykonané akcie sa tým nevracajú. Centrálne nastavenia majú oddelené schemaVersion; zastaraný/novší import sa validuje pred zápisom. Produktový cutover nesmie byť spojený s nevratným vymazaním starej konfigurácie.

## Kontrola plánu

Najrizikovejšie prípady majú vlastné kontroly vyššie: sandbox+page globals a iframe (1), oneskorená fáza/duplicitné mount (1–2), viac VP (4–5), capture keyboard/download (5), schválené detektory verzus generic a config kolízie (4), pending serverové operácie pri off (6–7). Offline test nepreukazuje live serverovú operáciu ani fyzickú tlač. Potvrdenie výsledného návrhu má predchádzať implementácii, nie ďalší automatický migračný krok.
