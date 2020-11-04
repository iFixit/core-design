# React Components

[![npm version](https://img.shields.io/npm/v/@core-design/components-react.svg?style=flat-square)](https://www.npmjs.com/package/@core-design/components-react)

This package contains Stencil's `core-design`, but in pre-compiled React wrappers.

## Usage

```javascript
import React from "react";
import { CoreButton } from "@core-design/components-react";

export default function App() {
  return (
    <div className="App">
      <CoreButton>Button</CoreButton>
    </div>
  );
}
```

...just add props 😁

[codesandbox.io example](https://codesandbox.io/s/core-button-example-e32f5)

## Package Management

To compile and build packages, head to the `core-design` root and run:

```bash
lerna run build
```

## Publishing to NPM

Lerna provides a simple CLI interface for publishing to NPM. See the [root readme](https://github.com/iFixit/core-design#core-design) for more info.
