# Web Components

[![npm version](https://img.shields.io/npm/v/@core-design/components-web.svg?style=flat-square)](https://www.npmjs.com/package/@core-design/components-web)

## Component Structure

[Stencil](https://stenciljs.com/) components are plain ES6/TypeScript classes with some decorator metadata:

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
        Hello world, my name is {this.first} {this.last}
      </div>
    );
  }
}
```

Use it just like any other HTML element:

```html
<core-component first="Stencil" last="JS"></core-component>
```

[codesandbox.io example](https://codesandbox.io/s/html-core-tag-example-vzqqc)

## Naming Components

When creating new components, use the `core-` prefix. e.g. `core-button`, `core-icon`, etc are valid names.

Custom Elements must contain kebab-case names so they do not collide with existing html elements.

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

## Component Example

<details>
  <summary>Expand a detailed component example</summary>

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

</details>

## Browser Support

Web Components, specifically Custom Elements, are natively supported in Chrome and Safari and are coming to both Edge and Firefox. A dynamic polyfill loader is already included in order to only load the polyfills for the browsers that are missing specific features.

- Chrome (and all Chromium based browsers)
- Safari
- Edge
- Firefox
- IE 11

## Polyfills

Stencil includes a subset of the `core-js` polyfills for old browsers like IE 11, `fetch` and conditionally downloads the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) only when it's needed.

### Internet Explorer 11

Browsers that do not support native ESM (at the moment, only IE11 and older) will download a subset of [`core-js`](https://github.com/zloirock/core-js).

<details>
  <summary>Expand IE11 polyfill details</summary>

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

</details>

In addition, the following set of polyfills are also included:

- [Promise](https://github.com/stefanpenner/es6-promise)
- [fetch()](https://github.com/github/fetch)
- [CSS variables](https://github.com/ionic-team/stencil/tree/master/src/client/polyfills/css-shim): Stencil implemented their own CSS variables polyfill that integrates into the runtime.

### All browsers

Some modern browsers like Edge do not include native support for Web Components. In that case, we conditionally load the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) polyfill.
