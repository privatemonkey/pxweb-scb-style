# Design tokens

Design tokens/SASS variables are used as a common way to describe design entities.

## Content

  - [Colors](#colors)
  - [Fonts and typography](#fonts-and-typography)
  - [Logo, icons and images](#logo-icons-and-images)
  - [Sizes](#sizes)
  - [Margins and paddings](#margins-and-paddings)
  - [Breakpoints](#breakpoints)

## Colors

### Basic colors

- ```$color-lightest```, backgrounds, inverted text
- ```$color-light```, alternate backgrounds
- ```$color-medium```, borders
- ```$color-dark```, text, Inverted background
- ```$color-darkest```, emphasized text
- ```$background-light```, Panels etc
- ```$background-inverted```

### Brand colors

Primary color is the main brand color. It is used on primary brand elements such as statistic tables and charts. It's also used to convey interactive elements and actions.

- ```$color-primary```, links, primary button background
- ```$color-primary-light```
- ```$color-primary-dark```, link hover, button hover background
- ```$color-primary-inverted```, text on backgrounds with primary color

Secondary color is a complement to primary. The color is used to indicate that secondary actions.

- ```$color-secondary```, secondary button background
- ```$color-secondary-light```
- ```$color-secondary-dark```, secondary button hover
- ```$color-secondary-inverted```, text on backgrounds with secondary color

### Functional colors

#### Text

- ```$text```
- ```$text-dark```
- ```$text-inactive```
- ```$text-inverted```

#### Selected

- ```$selected-text```
- ```$selected-background```

#### Link

- ```$link-text```
- ```$link__hover-text```
- ```$link__hover-background```

## Fonts and typography

The default setup uses the variable font "Public Sans" which was developed for US government sites. The font has great support for various languages and has a low footprint. The fallback is a system font stack using each operating systems "web"-font.

### Font weights

- ```$font-weight-normal```
- ```$font-weight-medium```
- ```$font-weight-semibold```
- ```$font-weight-bold```

### Text width (For content)

- ```$max-text-width```
- ```$max-header-width```

### Font sizes

- ```$font-size-normal```, normal text
- ```$font-size-medium```, labels

### Header sizes

- ```$font-size-h1```
- ```$font-size-h2```
- ```$font-size-h3```
- ```$font-size-h4```

### Line heights

- ```$line-height-header```
- ```$line-height-text```

## Logo, icons and images

## Sizes

### Spacing 

These are used primarely by margins and paddings

- ```$space-extra-large```
- ```$space-large```
- ```$space-medium```
- ```$space-small```
- ```$space-extra-small```
- ```$space-tiny```

### Panel size

- ```$panel-width```
- ```$panel-width-small```

### Button borders

- ```$button-border-width```
- ```$button-outline-width```

### Stepper

- ```$stepper-width```

## Margins and paddings

Most of these are explicitly set on the different elements by referring to the size tokens ($space-)

## Breakpoints

- ```$tiny``` 459px
- ```$extra-small``` 599px
- ```$small``` 799px
- ```$medium``` 1099px
- ```$large``` 1399px
- ```$extra-large``` 1999px
