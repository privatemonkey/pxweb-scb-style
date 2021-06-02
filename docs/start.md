# Get started

Use this setup to customize your own theme or use the alternative default PxWeb styling.

**Content**

- [Get started](#get-started)
  - [Customizing](#customizing)
    - [Colors](#colors)
    - [Fonts and typography](#fonts-and-typography)
    - [Logo, icons and images](#logo-icons-and-images)
    - [Margins and paddings](#margins-and-paddings)
  - [Optimize for speed](#optimize-for-speed)
    - [1. Minimize font load](#1-minimize-font-load)
    - [2. Inline SVG images](#2-inline-svg-images)


## Customizing

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