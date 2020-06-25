# Core Design

## Getting Started

### Lerna

This repo uses [Lerna](https://github.com/lerna/lerna) to manage multiple npm packages.

```bash
npm install -g lerna
```

You might be interested in using [lerna-wizard](https://github.com/webuniverseio/lerna-wizard) for a more helpful cli experience.

```bash
npm install -g lerna-wizard
```

### Installing dependencies

To install dependencies run:

```bash
# First, install deps in root package.json
npm install

# Then install and link deps in the various packages
lerna bootstrap
```

## Publishing to NPM

### Before your first time publishing

Make sure you have an NPM account with access to all the `@core-design` packages and you are logged into npm on the terminal.

```bash
npm login
```

### Compile packages and publish

Before publishing to NPM we need to build all the packages:

```bash
lerna run build-stencil
```

Then, publish to NPM:

```bash
lerna publish
```

The above command will automatically determine which packages should be published and prompt you to choose the new version. In addition to publishing it will also add and push a commit with the changes necessary to reference the new version. See [lerna publish docs](https://github.com/lerna/lerna/tree/master/commands/publish#readme) for more info.
