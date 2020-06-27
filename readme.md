# Core Design

## Packages

1. [Stencil Components](iFixit/packages/components)
1. [React Components](iFixit/packages/components-react)

## Getting Started

### Lerna

This repo uses [Lerna](https://github.com/lerna/lerna) to manage multiple npm packages.

```bash
npm install -g lerna
```

<details>
  <summary>Prefer a wizard?</summary>

Install [lerna-wizard](https://github.com/webuniverseio/lerna-wizard) for a more helpful and visual cli experience.

```bash
npm install -g lerna-wizard
```

</details>

### Installing dependencies

To install dependencies run:

```bash
# 1. Install dependencies in root package.json
npm install

# 2. Install and link dependencies in all child packages
lerna bootstrap
```

## Local Development

To start developing Stencil `core-components`, run:

```bash
lerna run start
```

To start developing Storybook `core-components`, run:

```bash
lerna run storybook
```

## Publishing to NPM

<details>
  <summary>First time publishing?</summary>

1. Make sure you have an [NPM account](https://www.npmjs.com/login) with access to the `@core-design` packages.
1. Make sure you are logged in to npm on the terminal with:

```bash
npm login
```

</details>

### Compile packages and publish

Before publishing to NPM we need to build all child repo packages:

```bash
lerna run build
```

Then, publish to NPM:

```bash
lerna publish
```

`lerna publish` will automatically determine which packages should be published and prompt you to choose the new version. In addition to publishing it will also add and push a commit with the changes necessary to reference the new version. See [lerna publish docs](https://github.com/lerna/lerna/tree/master/commands/publish#readme) for more info.
