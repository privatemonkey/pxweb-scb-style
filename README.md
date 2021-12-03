# PxWeb SCB style

This is SCBs own alternative UI to use with default PxWeb. 

The goal for this repo is to provide a setup that is easy to customize and simpler to maintain. 

[The original SASS code for PxWeb](https://github.com/statisticssweden/PxWeb/tree/master/PXWeb/Resources/Styles)

## Read about

- [Getting started](docs/start.md)
- [Optimize for speed](/docs/optimize.md)
- [Work with SASS](/docs/sass.md)

## About the repo

### Goals

- Make it easy to customize without deep knowledge of the HTML and CSS of PxWeb
- Shrink the number of files
- Shrink the total size of CSS
- Make it possible to run PX Web with only system fonts
- Offer a lightweight default font
- Create a more maintainable CSS build
- Make it easier to co-op with design

### Stats

**The alternative SCB style**

50kb of CSS and 50kb of fonts

**Default PxWeb**

220kb of CSS and 120kb of fonts

**Statistical database**

310kb of CSS and 150kb of fonts

The number of request has been reduced from 25-28 to a meager 4-8 (Depending on font load).

## CDN

This is not an official CDN but we use it to ease testing and development until we move the code to SCBs organization.

[The latest build of this repo is hosted on Netlify](https://pxweb-scb-style.netlify.app/)

## Official PX Web Repo

[The official PX Web Repo](https://github.com/statisticssweden/PxWeb)
