# Overview
`core-design` is our take on a framework-agnostic design system built with [stencil](https://stenciljs.com/), a web component compiler. We had unique requirements at iFixit and Dozuki which required us to consume components in React, HTML, and PHP today, and who-knows-what tomorrow. `core-design` was architecturally influenced by [Ionic](https://ionicframework.com/), but adapted for desktop environments using our own internal style guidelines.

# Components

1. [Web Components](packages/components-web)
1. [React Components](packages/components-react)

# Packages

1. [@core-design/components-web](https://www.npmjs.com/package/@core-design/components-web)
1. [@core-design/components-react
](https://www.npmjs.com/package/@core-design/components-react)

# Getting Started
## Dependencies

We opted to use [lerna](https://github.com/lerna/lerna) to help manage multiple child packages efficiently. To get yourself set up for local development, you'll need [node](https://nodejs.org/) installed to run:

```bash
# 1. Install dependencies in the root package.json
npm install

# 2. Install and link dependencies in child packages
npx lerna bootstrap
```

# Local Development

For Stencil development, run:

```bash
# from root
npx lerna run start

# from packages/components-web
npm run start
```

For Storybook development, run:

```bash
# from root
npx lerna run storybook

# from packages/components-web
npm run storybook
```

# Publishing to NPM

<details>
  <summary>First time publishing?</summary>

1. You need an [NPM account](https://www.npmjs.com/login) with access to `@core-design`.
1. You need to be logged in to npm on your terminal with:

```bash
npm login
```
</details>
<br>

## Compile packages and publish

Before publishing to NPM we need to build child repo packages with lerna:

```bash
npx lerna run build
```

Then, publish to NPM:

```bash
npx lerna publish
```

`npx lerna publish` will automatically determine which packages should be published and prompt you to choose a new version. In addition to publishing, it will also add and push a commit with the changes necessary to reference the new version. See the [lerna publish docs](https://github.com/lerna/lerna/tree/master/commands/publish#readme) for more info.
