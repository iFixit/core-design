# core-tab

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                            | Type      | Default     |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `cols`        | `cols`        | The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. | `number`  | `undefined` |
| `disabled`    | `disabled`    | If `true`, the user cannot interact with the textarea.                                                                 | `boolean` | `false`     |
| `placeholder` | `placeholder` | Instructional text that shows before the input has a value.                                                            | `string`  | `undefined` |
| `required`    | `required`    | If `true`, the user must fill in a value before submitting a form.                                                     | `boolean` | `false`     |
| `rows`        | `rows`        | The number of visible text lines for the control.                                                                      | `number`  | `undefined` |
| `value`       | `value`       | The value of the textarea.                                                                                             | `string`  | `""`        |


## Methods

### `getInputElement() => Promise<HTMLTextAreaElement>`

Returns the native `<textarea>` element used under the hood.

#### Returns

Type: `Promise<HTMLTextAreaElement>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
