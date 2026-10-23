# FC Party mode – denník prípravy a rozhodnutí

## 2026-10-23

### Prijaté od vlastníka

- Pripraviť jednu inštaláciu s centrálnym ovládaním; zdrojovú štruktúru navrhuje implementátor.
- Zachovať logiku/výsledky, odstrániť duplicity, oddeliť premenné/doménu/vzhľad, diagnostika a prepínače po funkčných častiach.
- Zjednotiť webové UI podľa FC manuálu, zachovať dizajn štítka a oválne tagy.
- Aktívny rozsah určuje screenshot: 15 zapnutých inštalácií; Slowly Export je vypnutý a mimo cieľa.
- Názov **FC Party mode** a schválená koncovka **FC-partymode.user.js** (pôvodne zadaná neštandardná koncovka bola vlastníkom uvoľnená).
- Pôvodný MD nahradí Next. Osem jeho deklarovaných detektorov preniesť ako schválené v pôvodnom stave.
- MD/Next nastavenia zlúčiť a redizajnovať pre jednoduchší používateľský a admin pohľad. Toto spresňuje pôvodnú požiadavku zachovať samostatné configy; doménové možnosti zostávajú, rozhranie sa konsoliduje.
- Zdroj vieweru 1.2 bol dodaný používateľom ako text; archivovaný bez úpravy v audit/sources.

### Vykonané

- Prečítané repo pravidlá, README a FC dizajn manuál; rešpektovaný main-only workflow a existujúce untracked docs/superpowers sa nemenia.
- Založené [koordinačné issue #34](https://github.com/denkz0ne/moduly-FC-userscripts/issues/34).
- AST audit baseline 75087f8, všetky dostupné JS moduly, 4 pinned štítkové vrstvy z Git objektov a dodaný viewer.
- Zaznamenané zdrojové hashe, funkcie/signatúry/scopes, premenné, storage/events/DOM/I/O/log/lifecycle a doslovné kandidáty duplicít.
- Vypracovaný návrh, prevádzkové kontrakty, register rizík, schválený-detektor manifest a migračný plán.
- Nezávislá read-only kontrola návrhu doplnila schválený API/router kontrakt detektorov, presný page-world hook test, rozdiel GM storage oproti origin storage, zachovanie HTTP vieweru a matice súbehu/capture akcií. Pripomienky zapracované; produktové scripty nemenil ani reviewer.
- Overená oficiálna Tampermonkey dokumentácia pre grants, sandbox, fázy a .user.js inštaláciu; konkrétny runtime kontext ostáva krok kontrolovaného prototypu.

### Overenie prípravného balíka

- `node --check tools/audit-fc-sources.cjs` a AST parse všetkých 49 zdrojov úspešné.
- Všetkých 57 Markdown dokumentov prešlo kontrolou lokálnych odkazov, bez neexistujúcich cieľov.
- SHA-256 dodaného vieweru sa zhoduje s referenčnou kópiou; historické vrstvy získané priamo z príslušných Git objektov. Referenčné snapshoty majú vypnutú Git newline konverziu, aby sa hash nemenil pri publikovaní.
- Pred commitom kontrola staged rozsahu a `git diff --cached --check`. Príprava neobsahuje inštalovateľný FC Party mode ani zmenu existujúcich používateľských scriptov; runtime parity a výkon sú v migračnom pláne.

### Prekážky a obmedzenia

- Priame prečítanie stránky chrome-extension:// cez Chrome nástroj odmietla jeho URL politika. Nepoužilo sa obchádzanie; používateľ následne poskytol zdroj vieweru. Táto prekážka je vyriešená dodaným zdrojom.
- Archiver: verzia 1.9 v aktívnom screenshote verzus 1.10 v repe. Git porovnanie 130fea3→2998d64 dokazuje iba štýlovú zmenu tagov; cieľ zachová oválne tagy podľa požiadavky vlastníka. Osobná browserová kópia tým nie je bajtovo overená.
- Osobné runtime nastavenia a IndexedDB archív neboli získané ani publikované. Odhad defaults nie je dôkaz nastavení v browseri.
- Zdrojový ZIP z predchádzajúcej úlohy nebol úplný offline export všetkých runtime závislostí/osobných dát; audit dopĺňa pinned štítkové vrstvy a viewer, starý ZIP sa neprepisuje.

### Návrhy na posúdenie

- Modulárne zdroje zostavované do jedného atómového userscriptu, žiadny runtime mix živých @require verzií.
- Časť prepínačov spočiatku vyžaduje reload; úplný hot-disable iba s dokázateľným cleanup.
- Podrobné function tracing opt-in, bežná diagnostika po module/akcii/stave; chráni CPU pred konzolovým spamom.
- Jeden vlastnícky model panelov/capture akcií a kompatibilitné adaptéry namiesto paralelnej starej a novej implementácie.

### Nasledujúci krok

Posúdiť architektúru a centrálny user/admin config flow, vyriešiť pripomienky. Potom začať kontrolovaným overením sandboxu a routovania, nie hromadnou konkatenáciou všetkých IIFE. Každý ďalší implementačný krok aktualizuje tento denník, issue a parity checklist.
