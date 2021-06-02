# SASS files

Our CSS is structured with inspiration from SMACSS/BEM and the 7–1 Pattern.

Legacy specific CSS may live together with other code but should be commented upon. Place a comment directly before styling with the format `/* -- Legacy: .container_titletext should be replaced with H3:s --*/`

For the big hacks, use the `\_shame.scss` file.

The classic `vendor` folder is not used. Instead, move and refactor vendor created CSS into whatever module, layout or helper that fits best.

## Coding

### Class naming

- Modules should be written with a full name. Ex: `button`.
- Variants of a module should contain all the original code of the parent so writing `button-secondary` as the only class is sufficient.
- A state is accomplished by adding `is-closed`.

### SASS and CSS variables

We are using a combination of both to accomplish a dynamic stylesheet with less code.

### Colors
## Folders

**Base**

This is the styles every page recieves.

**Modules**

The modules folder holds all micro layout files. Your styles for buttons and navigation and similar page components.

**Layout**

Styles for major sections of the layout like a header, footer and styles for the grid system lives here.

**Pages**

These are styles specific to individual pages.

**Themes**

The themes folder holds files that create specific themes such as dark. This is also where you add your custom styling.

**Helpers**

The helpers or utils folder holds Sass tools, helper files, variables, and config files. These files won’t be compiled.

## Files

**main.scss**

This will compile all common styling.

**_shame.scss**

This contains code we're ashamed of, legacy specific styling and hacks. It lives in the root folder for everyone to see it!


## Inspiration

- [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
- [SMACSS](http://smacss.com/book/)
- [BEM](https://en.bem.info/)
