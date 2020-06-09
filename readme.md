# Core Components

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
