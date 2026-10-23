# FC web – dizajn manuál a výskumné poznámky

**Stav:** výskum z reálne vykresleného webu

**Dátum kontroly:** 2026-10-23

**Jazyk rozhrania:** slovenčina

**Rozsah:** interný web `moduly.faxcopy.sk`; stránky detailu výrobného príkazu a výrobnej fronty

## 1. Účel a hranice výskumu

Tento dokument zachytáva vizuálne pravidlá a opakujúce sa komponenty FC webu pre ďalší návrh obrazoviek a úpravy používateľského rozhrania. Hodnoty vychádzajú z vykreslených štýlov v prihlásenom Chrome a z porovnania otvorených stránok:

- `/vyrobne_prikazy/detail/index/{id}` – detail výrobného príkazu, dve rôzne zákazky
- `/vyrobne_prikazy/industrialQueue/detail/{id}` – výrobná fronta

Analyzovaný je web samotný: jeho hlavička, navigácia, obsah, formuláre, tabuľky a stavové prvky. Prvky vložené userscriptmi/Tampermonkey ani externý chat podpory nie sú súčasťou dizajnového systému FC a pri meraní tokenov boli vynechané. Do dokumentu sa neukladajú čísla VP, zákaznícke údaje, osobné údaje, e-maily ani obsah poznámok.

Hoci prvky userscriptov neboli súčasťou merania pôvodného webu, tento manuál je záväzným vizuálnym základom pre UI všetkých FC userscriptov: tlačidlá, formuláre, panely a ostatné prvky vložené do stránky sa majú prispôsobiť konkrétnemu FC modulu a jeho existujúcemu rozhraniu. Výnimkou je samotný dizajn štítka, ktorý zostáva podľa existujúceho riešenia a na ktorý sa tieto pravidlá nevzťahujú.

Kontrola prebehla pri desktopovom viewport-e približne **1524 × 659–710 CSS px**. Ide o opis pozorovaných obrazoviek, nie o zdrojový manuál vydaný vlastníkom webu. Mobilné rozloženie sa priamo neskúmalo. Rozmery nižšie sú orientačné pre pozorovaný viewport a môžu sa meniť podľa zoomu, obsahu a veľkosti okna.

## 2. Stručný charakter vizuálneho jazyka

FC interný web používa husté, utilitárne a prevažne desktopové rozhranie. Dôležité sú rýchle skenovanie údajov, veľa polí na jednej obrazovke, výrazné sekčné pásy a farby, ktoré oddeľujú navigáciu, obsah a akcie. Rozhranie má starší Adminity/grid štýl: malé písmo, hranaté alebo len mierne zaoblené panely, gradienty v hlavičkách a len malé tiene.

Nové webové prvky majú zapadnúť do tejto štruktúry: používať existujúce farby a typografiu, zachovať kompaktnosť a nadväzovať na panely a tabuľky stránky. Netreba automaticky prenášať moderné štýly externých/widgetových vrstiev do FC webu.

## 3. Základné tokeny

Farby sú zhrnuté z najčastejších vykreslených hodnôt a konkrétnych komponentov. Web v kontrolovaných štýloch nemal zjavne používaný centrálny `:root` katalóg CSS premenných.

| Úloha | Hodnota | Pozorované použitie |
|---|---|---|
| Pozadie stránky | `#D8D6D8` | Sivé pozadie s textúrou |
| Hlavná navigácia | `#252525` | Horný tmavý pás |
| Hlavný text/tmavé prvky | `#000000`, `#292929` | Text a tmavé UI plochy |
| Hlavička panelu | `#141414` | Tmavá sekčná hlavička s gradientovým obrázkom |
| Základná zelená | `#8BB400` | Breadcrumb/toolbar a primárne zelené akcie |
| Zelený okraj | `#71A100` | Okraj zelenej hornej lišty |
| Zelený odkaz | `#83AB24` | Odkazy v obsahu a navigácii |
| Aktívny akcent menu | `#E2D13E` | Žltý akcent navigácie |
| Hlavička tabuľky | `#EBE7D4` | Béžová hlavička stĺpcov |
| Striedavý riadok tabuľky | `#F3F3F3` | Každý druhý riadok logu |
| Panel/plocha | `#FFFFFF` | Obsahové panely, formuláre a tabuľky |
| Ovládacie prvky – okraj | `#BBBBBB`, `#CCCCCC` | Vstupy, paginácia a deliace prvky |
| Akcia fronty | `#2C99F5` | Modré tlačidlo hromadnej zmeny poradia |
| Okraj modrej akcie | `#166FBB` | Okraj modrého tlačidla |

**Typografia:**

- Základ stránky: `Tahoma, Calibri, "Trebuchet MS", sans-serif`, typicky **11 px / 11 px**, normálna váha.
- Text tabuliek býva 11–12 px; hlavičky stĺpcov zvyčajne 11 px tučné.
- `h2` sekcií: **12 px**, tučné, veľké písmená, biele na tmavom páse.
- `h3` v obsahu detailu: v pozorovaných prípadoch **16 px**, tučné.
- Časť tlačidiel a vstupov používa Arial 11 px. Importované webfonty sú prítomné, ale Tahoma/Arial dominujú vo vykreslenom internom rozhraní.

**Tvary a efekty:**

- Základný panel má spravidla 3 px zaoblenie v horných rohoch; bežné polia a tabuľky sú hranaté.
- Tlačidlá majú spravidla 2 px zaoblenie.
- Obsahové panely používajú prevažne biele plochy a minimálne tiene.
- Tmavé sekčné hlavičky používajú obrázkový gradient `bg-gradient2.png`; zelené prvky používajú `grad-overlay-s.png`.

## 4. Spoločná kostra stránky

### Horná navigácia

- Tmavý horný pás (`#252525`) je vysoký približne **50 px** a pri rolovaní zostáva sticky.
- Obsah navigácie je zarovnaný do približne 1300 px širokého stredového kontajnera.
- Hlavné sekcie sú rozložené horizontálne. Na kontrolovaných stránkach boli viditeľné skupiny **VÝROBA, POKROČILÉ, NASTAVENIA, PREDAJŇA, PERSON**; ďalší pás obsahoval **FINF, FAXCOPY, CBC, HVIEZDA, ZÁKAZNÍCI, CENOVKY, PREHĽADY AKTIVÍT**.
- Text navigácie je malý, približne 10–11 px; aktívny alebo zvýraznený stav používa žltý akcent.
- Vpravo je oblasť používateľa a systémové ikony.
- Väčšina podstránok je dostupná cez viacúrovňové menu. Tento výskum inventarizuje iba viditeľné skupiny, nie všetky skryté submenu ani oprávnenia používateľských rolí.

### Zelený breadcrumb a rýchle polia

- Pod navigáciou sa zobrazuje zelená lišta vysoká približne **36 px**.
- Spája breadcrumb s rýchlym prístupom na VP a vyhľadávaním modulu.
- Základ je `#8BB400` s gradientovou vrstvou, jemným svetlým vnútorným okrajom a takmer nulovým zaoblením.
- Vstupy sú biele, kompaktné, s tenkým sivým okrajom a približne 11 px písmom.

### Pozadie a hlavný obsah

- Stránka používa svetlosivé textúrované pozadie (`bkg-pat.png`) a veľký obrazový motív Faxcopy (`faxcopy-bg.png`) za obsahom.
- Hlavný obsah je stredovo zarovnaný a v pozorovaných obrazovkách dosahuje približne **1280–1300 px**.
- Základná mriežka je starší 12/16-stĺpcový grid. Detail VP používa dve hlavné polovice (`grid_6`) široké približne **631–637 px** pri kontrolovanom desktope.
- Medzi hlavnými boxmi sú malé horizontálne a väčšie vertikálne rozostupy; rozhranie je funkčne husté.

## 5. Panely a nadpisy sekcií

- Sekcie používajú tmavý pás s gradientovým pozadím a bielym nadpisom.
- Nadpis `h2` je typicky 12 px bold, uppercase a s paddingom okolo 10 px.
- Hlavičky boxov majú približne 34–37 px na výšku, horné rohy okolo 3 px.
- Biela plocha s údajmi pokračuje pod hlavičkou; samostatné karty majú zvyčajne malé vnútorné odsadenie.
- Na stránke VP sa opakujú bloky pre objednávku, výrobný príkaz, súbory, prehľad stavov, aktivity, položky, súvisiace VP, výrobné podklady a sledovanie materiálu.
- Na stránke fronty sú výrazné bloky informácií, filtra a zoznamov VP/logu.

## 6. Detail výrobného príkazu

### Rozloženie

- Horná časť detailu rozdeľuje objednávkové údaje a údaje výrobného príkazu do dvoch stĺpcov.
- Ďalšie sekcie využívajú obdobné dvojstĺpcové bloky, ale veľké tabuľky a parametre sa môžu rozšíriť na šírku stĺpca.
- Sekcie sú dlhé a zoraďujú prevádzkové údaje zhora nadol; hlavná akcia stránky aj záznamy zostávajú v jednom dlhom detaile.

### Parametre a hodnoty

- Blok „Parametre detailu produktu“ používa hustý riadkový zoznam: názov parametra, hodnota a malé akčné ikony na históriu alebo úpravu.
- Názvy, ktoré majú viac hodnôt (napríklad šírka a výška), ich zobrazujú v jednom logickom bloku.
- Hodnoty a názvy polí sú rozlíšené hlavne polohou, váhou písma a oddelením riadkov, nie veľkými farebnými kartami.
- Prázdne alebo vypočítané údaje môžu mať odlišný spôsob zobrazenia; farbu stavového textu treba interpretovať podľa konkrétneho poľa.

### Súbory

- Upload oblasť používa svetlosivú drop zónu a výraznú ikonu pridávania.
- Akcie na súboroch sú zoradené v úzkych riadkoch s názvom, dátumom, typom a veľkosťou.
- Hlavička tabuľky používa béžový podklad; odkazy sú zelené.
- Súbory, parametre a pomocné ovládanie sú vizuálne oddelené sekčnými tmavými hlavičkami.

## 7. Výrobná fronta

- Stránka má horné bloky informácií a filtrov vedľa seba a pod nimi plnošírkové pracovné tabuľky.
- Tabuľka používa sortable hlavičky, zoradenie, vyhľadávacie pole, voľbu počtu riadkov a pagináciu.
- Hlavičky stĺpcov sú béžové (`#EBE7D4`), tučné, kompaktné a označujú triedenie malou ikonou.
- Riadky sa striedajú medzi bielou (`#FFFFFF`) a svetlosivou (`#F3F3F3`); bunky majú približne 5 × 8 px padding.
- Riadky aktívneho zoznamu VP môžu používať samostatné stavové pozadie, v kontrolovanej frontovej skupine svetlozelené `#EFFCDD`. Farbu ber ako stavovú výnimku podľa triedy riadka, nie ako všeobecnú plochu tabuľky.
- Toolbar/tabuľkový stav môže byť svetlomodrý informačný pás. Hromadná zmena poradia používa modré tlačidlo `#2C99F5` s tmavším okrajom `#166FBB`.
- Log je druhá tabuľka s rovnakým jazykovým a typografickým základom. Paginácia a neaktívne ovládanie sú sivé a nenápadnejšie.

## 8. Formuláre a tlačidlá

- Vstupy majú biele pozadie, sivý okraj, malé písmo (spravidla 11 px) a skromné odsadenie.
- Zelené akcie používajú `#8BB400`, biely tučný text, `grad-overlay-s.png`, okraj okolo `#779904` a 2 px radius.
- Modrá akcia na frontách používa samostatný modrý variant; farbu netreba zamieňať za všeobecnú primárnu farbu všetkých formulárov.
- Akcie v hlavičkách a tabuľkách sú kompaktné, zarovnané k obsahu a nepreberajú priveľa plochy.
- Systémové akcie s vysokým dopadom nemajú byť odlíšené len farbou; treba zachovať existujúci textový popis a kontext.

## 9. Ikony a stavové signály

- Web používa drobné ikonky pri nadpisoch, filtroch, triedení a úprave parametrov.
- Textové štítky stavov sú dôležité, pretože farby sa medzi modulmi líšia.
- Farby stavov sú lokálne a kontextové; nepovažovať každú zelenú/červenú plochu za univerzálny success/error token bez kontroly konkrétnej komponenty.
- Ikony slúžia skôr ako kompaktné doplnkové ovládanie než ako dominantná ilustrácia.

## 10. Technické zdroje štýlov pozorované v stránke

V otvorených stránkach sa načítavali najmä tieto zdroje:

- `https://moduly.faxcopy.sk/assets/css/master.css?4`
- `https://moduly.faxcopy.sk/assets/css/menu.css`
- `https://moduly.faxcopy.sk/assets/css/default.css`
- `https://moduly.faxcopy.sk/assets/css/modules/queue.css`
- `https://prihlasenie.faxcopy.sk/sdk/faxcopy-sso-session.css`
- Google Fonts importy Open Sans a Ubuntu; pri detaile aj Roboto Condensed
- CSS pre upload komponenty a ikony
- obrázkové assety Faxcopy pre pozadie, gradienty a branding

Toto je inventár pozorovaných importov, nie tvrdenie, že všetky sú globálne dôležité pre každý modul. Hlavný vizuálny jazyk na kontrolovaných stránkach vychádza z master/menu/default štýlov a z CSS konkrétneho modulu.

## 11. Praktické pravidlá pre budúce FC webové prvky

Tieto pravidlá platia pre všetky FC userscripty, ktoré zobrazujú alebo menia UI priamo na FC webe. Zahŕňajú tlačidlá, formuláre, panely aj ostatné webové prvky; vzhľad každého prvku treba prispôsobiť stránke a modulu, na ktorom sa používa. Dizajn štítka zostáva zachovaný podľa existujúceho riešenia a je z tohto štandardu vyňatý.

Oválne tagy a príznaky sú povoleným a zachovávaným prvkom rozhrania. Ak slúžia na označenie stavu, kategórie alebo filtra, ponechať ich pill tvar, farebné rozlíšenie a čitateľný kontrast; neprevádzať ich na hranaté tlačidlá ani bežné obdĺžnikové štítky. Ich konkrétne farby a správanie prispôsobiť významu a existujúcemu modulu.

1. Zachovať hornú navigáciu a zelenú breadcrumb lištu ako súčasť spoločného shellu.
2. Používať Tahoma/Calibri stack a existujúcu veľkostnú mierku; pre pracovné údaje neprechádzať na veľkú modernú typografiu.
3. Sekcie zasadiť do existujúcich boxov s tmavou hlavičkou a bielym obsahom.
4. Pri zoznamoch uprednostniť tabuľku s triedením, vyhľadávaním, počtom riadkov a pagináciou, ak to zodpovedá funkcii stránky.
5. Zachovať čitateľné zebra riadky a béžové hlavičky tabuliek.
6. Použiť zelenú pre bežnú hlavnú akciu, modrú iba pri existujúcom module/akcii, ktorá už tento variant používa.
7. Nepoliehať sa na CSS custom properties; v pozorovanom webe nebol nájdený spoločný tokenový `:root` systém.
8. Nevkladať do dizajnových ukážok reálne zákaznícke údaje ani autentické záznamy VP.
9. Pred implementáciou nového prvku overiť aktuálnu stránku a jej konkrétny modul. Starý web má lokálne výnimky a farby sa môžu líšiť medzi stránkami.

## 12. Čo ešte treba preskúmať pre úplný manuál

Táto verzia pokrýva detail VP a výrobnú frontu v desktopovom stave. Na plný manuál naprieč celým Moduly FC treba neskôr doplniť aspoň zoznam VP, skladové a materiálové karty, výrobné fronty s aktívnymi záznamami, formulárové editácie, vyhľadávanie, predajné/produktové moduly a menšie viewporty. Pri každom module treba odlíšiť spoločný shell od lokálnych štýlov a skontrolovať aj prázdny, chybový a načítavací stav.

---

**Pokračovanie výskumu:** dopĺňať tento dokument po typoch stránok a aktualizovať dátum kontroly, nemenovať zákaznícke záznamy ani účty. Tento súbor je výskumná pomôcka pre vývoj FC webových rozhraní, nie oficiálna špecifikácia spoločnosti.
