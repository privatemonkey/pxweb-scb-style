# Short analysis of code

## Loading

Choose variables: 

- 6 images, 5 fonts and 11 CSS files. Total 300kb
- 11 JS files 440kb + lots of inline script. Repeating and conflicting scripts. 
- 370kb of different jQuery libraries. Could easily be switched to vanilla JS as they are mostly used for basic operations that are now part of the DOM API

## Analysis main-pxweb.css

- 4 different fonts in main.css, even more combinations
- 66 specific referalls to font families. Shouldn't be needed in more than a couple. Max a handfull places
- font-size in 88 rules. 10-20 would be reasonable
- font-size and line-height mainly but not only restricted to pixels. %, em and no unit also used
- font-weight in 116 rules
- color - 147 rules. 36 out of those background-color. Background rule that only refers to a color - 20 rules.
- Specific margin- 158, margin: 28 rules. Mostly pixels. Some em
- Specific padding- 123, padding: 112 rules. As margin
- width: 220 rules!!
- flex, in a few places. Mostly for metadata. Some conflicting rules. Used with margins and padding-
- Grid: none
- inline svg icons as background (39)
- NO default button style or input[type=button]. All buttons (ca 100) has specific styling, even a lot on ID
- #pxwebcontent as style prefix on 611 rules!
- .px- prefix on 9 rules
- vertical-align 31
- text-align 12
- floats 48
