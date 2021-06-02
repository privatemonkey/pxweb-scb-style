# Todo

## Design / CSS

- [ ] Välj variabel - Lägg på färg, fokus och ikoner vid fel
- [x] Välj variabel - Större knapp, spacing och linje över fotnötter
- [x] Välj variabel - Brädd på boxar i största fönsterbrädden
- [x] Välj variabel - Knappar "välj alla" - normal font weight
- [x] Trädet - Bort med understrykning
- [ ] input + label width kan bli fel eftersom den beräknas ifrån 100%
- [ ] Refactor input + label code
- [ ] Print CSS
- [ ] Sizes - Skapa margin och padding variablar för text, headings och annat
- [ ] Huvudet - Se över storlekar
- [x] Fullscreen knapp - Se över placering
- [ ] Välj variabel - Se över spacing
- [ ] Välj variabel - Se över textstorlekar
- [ ] Verktygsmenyn - Fly out in
- [ ] Verktygsmenyn - Behövs nog en rubrik?
- [ ] Tree - Search är lite anonym
- [ ] Städa i breakpoints
- [ ] Flytta ut välj variabel från "shame" till egen fil
- [ ] Flytta ut sök från "shame" till egen fil
- [ ] Fullscreen scroll - Funkar inte. Funkar det hos SSB?
- [ ] Verktygsmeny - Ska bara vara overlay i mobil. I desktop ska den ligga vid sidan
- [ ] Välj variabel - Search - style 100% width
- [ ] Forms - Style för nummer fält - mindre min width än text fält

## Utredning

- [ ] Fonts - Find woff version of fonts to optimize speed
- [ ] Undersök SASS @forward
- [ ] Hur får vi in custom ikoner på ett bra sätt?
- [ ] Theming - vidareutvecklar

## Utveckling

- [ ] Forms - Gå igenom och städa i .font-heading, labels, legend och extra spans
- [ ] Forms - Gör om text fält till nummer om de är menad att visa enbart siffror
- [ ] Välj variabel - Search - add class to main div
- [ ] Hamburgerknapp - gör om till button och ge parent div en klass. Hälst flytta.
- [ ] Hamburgerknapp - Döpa om till "Visa verktyg"/"Dölj verktyg"
- [ ] Fullscreenknapp - gör om till button
- [ ] Sortable table, ändra inputs till buttons för att kunna lägga ikoner på :after
- [ ] Chart settings - Ändra text-fält till nummer fält
- [ ] Chart settings - Ta bort spans som gör checkbox listor till inline
- [ ] Chart settings - Använd fieldset på alla checkboxlistor
- [ ] Stepper - byta ut hr mot span
- [ ] Stepper - flytta .future till anchor
- [ ] Stepper - flytta .first, second, third till anchor
- [ ] Stepper - Lägg till aria hidden på en del element
- [ ] Träd - Visa kolumner med värden istället för img ikoner
- [ ] Verktygsmenyn - Huvud med rubrik "Verktyg" och stäng knapp
- [ ] Verktygsmenyn - Presentation-left div flyttas efter huvudinnehållet för att bli bättre för uppläsning
- [ ] Verktygsmenyn -Submit buttons in left panel changed to .nested-accordion-panel and buttons. All other classes removed.
- [ ] Verktygsmenyn - Flytta dialog för edit and calculate till rätt föräldernod
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