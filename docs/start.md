# Setting up the project

Use this setup to customize your own theme or use the alternative default PxWeb styling.

**Content**

- [Setting up the project](#setting-up-the-project)
  - [Get started](#get-started)
  - [Build](#build)
  - [Customize](#customize)
  - [Design tokens](#design-tokens)
    - [Colors](#colors)
    - [Fonts and typography](#fonts-and-typography)
    - [Logo, icons and images](#logo-icons-and-images)
    - [Sizes](#sizes)
    - [Margins and paddings](#margins-and-paddings)

## Get started

To get this up and running you need some basic understand of how to setup a development environment for frontend.

Steps 

- Copy the project
- Install the NPM packages needed
- Setup SASS
- Do your first build

## Build

´npm run build´ will build all SASS files into one CSS and move files to CSS catalog. 

The build does not minimize the CSS


## Customize

We understand your need for branding and have made a super simple setup. 

All customizable CSS is based on the files located in ´sass/base´. Your own files should be a copy of the ´starter theme´ sass file.

Steps

- Copy the starter theme
- Edit the build script
- Change variables
- Do your first build

## Design tokens

### Colors

#### Basic colors

- ```$color-lightest```, backgrounds, inverted text
- ```$color-light```, alternate backgrounds
- ```$color-medium```, borders
- ```$color-dark```, text, Inverted background
- ```$color-darkest```, emphasized text
- ```$background-light```, Panels etc
- ```$background-inverted```

#### Brand colors

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

#### Functional colors

### Fonts and typography

The default setup uses the variable font "Public Sans" which was developed for US government sites. The font has great support for various languages and has a low footprint. The fallback is a system font stack using each operating systems "web"-font.

#### Font weights

- ```$font-weight-normal```
- ```$font-weight-medium```
- ```$font-weight-semibold```
- ```$font-weight-bold```

#### Text width (For content)

- ```$max-text-width```
- ```$max-header-width```

#### Font sizes

- ```$font-size-normal```, normal text
- ```$font-size-medium```, labels

#### Header sizes

- ```$font-size-h1```
- ```$font-size-h2```
- ```$font-size-h3```
- ```$font-size-h4```

### Logo, icons and images

### Sizes

Default spacing

- ```$space-extra-large```
- ```$space-large```
- ```$space-medium```
- ```$space-small```
- ```$space-extra-small```
- ```$space-tiny```

Panel size

- ```$panel-width```
- ```$panel-width-small```

Button borders

- ```$button-border-width```
- ```$button-outline-width```

Stepper

- ```$stepper-width```

### Margins and paddings
