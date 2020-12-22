# core-button

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                                               | Type                                                                       | Default     |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------- |
| `disabled`    | `disabled`     | If `true`, the user cannot interact with the button.                                                                                                                                                                                                                                      | `boolean`                                                                  | `false`     |
| `display`     | `display`      | Specifies [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display) of the custom element.                                                                                                                                                                         | `"block" \| "flex" \| "inline" \| "inlineFlex" \| "none"`                  | `"flex"`    |
| `download`    | `download`     | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string`                                                                   | `undefined` |
| `elementType` | `element-type` | The type of element.                                                                                                                                                                                                                                                                      | `string`                                                                   | `"button"`  |
| `href`        | `href`         | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a button.                                                                                                                                               | `string`                                                                   | `undefined` |
| `loading`     | `loading`      | Specifies the loading animation location if applied.                                                                                                                                                                                                                                      | `"left" \| "only" \| "right"`                                              | `undefined` |
| `radius`      | `radius`       | Set the value of the element border-radius. Default is 4(px).                                                                                                                                                                                                                             | `"lg" \| "md" \| "none" \| "pill"`                                         | `"md"`      |
| `rel`         | `rel`          | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string`                                                                   | `undefined` |
| `size`        | `size`         | The pre-defined button size.                                                                                                                                                                                                                                                              | `"default" \| "large" \| "small"`                                          | `"default"` |
| `status`      | `status`       | The status classing of the button.                                                                                                                                                                                                                                                        | `"danger" \| "success" \| "warning"`                                       | `undefined` |
| `target`      | `target`       | Specifies where to display the linked URL. Only applies when an `href` is provided.                                                                                                                                                                                                       | `string`                                                                   | `undefined` |
| `type`        | `type`         | The type of the button.                                                                                                                                                                                                                                                                   | `"button" \| "reset" \| "submit"`                                          | `"button"`  |
| `variation`   | `variation`    | The button variation.                                                                                                                                                                                                                                                                     | `"basic" \| "borderless" \| "dark" \| "light" \| "primary" \| "secondary"` | `"basic"`   |
| `width`       | `width`        | Set to "full" for a 100% full-width button without border-radius/borders or to "block"`.                                                                                                                                                                                                  | `"block" \| "full"`                                                        | `undefined` |


## Slots

| Slot               | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
|                    | Content is placed between the named slots if provided without a slot. |
| `"`button-icon`"`  | Should be used on an icon in a button that has no text.               |
| `"`button-left`"`  | Content is placed to the left of the button text.                     |
| `"`button-right`"` | Content is placed to the right of the button text.                    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
