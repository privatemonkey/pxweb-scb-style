# Todo

## Design / CSS
- [x] Disabled radio/checkbox - label ska också se disabled ut
- [x] Välj variabel - Hierarkier innehåller input image samt ett andra steg med checkboxar som ser bananas ut
- [ ] Mixin för att göra SVG ikoner i hover, disabled, focus färger
- [x] Dialog för attributer behöver bättre spacing
- [x] Dialog för attributer behöver bättre header
- [ ] Mobil tabell - Förbättra sticky. 
- [ ] Mobil tabell - Se på attribute som har aboslut positionering
- [ ] Disable radio/checkbox:hover - Ska inte finnas
- [x] Välj variabel - Lägg på färg, fokus och ikoner vid fel
- [x] Välj variabel - Större knapp, spacing och linje över fotnötter
- [x] Välj variabel - Brädd på boxar i största fönsterbrädden
- [x] Välj variabel - Knappar "välj alla" - normal font weight
- [x] Trädet - Bort med understrykning
- [x] input + label width kan bli fel eftersom den beräknas ifrån 100%
- [x] Refactor input + label code
- [x] Refactor API button
- [ ] Print CSS
- [ ] Sizes - Skapa margin och padding variablar för text, headings och annat
- [x] Huvudet - Se över storlekar
- [x] Fullscreen knapp - Se över placering
- [x] Välj variabel - Se över spacing
- [x] Välj variabel - Se över textstorlekar
- [x] Verktygsmenyn - Fly out in
- [x] Verktygsmenyn - Behövs nog en rubrik?
- [ ] Verktygsmenyn - Ändra färg på mobil header
- [ ] Verktygsmenyn - Se på placering i mellanstorlek där det ser ut som det är en 1rem margin fel
- [x] Tree - Search är lite anonym
- [x] Städa i breakpoints
- [x] Flytta ut välj variabel från "shame" till egen fil
- [ ] Flytta ut sök från "shame" till egen fil
- [x] Fullscreen scroll - Funkar inte. Funkar det hos SSB?
- [ ] Verktygsmeny - Ska bara vara overlay i mobil. I desktop ska den ligga vid sidan
- [ ] Välj variabel - Search - style 100% width
- [ ] Forms - Style för nummer fält - mindre min width än text fält

## Utredning

- [ ] Fonts - Find woff version of fonts to optimize speed
- [ ] Undersök SASS @forward
- [ ] Hur får vi in custom ikoner på ett bra sätt?
- [ ] Theming - vidareutvecklar

## Utveckling

- [x] Ta bort focus på burgerknapp efter click (.blur())
- [ ] Attribute dialog, title borde göras till riktig rubrik
- [ ] Sum, multiply, divide - Lägg wrapper div på siffra nummer två
- [x] Sum, multiply, divide - Ta bort konstig extrarubrik
- [ ] Forms - Gå igenom och städa i .font-heading, labels, legend och extra spans
- [ ] Forms - Gör om text fält till nummer om de är menad att visa enbart siffror
- [ ] Välj variabel - Search - add class to main div
- [-] Hamburgerknapp - gör om till button och ge parent div en klass. Hälst flytta.
- [-] Hamburgerknapp - Döpa om till "Visa verktyg"/"Dölj verktyg"
- [-] Fullscreenknapp - gör om till button
- [-] Sortable table, ändra inputs till buttons för att kunna lägga ikoner på :after
- [x] Chart settings - Ändra text-fält till nummer fält
- [x] Chart settings - Ta bort spans som gör checkbox listor till inline
- [-] Stepper - byta ut hr mot span
- [x] Stepper - flytta .future till anchor
- [x] Stepper - flytta .first, second, third till anchor
- [-] Stepper - Lägg till aria hidden på en del element
- [-] Träd - Visa kolumner med värden istället för img ikoner
- [x] Verktygsmenyn - Huvud med rubrik "Verktyg" och stäng knapp
- [ ] Verktygsmenyn - Presentation-left div flyttas efter huvudinnehållet för att bli bättre för uppläsning
- [ ] Verktygsmenyn -Submit buttons in left panel changed to .nested-accordion-panel and buttons. All other classes removed.
- [x] Verktygsmenyn - Flytta dialog för edit and calculate till rätt föräldernod
- [ ] Vyer - Varje views namn läggs som class på body-taggen (.tree, .select-variables, .result=
- [ ] Struktur - Flytta element in i main
  - [ ] breadcrumb
  - [ ] stepper
  - [ ] h1
  - [ ] metainfo
- [ ] Välj variabel - Search box class måste upp en nivå så det går att style den
- [ ] Välj variabel - Info om uttaget som ex max antal rader bör ha egen class liknande px-message
- [ ] Huvudet - Visa metadata, konfigurera som option
- [ ] About - Flytta about under. Konfigurerbar?
- [ ] About - Med eller utan accordion beteende (Nu är det ALLTID sub accordions)
- [x] Header, main och footer taggar istället för div
- [x] Breadcrumb: Aria-tags
