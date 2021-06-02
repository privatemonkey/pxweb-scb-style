# Setting up the project

Use this setup to customize your own theme or use the alternative default PxWeb styling.

**Content**

- [Setting up the project](#setting-up-the-project)
  - [Get started](#get-started)
  - [Customize](#customize)
    - [Colors](#colors)
    - [Fonts and typography](#fonts-and-typography)
    - [Logo, icons and images](#logo-icons-and-images)
    - [Margins and paddings](#margins-and-paddings)
  - [Optimize for speed](#optimize-for-speed)
    - [1. Minimize font load](#1-minimize-font-load)
    - [2. Inline SVG images](#2-inline-svg-images)

## Get started

To get this up and running you need some basic understand of how to setup a development environment for frontend.

Steps 

- Copy the project
- Install the NPM packages needed
- Setup SASS
- Do your first build

## Customize

We understand your need for branding and have made a super simple setup. 

All customizable CSS is based on the files located in ´sass/base´. Your own files should be a copy of the ´starter theme´ sass file.

Steps

- Copy the starter theme
- Edit the build script
- Change variables
- Do your first build

### Colors

### Fonts and typography

The default setup uses the variable font "Public Sans" which was developed for US government sites. The font has great support for various languages and has a low footprint. The fallback is a system font stack using each operating systems "web"-font.

### Logo, icons and images

### Margins and paddings

## Optimize for speed

The PxWeb alternative style has only a 1/10 the size footprint of the regulars CSS. The number of request has been reduced from 25-28 to a meager 4-8.

If bandwidth and speed is a concern you can reduce the number of requests even further making your pages even faster.

1. Minimize font load
2. Inline SVG images

This will take reduce the number of CSS, font and media related request down to **2**!!

### 1. Minimize font load

In the config.scss file found in root, set ´optimize_fonts: true´ instead of default ´false´

### 2. Inline SVG images

In the config.scss file found in root, set ´optimize_images: true´ instead of default ´false´