# FC Party mode – konflikty, prekážky a otvorené overenia

Stav k baseline 75087f8, doplnený pôvodným viewerom 1.2 od vlastníka. Rozlišovať zdrojom potvrdený mechanizmus od dôsledku, ktorý ešte treba overiť v živom Chrome.

| ID | Dôkaz v zdroji | Dopad a potrebný krok |
|---|---|---|
| R01 | `FCActionPanel.user.js:185–249`: presuny prvkov a body observer; oprava append-last slučky vo v1.9 | Regresný scenár: stabilná stránka nesmie donekonečna vyvolávať nové zápisy; sledovať init count a mutation rate pred/po. |
| R02 | `materialDetector.user.js:34–45,190–204`; `labelInstantPrint.beta.js:87–106`; historické labels storage | Zóny `TM_*` sú zdieľané naprieč tabmi toho istého originu. Zachovať kompatibilitu, ale výsledky interne vždy viazať na VP a job; otestovať dva súčasné VP a popup/iframe. |
| R03 | `materialDetector.user.js:405–557` má rename/Blob/GM_download handler | Nie je to len parser; jeho vyradenie bez prenesenia rename akcie odstráni funkčnosť. Pôvodný samostatný renamer zo skoršej konverzácie nie je v aktívnom screenshote ani identifikovaný v repe; tento rozdiel treba mať v evidencii. |
| R04 | `service-catalog/core/extraction.js`: alias resolver, addUniversalParameters, applySettings | Kópie detektorov v Next môžu mať iný kontext/API a postprocessing. Zhoda parserového tela nestačí na schválenú ekvivalenciu celého výstupu. |
| R05 | `labelRegeneratorV2.user.js:12–16,96–107`; historické label vrstvy | Funkčnosť žije v 4 pinned vrstvách. Wrappery setTimeout, window.open a window.print majú význam a poradie; neodstraňovať „staré verzie“ ako duplicity. |
| R06 | `setIndustrialState.user.js:945,1072–1103` | Zmena window.confirm a XHR prototype je page-context zásah. Únia GM grantov môže zmeniť svet vykonávania, rollback potrebuje vlastníctvo wrappera a niekedy reload. |
| R07 | Capture click: viewer 1.2 a materialDetector rename; ďalšie capture keydown v labels | Zlúčenie mení poradie registrácie a stopImmediatePropagation. Prejsť obrázok/download/Alt/Ctrl/Shift/Cmd + L/K/E/Ctrl+P a písanie do formulárov. |
| R08 | `stylesheetTune.user.js` široké selektory `table tbody tr td div`; layout cez JS a CSS | Štýly zasahujú web aj injected UI. Pri oddelení CSS scope zachovať zamýšľané úpravy webu a nenechať ich preliať do komponentov/calculator/label. |
| R09 | `mountPanel` v CALC a Next; badges starého MD; spoločný action riadok | Viacerí vlastníci rozloženia a miest panelov sú zdroj konfliktov. Presné umiestnenie a otvorené kombinácie panelov musí riadiť panel-host. |
| R10 | `pokynPre_archiver` IndexedDB `fc_pokyny_archiv`, store `pokyny`, version 1 | DB je osobný archív na origine; zdrojový ZIP ju neobsahuje. Zachovať schému/indexy a pred prechodom exportovať; nevynucovať schémovú migráciu len kvôli názvu balíka. |
| R11 | Screenshot archiver 1.9, repo 1.10 | Git rozdiel 130fea3→2998d64 je iba styling tagov; detail vo version-differences.md. Cieľ zachová schválené oválne tagy, screenshot sám nedokazuje bajtovú zhodu browserovej kópie. |
| R12 | Viewer: `@connect *`, HTTP aj HTTPS, subdomény; admin/person majú vlastné @match | Zúženie metadata bez vedomého rozhodnutia je funkčná zmena. Jediný balík potrebuje route-specific práva a runtime guards; povolenia v TM sú však na úrovni celého scriptu. |
| R13 | `setTitleForIndustrialQueue`: jQuery DataTables; Session Keeper: oficiálny SSO SDK | Nejde o samostatné knižnice v repe, ale API hostiteľskej stránky. Vyžadujú kontrolu dostupnosti a kontextu; nesťahovať nové DataTables/SSO implementácie. |
| R14 | `service-catalog/core/consumer_api.js`: EVENT_NAME je `materialDetectorNext:updated`; entrypoint emituje tento typ aj cez publishPublicState | Ten istý názov udalosti je použitý pre verejný payload aj detailný detection objekt. Pri event-buse zaviesť jednoznačné typy a explicitný legacy adaptér; odberatelia dnes môžu vidieť dve rôzne schémy. |
| R15 | Next publicState jeden localStorage kľúč; client maxAge/VP kontrola | Nepoužiť globálny „posledný výsledok“ bez overenia VP. Cache/publisher v suite musí odmietnuť cudzí VP a zastaraný stav; nejde o prenos všetkých transient dát do centrálneho nastavenia. |
| R16 | Next body observer sleduje aj attributes; legacy MD pri mutácii znovu deteguje pred porovnaním snapshotu | Pozorovatelia si môžu násobiť prácu aj bez nekonečnej slučky. Zúžiť zdroje a oddeliť vstupy/výstupy, pred schválením zmerať zmenu počtu výpočtov a CPU. |
| R17 | `initFormWatcher` a `customizeButtons` archivera polling bez timeoutu pri neprítomnom formulári | Dlhé čakanie nie je intenzívna nekonečná JS slučka, ale po zlúčení musí mať jasný lifecycle, cancellation a stav „element nenájdený“. |
| R18 | Viewer GM request nie je uložený/rušený; currentBlob/currentUrl sú zdieľaný closure stav | Odpoveď starého requestu po zavretí/otvorení iného obrázka môže zasiahnuť nový stav. Zdokumentovaná existujúca chyba; prípadnú opravu robiť samostatne s prijatým scenárom, nie neoznačene pri presune kódu. |
| R19 | Aktívne scripty nemajú spoločný stop/start, niektoré používajú anonymné listenery, vlastné fetch/XHR a window guards | Prepínač „off“ nemožno iba uložiť a predstierať cleanup. Pre prvú verziu podporiť jasné „prejaví sa po obnovení“, až potom hot-disable tam, kde sa dá dokázať. |
| R20 | Pôvodná detekcia termínu a Next detectDeliveryDate sú odlišné vstupné funkcie | Pri nahradení MD skontrolovať, že zóna right používa pôvodne požadovaný termín, nie nevedomky inú dodaciu/expedičnú lehotu. |

## Chýbajúce runtime dôkazy

- Nastavenia layoutu/aliasov/šablón v konkrétnom Chrome neboli exportované. Súčasný audit pracuje s defaultmi a kontraktmi v zdroji.
- Nie je zaznamenané presné poradie capture handlerov samostatných scriptov v Chrome. Zoznam poradia v dashboarde nemusí byť dôkazom runtime poradia.
- Nie sú schválené anonymizované referenčné výstupy pre každú službu a variant. Použiť výsledky pôvodných schválených detektorov ako oracle; vstupy pred publikovaním zbaviť osobných údajov.
- Stav CPU po oprave sa zatiaľ nemeral profilerom. Audit zdroja a úspešné parsovanie toto meranie nenahrádzajú.
- Najprv porovnať image viewer/rename capture kombináciu a sandbox v aktuálnom Chrome/Tampermonkey. Až potom finalizovať phase/priority a page bridge.

## Matica capture handlerov na potvrdenie parity

| Vstup | Viewer 1.2 | Legacy rename | Požadovaná kontrola pred zlúčením |
|---|---|---|---|
| Bežný klik obrázkového odkazu | prevezme click a stopImmediatePropagation | môže tiež zachytiť súbor podľa linku/settings | Zaznamenať reálne pôvodné poradie; nová politika musí vyvolať jednu zamýšľanú akciu, rozdiel schváliť. |
| Bežný klik neobrázkového súboru | prepustí | podľa rename configu | Zachovať pôvodný rename/native fallback. |
| Alt+klik linku bez prípony | skúsi viewer | podľa konkrétnych guards | Overiť, že nevzniknú dva requesty alebo viewer plus download. |
| Ctrl/Shift/Cmd bez Alt | viewer prepúšťa | overiť v pôvodnom rename handleri | Porovnať browser/default otvorenie a background navigáciu. |
| Ctrl/Shift/Cmd spolu s Alt | viewer prevezme | overiť v pôvodnom rename handleri | Nekopírovať všeobecné modifier pravidlo z iného modulu. |
| L/K/E/Ctrl+P v input/textarea/select/contenteditable | viewer rieši iba Escape | label vrstvy majú odlišné page/typing guards | Každý zachovaný shortcut overiť v danej stránke a pri písaní. |

Práve tieto prípady nie je správne rozhodnúť iba z poradia súborov v novom bundli. Viewer používa stopImmediatePropagation, legacy rename capture handler nie je automaticky rovnocenný; účinok závisí aj od poradia registrácie samostatných scriptov.
