# Sample animation

This repository is a boilerplate for creating **Animations** for [Web Slider](https://webslider.io).  
This is a easier and recommended way to start Animation development.

## Prerequest

Install following tools:

- [NodeJs](https://nodejs.org) 16.15.0 or newest
- [Yarn](https://yarnpkg.com/) 1.22.19 or newest
- [Gulp](https://gulpjs.com/) 2.3.0 or newest `npm install --global gulp-cli`

## Install dependencies

Clone repo and install dependencies:

`git clone git@github.com:forcerefresh/sample-animation.git`

`yarn`

## Run

To run development server:

`yarn start`

## Add animation in app

During development, in order to test your animation, you can add it to Web Slider app and get realtime preview.

To connect follow these steps:

- `yarn start`
- It will open browser and show development configuration page.
- In Web Slider App go to `Settings > App Settings` and enable `Developer mode`
- Go to `Library > Development` and click `+ Add Animation`.
- Fill out form with data from development configuration page and click `Start monitoring`.

## Build

To build Animation for production:

`yarn build`

Bundle is located in `dist/bundle/sample-animation.zip` folder.  
It contains following files:

- animation-meta.json
- sample-animation-app.js
- sample-animation-player.js
- sample-animation.logo.svg

## Analyze

To optimize or check what is inside animation bundle use analyze commands.

- Run `yarn build`
- Run `yarn run analyze-app` and `yarn run analyze-player` to analyze app or player build.

## License

This repo is licensed under **EULA for Web Slider Extensions** license

In short, it's allowed to clone/fork, to edit/modify, create new Animation and use it Web Slider app.

Read LICENSE.txt file for more details.
