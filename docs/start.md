# Setting up the project

Use this setup to customize your own theme or use the alternative default PxWeb styling.

**Content**

  - [Setting up the project](#setting-up-the-project)
    - [Get started](#get-started)
    - [Build](#build)
    - [Customize](#customize)
    - [Publish Nuget package (Optional)](#publish-nuget-package-optional)

## Get started

To get this up and running you need some basic understand of how to setup a development environment for frontend.

Steps 

- Copy the project
- Install the NPM packages needed
- You might need to install "css-minify" package globally ```npm install css-minify -g``` for the build to work
- Setup SASS
- Do your first build

## Build

```npm run build``` will build all SASS files into one CSS and move files to CSS catalog ```/css```. 

## Customize

We understand your need for branding and have made a super simple setup. 

All customizable CSS is based on the files located in ´sass/base´. Your own files should be a copy of the ´starter theme´ sass file.

Steps

- Copy the starter theme
- Edit the build script
- Change variables
- Do your first build

[Read about the designtokens we use](/docs/tokens.md)

## Publish Nuget package (Optional)

> We'll publish this when we get the versioning workflow set
