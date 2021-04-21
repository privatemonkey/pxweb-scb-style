# Cleanup

## Laddning

Choose variables: 

- 6 bilder, 5 typsnitt och 11 CSS filer. Totalt 300kb
- 11 JS filer 440kb + massor av inline script. Scripten upprepas. Osäker på hur minneshanteringen är om samma 5 funktioner läses in 10 gånger men helt klart påverkar det performance
- Olika jQuery bibiliotek tar 370kb. Används men kan lätt bytas ut med Vanilla JS.

## Analys av main-pxweb.css

- 4 olika typsnitt i main.css, ännu fler typsnittskombinationer
- Specifik instruks om typsnitt angivits på 66 platser. Bör inte förekomma på mer än 2-3 platser.
- font-size på 88 platser. 10-20 vore rimligt.
- font-size och line-height övervägande i pixlar, några procent, några utan enhet, ett par med em.
- font-weight på 116 platser
- color - 147 platser varav 36 background-color. Background med enbart färg - kanske 20 platser.
- Specifik margin- 158, margin: 28 platser. Mycket pixlar men också lite em. Mycket variation. Borde gå att städa så att det blir konsekvent.
- Specifik padding- 123, padding: 112 platser. Som margin, mest pixlar.
- width: 220 ställen!!
- flex, på ett fåtall ställen. Metadata mest.
- Grid: ingen
- inline svg ikoner som bakgrund på många platser (39)
- INGEN button style eller input[type=button]. Alla knappar (ca 100) har specifik styling
- #pxwebcontent som style prefix på 611 platser!
- .px- prefix klasser 9 stycken
- vertical-align 31
- text-align 12
- floats 48
