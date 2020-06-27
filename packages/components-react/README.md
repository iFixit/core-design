# React Components

This package contains Stencil's `core-components`, but in pre-compiled React wrappers.

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

[Play with an example](https://codesandbox.io/s/core-button-example-dk8su)

### Package Management

To compile and build packages, head to the `core-components` root and run:

```bash
lerna run build
```

### Publishing to NPM

Lerna provides a simple CLI interface for publishing to NPM. See the [root readme](./core-design/blob/master/readme.md) for more info.
