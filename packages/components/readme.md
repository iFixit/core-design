# Core Components

## Package Management

This repo leverages [Lerna](https://lerna.js.org/), a tool for managing multiple packages within the same repo.

**Lerna bypasses typical `npm` commands**. For a full breakdown of `lerna` commands, see the [lerna readme](https://github.com/lerna/lerna#readme)

## Getting Started

To start developing your Stencil project, run:

From `root`:

```bash
lerna run start
```

To start developing your Stencil project in Storybook, run:

From `root`:

```bash
lerna run storybook
```

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

To use this component, just use it like any other HTML element:

```html
<core-component first="Stencil" last="JS"></core-component>
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

View high level component example [here](./docs/component-example.md)

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

View IE11 polyfill details [here](./docs/ie11.md)

In addition, the following set of polyfills are also included:

- [Promise](https://github.com/stefanpenner/es6-promise)
- [fetch()](https://github.com/github/fetch)
- [CSS variables](https://github.com/ionic-team/stencil/tree/master/src/client/polyfills/css-shim): We implemented our own CSS variables polyfill that integrates into the Stencil runtime.

### All browsers

Some modern browsers like Edge do not include native support for Web Components. In that case, we conditionally load the [Custom Elements v1](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) polyfill.

---

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
