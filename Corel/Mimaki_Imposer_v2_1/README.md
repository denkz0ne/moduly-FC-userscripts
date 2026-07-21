# Mimaki Imposer v2.1

Aktualna stabilna produkcna verzia CorelDRAW VBA nastroja pre rozkladanie grafiky do pripravenych Mimaki sablon.

## Co je v tomto priecinku

- `README.md` - rychly prehlad projektu a pouzitia.
- `Mimaki_Imposer_v2_1_source_bundle.zip` - kompletne zdrojaky, dokumentacia a pomocne skripty projektu.

## Obsah source bundle

Balik obsahuje najma:

- `Mimaki_Template_Imposer_v2_1.bas`
- `frmMimakiImposerPanelV21.frm`
- oba `*_CODE_ONLY.txt` exporty
- `AKTUALNY_MIMAKI_IMPORT_V2_1.txt`
- `STICKERMASTER_ANALYZA_PRE_MIMAKI_V2_1.md`
- PowerShell skripty na generovanie ikon
- `mimaki_icons/ICONS_README.md`

## Poznamky

- Layouty sa citaju iba z vrstiev `*_SLOTS` v sablonovom CDR.
- Nazov produktu sa vo formulari zobrazuje bez suffixu `_SLOTS`.
- Lokalny changelog oznacuje build zo dna 21. jula 2026 ako `STABLE CHECKPOINT`.
- Generovane bitmap ikonky nie su duplikovane jednotlivo v repo; daju sa znovu vytvorit z prilozenej sady skriptov.

## Import do CorelDRAW VBA

1. Importuj `Mimaki_Template_Imposer_v2_1.bas`.
2. Importuj `frmMimakiImposerPanelV21.frm`.
3. Alternativne mozes pouzit `*_CODE_ONLY.txt` pri rucnej aktualizacii existujucich modulov.

Projekt bol preneseny z lokalneho workspace `W:\Dokumenty\New project\Mimaki_Imposer_v2_1`.