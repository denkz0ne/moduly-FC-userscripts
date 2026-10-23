# Rozdiel nainštalovaných a repozitárových verzií

## Archív pokynov 1.9 → 1.10

Zdroj 1.9 v commite [130fea3](https://github.com/denkz0ne/moduly-FC-userscripts/commit/130fea3), zmena 1.10 v [2998d64](https://github.com/denkz0ne/moduly-FC-userscripts/commit/2998d64). Overené príkazom `git diff 130fea3 2998d64 -- pokynPre_archiver.user.js`.

Rozdiel obsahuje version bump a iba tieto štýlové zmeny:

- Selektor tagov: radius 2→6 px, padding 3/7→2/6 pri selected a 4/8→3/7 pri bežnom tagu; odstránenie explicitného font-family, obnovenie selected tieňa.
- Tagy uloženého záznamu: gap4→5 px, margin-bottom7→10 px, padding2/6→3/7, radius2→999 px, font10→11 px a odstránenie explicitného font-family.
- Žiadna zmena obsluhy submit, ukladania, DB schémy, indexov, filtrov ani exportu v tomto repo rozdiele.

Prijatá požiadavka vlastníka z konverzácie zachováva oválne tagy/príznaky; preto cieľová vizuálna referencia používa tento návrat vo v1.10. To nie je tvrdenie o kontrole lokálne upraveného browserového zdroja: zo screenshotu je potvrdená iba zobrazovaná verzia1.9.

## Ostatné položky

Verzie na aktívnom screenshote zodpovedajú verziám repo entrypointov uvedeným v README. Bez exportu konkrétnej nainštalovanej kópie to nepotvrdzuje bajtovú zhodu, osobné hodnoty nastavení ani efektívne TM @require cache. Viewer 1.2 bol poskytnutý ako presný text a jeho kópia je hashom overená. Štyri label vrstvy sú získané z konkrétnych commitov deklarovaných v label entrypointe.
