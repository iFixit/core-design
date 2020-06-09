# Core Components

## Getting Started

_\*After cloning the repo for the first time, run: `npm run build` to copy core-icons into the build/assets directory._

To start developing, run:

```bash
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out Stencil docs [here](https://stenciljs.com/docs/my-first-component).

## Component Structure

Stencil components are plain ES6/TypeScript classes with some decorator metadata.

Create new components by creating files with a `.tsx` extension, such as `core-component.tsx`, and place them in `src/components`.

```tsx
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "core-component",
  styleUrl: "core-component.css",
})
export class Component {
  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
```

Note: the `.tsx` extension is required, as this is the standard for TypeScript classes that use JSX.

To use this component, just use it like any other HTML element:

```html
<core-component first="Stencil" last="JS"></core-component>
```

## Hosting the app

Stencil components run directly in the browser through script includes just like normal Custom Elements, and run by using the tag just like any other HTML component:

Here's an example `index.html` file that runs a Stencil app:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
    <script src="build/app.js"></script>
  </head>
  <body>
    <core-component first="Stencil" last="JS"></core-component>
  </body>
</html>
```

## Naming Components

When creating new component tags, use the `core-` prefix and kebab-case.

For example: `core-button`, `core-icon`, etc. Custom Elements must contain a dashed name so they do not collide with existing html element names.

## API

The API for Stencil closely mirrors the API for Custom Elements v1.

### Components

| Decorator      | Description                                                                            |
| -------------- | -------------------------------------------------------------------------------------- |
| `@Component()` | Indicate a class is a Stencil component.                                               |
|                |                                                                                        |
| `@Prop()`      | Creates a property that will exist on the element and be data-bound to this component. |
| `@State()`     | Creates a local state variable that will not be placed on the element.                 |
| `@Method()`    | Expose specific methods to be publicly accessible.                                     |

## High Level Component Example

```tsx
@Component({
  tag: "core-component",
  styleUrls: {
    ios: "component.ios.css",
    md: "component.md.css",
    wp: "component.wp.css",
  },
})
export class Component {
  /**
   * 1. Own Properties
   * Always set the type if a default value has not
   * been set. If a default value is being set, then type
   * is already inferred. List the own properties in
   * alphabetical order. Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  num: number;
  someText = "default";

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
  @State() isValidated: boolean;
  @State() status = 0;

  /**
   * 4. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */
  @Prop() content: string;
  @Prop() enabled: boolean;
  @Prop() menuId: string;
  @Prop() type = "overlay";

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   * This makes sense since both statements are strongly connected.
   * - If renaming the instance variable name you must also update the name in @Watch()
   * - Code is easier to follow and maintain.
   */
  @Prop() swipeEnabled = true;

  @Watch("swipeEnabled")
  swipeEnabledChanged(newSwipeEnabled: boolean, oldSwipeEnabled: boolean) {
    this.updateState();
  }

  /**
   * 5. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  @Event() coreClose: EventEmitter;
  @Event() coreDrag: EventEmitter;
  @Event() coreOpen: EventEmitter;

  /**
   * 6. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentDidUnload() {}

  /**
   * 7. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen("click", { enabled: false })
  onClick(ev: UIEvent) {
    console.log("hi!");
  }

  /**
   * 8. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Public Methods must be async.
   * Requires JSDocs for public API documentation.
   */
  @Method()
  async open(): Promise<boolean> {
    // ...
    return true;
  }

  @Method()
  async close(): Promise<void> {
    // ...
  }

  /**
   * 9. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */
  prepareAnimation(): Promise<void> {
    // ...
  }

  updateState() {
    // ...
  }

  /**
   * 10. render() function
   * Always the last one in the class.
   */
  render() {
    return (
      <Host
        attribute="navigation"
        side={this.isRightSide ? "right" : "left"}
        type={this.type}
        class={{
          "core-is-animating": this.isAnimating,
        }}
      >
        <div class="menu-inner page-inner">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
```

## Browser Support

Web Components, specifically Custom Elements, are natively supported in Chrome and Safari and are coming to both Edge and Firefox. A dynamic polyfill loader is already included in order to only load the polyfills for the browsers that are missing specific features.

- Chrome (and all Chromium based browsers)
- Safari
- Edge
- Firefox
- IE 11

## Polyfills

Stencil includes a subset of the `core-js` polyfills for old browsers like IE11, `fetch` and conditionally downloads the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) only when it's needed for modern browsers (EDGE and old versions of Firefox.)

### Internet Explorer 11

Browsers that do not support native ESM (at the moment, only IE11 and older) will download a subset of [`core-js`](https://github.com/zloirock/core-js).

This subset is generated using the [`core-js-builder` tool](https://github.com/zloirock/core-js/tree/master/packages/core-js-builder) with the following configuration:

```js
require("core-js-builder")({
  targets: "ie 11",
  modules: [
    "es",
    "web.url",
    "web.url.to-json",
    "web.url-search-params",
    "web.dom-collections.for-each",
  ],
  blacklist: [
    "es.math",
    "es.date",
    "es.symbol",
    "es.array-buffer",
    "es.data-view",
    "es.typed-array",
    "es.reflect",
    "es.promise",
  ],
});
```

In addition, the following set of polyfills are also included:

- [Promise](https://github.com/stefanpenner/es6-promise)
- [fetch()](https://github.com/github/fetch)
- [CSS variables](https://github.com/ionic-team/stencil/tree/master/src/client/polyfills/css-shim): We implemented our own CSS variables polyfill that integrates into the Stenciljs runtime.

### All browsers

Some modern browsers like Edge do not include native support for Web Components. In that case, we conditionally load the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) polyfill.

---

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
