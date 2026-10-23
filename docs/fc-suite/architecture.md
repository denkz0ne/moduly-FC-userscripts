# FC Party mode – pracovný návrh architektúry

Stav: návrh na posúdenie; produktový kód sa ešte nezlučuje. Aktualizované podľa rozhodnutí vlastníka 2026-10-23.

## Záväzné zadanie

Jedna inštalácia `FC-partymode.user.js`, `@name FC Party mode`. Zachovať funkčné výsledky, akcie, klávesy a doménové nastavenia. Odstrániť preukázané duplicity; oddeliť pravidlá, prevádzkové parametre a vzhľad. Detekciu zabezpečí Next so schválenými pôvodnými detektormi. Nastavenia MD/Next sa zlúčia a sprehľadnia. Štítkový editor a kalkulačka si zachovajú správanie; centrála poskytne ich prevádzkové voľby a otvorenie príslušnej funkcie.

## Varianty a odporúčanie

1. Jeden ručne udržiavaný veľký JS: jednoduché distribuovanie, ale 49 skúmaných zdrojov a štyri historické vrstvy sa ťažko kontrolujú. Narastá riziko prepísaných názvov a neúplnej aktualizácie.
2. **Modulárny zdroj + deterministická zostava do jedného JS (odporúčanie):** jedna atómová distribúcia, kontrolované poradie a verzia; potrebný malý zostavovací nástroj a manifest. Moduly sa za behu nesťahujú jednotlivo.
3. Malý loader + živé `@require` moduly: pohodlné opravy modulov, ale zmes verzií z cache/main, neskorý štart a sieťová závislosť. Neodporúčané pre hlavný runtime. Verziovaná databáza služieb ostáva samostatným dátovým zdrojom so zálohou/cache.

Vlastník delegoval štruktúru; variant 2 je návrh implementátora, ešte nejde o schválený výsledný dizajn. Produkt môže mať veľa zdrojových súborov, inštaluje sa jediný výsledok.

## Navrhované hranice zdrojov

Budúce cesty, zatiaľ nevytvorené:

| Cesta | Zodpovednosť |
|---|---|
| `party/core/bootstrap.js`, `routes.js`, `registry.js` | Jediná inicializácia na dokument, host/path/frame/phase, závislosti a stav modulov |
| `party/core/lifecycle.js` | Registre listenerov, intervalov, timeoutov, observerov, AbortController a cleanup |
| `party/core/settings.js`, `logger.js` | Typované nastavenia, verzie schémy, per modul logovanie, obmedzený kruhový buffer |
| `party/core/page-bridge.js` | Malý explicitný most k page jQuery/DataTables/SSO a hookom; žiadne zverejnenie GM sieťových práv stránke |
| `party/ui/action-row.js`, `panel-host.js`, `theme.css` | Jediný vlastník action riadka a poradia panelov; FC tokeny a komponenty |
| `party/features/{navigation,queue,production,accessories,session,attendance,calculator,image-viewer,instructions,labels}/` | Vlastné controller/domain/defaults/view/styles podľa potreby, nie mechanické delenie každého riadka do osobitného súboru |
| `party/features/detection/` | Next: API, schválené detektory, katalóg, všeobecný návrh, aliasy, šablóny, label/rename adaptéry |
| `party/settings/` | Centrálny panel a používateľské/admin pohľady nad rovnakými nastaveniami |
| `tools/build-fc-party.*` | Statické zloženie, metadata manifest, kontrola závislostí, hash a reprodukovateľný výstup |
| `FC-partymode.user.js` | Jediný výsledný inštalovateľný artefakt, žiadne runtime eval/importovanie vzdialeného kódu |

Jednotlivé moduly nesmú byť konkatenované do jedného spoločného globálneho scope. Zachovať izolované closures a lokálne názvy. Deduplikácia až po overení vstupov, výstupov a vedľajších účinkov.

## Spúšťanie, oprávnenia a kontext stránky

Bootstrap sa navrhuje na `document-start`, s fázami body/DOM-ready/idle. Len nevyhnutné skoré CSS a registrácia skorých handlerov sa vykonajú hneď. Každá pôvodná funkcia sa priradí ku svojej pôvodnej fáze. Už dosiahnutá fáza sa vybaví ihneď podľa readyState; nesmie sa slepo čakať na load, ktorý už nastal.

Route matrica musí pokrývať moduly detail VP, printLabel vrátane iframe/popup, fronty a iné moduly stránky, `admin.faxcopy.sk` príslušenstvo, `person.faxcopy.sk` dochádzku a wildcard hosty vieweru. Globálne `@noframes` by porušilo tlačový iframe a možno príslušenstvo; každý modul vyhodnotí frame samostatne. Technické moduly infra sa zapnú podľa potrieb spotrebiteľov.

Budúca metadata zjednocujú GM_download, GM_xmlhttpRequest, GM_openInTab a potrebný konfiguračný storage/menu API. Je nutné overiť rozdiel medzi `@grant none`, sandboxom a page window; jednoduchá únia grantov môže odpojiť jQuery/SSO aj pôvodné window hooky. Nedeklarovať globálne privilegované funkcie cez page bridge. Viewer dnes používa `@connect *`; zúženie by mohlo zmeniť povolené zdroje, preto to zostáva explicitnou rozhodovacou položkou.

Referencie overené 2026-10-23: [Tampermonkey metadata a API](https://www.tampermonkey.net/documentation.php?locale=en), [sandbox](https://www.tampermonkey.net/documentation.php?ext=hinc&q=sandbox), [inštalácia .user.js](https://www.tampermonkey.net/faq.php?ext=fire&q=Q102). Dokumentácia uvádza, že run-at je najskorší žiadaný okamih a @require ho môže oddialiť; nejde o záruku okamžitého vykonania. Konkrétnu kombináciu Chrome/Tampermonkey treba preveriť malým kontextovým prototypom pred migráciou hookov.

## Centrálny panel

Jediný vstup **FC Party mode** podľa FC dizajn manuálu, dostupný z relevantných stránok a menu Tampermonkey. Detail VP použije panel-host nad AKTIVITY. V admin/person module sa použije lokálny vhodný host, nie hľadanie AKTIVITY bez konca.

Päť hlavných sekcií: **Prehľad**, **Moduly a nástroje**, **Služby a detekcia**, **Nastavenia**, **Diagnostika a dáta**. Prevádzkové karty vnútri Nastavení: Štítky a súbory, Výroba a príslušenstvo, Fronty a navigácia, Kalkulačka, Pokyny, Session, Dochádzka a Vzhľad. Používateľský pohľad uprednostní aktuálnu stránku a bežné úlohy; admin zobrazí úplný katalóg a pokročilé prevádzkové voľby. Nie šestnásť rovnocenných tlačidiel v jednej lište. Skupiny bez aktívneho modulu sa dajú zobraziť ako vypnuté, nie bez vysvetlenia zmiznúť. Tá istá hodnota má jeden editor; z iných miest je iba odkaz naň.

Nastavenia MD a Next sa zlúčia do **Služby a detekcia**:

- Používateľský pohľad: známa/neznáma služba, výsledky a zdroje hodnôt, šírka/výška v cm a ks, náhľad label/rename, kontrola a úprava návrhu, schválenie.
- Admin pohľad: rovnaké služby a návrhy, aliasy, pravidlá, šablóny a tokeny, stav schválenia, verzie DB, import/export, konflikty a diagnostika.
- Jeden model a jediná validácia; pokročilé voľby sú dostupné cez rozbalenie/explicitný pohľad. Admin pohľad nie je autentifikácia ani nové serverové oprávnenie.
- Schválené staré detektory sú jasne označené a nezobrazujú sa ako návrhy na opätovné schválenie. Nové služby sa získavajú len z povolených detail VP stránok, ich identita výhradne z tabuľky položiek.
- Štítkový editor sa neprepisuje do generického formulára. CALC si zachová vstupy, výpočty a výsledkovú tabuľku. Pokyny zachovajú oválne tagy.

## Nastavenia a údaje

Navrhovaná centrálna schéma: `schemaVersion`, `modules.<id>.enabled`, `modules.<id>.features.<id>.enabled`, `modules.<id>.params`, `diagnostics.<id>.level`, `ui`. Stabilné ID sa zavedú raz a verziujú. Predvolená hodnota každého preneseného parametra musí odkazovať na pôvodnú deklaráciu v inventári.

Za konfigurovateľné sa považujú prevádzkové voľby: časové intervaly s limitmi, pracovné hodiny/dni, dochádzkové ciele, načítavacie timeouty, viditeľnosť sekcií, prístupné predvoľby panelov. DOM selektory, tokeny serverových protokolov a stavové ID sú primárne interné kontrakty; prepisovanie ľubovoľnej lokálnej premennej v centrále by rozbilo logiku. Pokročilé ID/šablóny iba cez konkrétny validovaný editor.

Prepínače sa vzťahujú na používateľské funkcie; parser helper nie je samostatne zapínateľný modul bez vstupného/výstupného kontraktu. Vypnutie závislosti musí ukázať dotknuté funkcie a buď zastaviť spotrebiteľov, alebo ponúknuť existujúci fallback. Nedovoľuje sa stav „labels bežia, ale ticho používajú zastaranú detekciu“.

Osobné konfigurácie navrhujem do GM_getValue/GM_setValue úložiska novej identity scriptu, ktoré je spoločné pre jeho podporované hosty; nejde automaticky o cloud synchronizáciu medzi PC. Export/import nastavení je potrebný samostatne od GitHub DB. localStorage a IndexedDB ostávajú origin-bound a štítky sa spočiatku čítajú cez kompatibilitný adaptér s pôvodnými kľúčmi. Nová identita nemôže priamo čítať súkromné GM storage iného scriptu: ak sa také dáta dodatočne nájdu, vyžadujú export alebo migráciu cez pôvodnú inštaláciu. Doterajší audit aktívnych zdrojov používa pre nastavenia najmä localStorage/IndexedDB, nie hypotetický prístup do cudzieho GM úložiska. Nemigrovať všetko do jedinej DB: oddeliť osobné nastavenia, zdieľaný verziovaný katalóg, cache, ephemeral výsledok konkrétneho VP a archív pokynov. Existujúce `fc_pokyny_archiv/pokyny` sa zachová bez premenovania.

Prvý import nastavení je verzovaný, opakovateľný a nedestruktívny; na inom origine môže byť potrebné navštíviť danú stránku. Konflikty existujúcich hodnôt sa evidujú a neprepisujú potichu. Export pred prechodom musí obsahovať nastavenia, nie automaticky osobné zákaznícke dáta v GH.

## Detektory: schválenie, import a výstupy

Schválených je osem detektorov deklarovaných v pôvodnom entrypointe: fotoobrazy, 41tv, 42foto/web, 67mf, 67spz, 68bs, 49ban, 49s. Autoritatívny je pôvodný modul a jeho konfigurácia; existujúca podobná kópia v Next sa nepovažuje automaticky za ekvivalentnú. Manifest zmrazuje aj pôvodné API, router, control-panel zdroj a poradie deklarácií; osobné nastavenia zatiaľ nie sú exportované. Import sa bude evidovať cez source SHA, verziu adaptéra a stav `approved` bez generického prepisovania pôvodných výsledkov.

Next dnes používa odlišný alias resolver aj univerzálne dopĺňanie parametrov. Pre schválený detektor treba zachovať pôvodnú prioritu/match, parse kontext, template settings, quantity/size, alias a rename kontrakt. Všeobecný fallback sa používa pri chýbajúcom výsledku alebo návrhu; nesmie zmeniť schválený kompletný výsledok. Rozdiel oproti existujúcemu Next pipeline sa rieši kompatibilitným adaptérom a referenčnými príkladmi, nie opätovným odhadom pravidiel.

Previesť aj pôvodný termín expedície a publikovanie `TM_testoLeft`, `TM_testoRight`, `TM_top`, `TM_bottom`, badge a stav podľa VP. Rename handler je aktuálne súčasťou starého MD a musí sa presunúť k adaptéru súborov, inak sa vypnutím starého MD stratí. Vývoj novej integrácie používa debug výstupy a jediného vlastníka; ostré zápisy a download sa zapnú až v kroku parity/cutover. V konečnom balíku je Next jediný poskytovateľ a pôvodný MD nie je druhá aktívna kópia.

## Vlastníctvo DOM, akcií a lifecycle

Jeden panel-host spravuje miesta a poradie config/CALC. Moduly registrujú obsah, nepresúvajú navzájom svoje obaly. Jeden layout owner zarovná hlavičky OBJEDNÁVKA/VÝROBNÝ PRÍKAZ/AKCIA cez dva toolbar priestory rovnakej výšky. Action row bez bledého pozadia, DO FRONTY napravo; nové riešenie musí pokryť i viacriadkový toolbar.

**DO FRONTY** je názov spoločného modulu zaradenia VP do výrobných frontov (`queue-actions`), nie iba premenované tlačidlo jednej serverovej operácie. Dropdown má samostatné registrované tlačidlo pre každý front. Prvá položka Do grafiky zachová pôvodný handler a jeho parametre; ďalšie fronty sa doplnia neskôr. Centrála riadi modul aj jednotlivé položky. Spoločný je render/lifecycle ponuky a diagnostika, konkrétne serverové kroky a tagy zostávajú vo workflowe daného frontu. Detail v [kontrakte DO FRONTY](feature-contracts.md#do-fronty--spoločná-ponuka-výrobných-frontov).

Obsahové listenery sa viažu čo najbližšie k zdroju údajov. Pozorovateľ nemá monitorovať vlastné výstupy; zápisy musia byť idempotentné, spracovanie sa zlučuje a meria. Jeden globálny observer pre úplne všetko by bol ďalšou zlou abstrakciou. SSO, dochádzka a detailové dáta majú odlišné zdroje a rytmus.

Event registry rieši capture priority a modifier klávesy pred presunom handerov. Pre viewer verzus rename zachovať konkrétny rozhodovací strom. Oprava neznámej existujúcej chyby je samostatné rozhodnutie, nie neoznačená zmena pri refaktore.

`stop()` vyčistí registrované zdroje, vlastné uzly, object URL a požiadavky, kde to API dovoľuje. Serverové operácie/tlač sa nedajú „odvolať“ vypnutím. Globálne wrappery možno obnoviť len ak stále patria modulu; inak nutný reload. Spočiatku niektoré prepínače explicitne vyžadujú obnovenie stránky, nesmú predstierať okamžité úplné vypnutie.

## Diagnostika a distribúcia

Každý modul a významná funkcia emituje konzolový záznam `[FC Party mode][module][event]` pre init/ready/skip/error/action a má vlastný prepínač diagnostiky. Detailné trasovanie pomocných funkcií iba opt-in; logovanie každého DOM callbacku by znova zaťažilo CPU. Bez prepisovania globálnej console. Pamäťový buffer má limit a diagnostika štandardne neukladá zákaznícke texty ani celý DOM.

Manifest zostavy fixuje verzie a poradie všetkých modulov; pri vydaní sa bumpne jedna verzia artefaktu. DB má samostatné schema/dataVersion, validáciu, cache a lokálny posledný funkčný stav. GH dostáva len ručne používateľom exportované/schválené databázové zmeny podľa pôvodného rozhodnutia; žiadny automatický zápis do GH z prehliadača.
