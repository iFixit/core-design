# core-radio

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                 | Type                   | Default        |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------- | ---------------------- | -------------- |
| `disabled`      | `disabled`       | If applied, the user cannot interact with the element.                                      | `boolean`              | `false`        |
| `label`         | `label`          | The integrated label element associated with the element.                                   | `string`               | `undefined`    |
| `labelPosition` | `label-position` | The integrated label element position.                                                      | `"left" \| "right"`    | `"right"`      |
| `name`          | `name`           | The name of the control, which is submitted with the form data.                             | `string`               | `this.inputId` |
| `required`      | `required`       | If applied, the user must fill in a value before submitting a form containing this element. | `boolean`              | `false`        |
| `size`          | `size`           | Apply the pre-defined large element size styling.                                           | `"default" \| "large"` | `"default"`    |
| `value`         | `value`          | the value of the radio.                                                                     | `any`                  | `undefined`    |


## Events

| Event        | Description                                | Type                |
| ------------ | ------------------------------------------ | ------------------- |
| `blurEvent`  | Emitted when the radio button loses focus. | `CustomEvent<void>` |
| `focusEvent` | Emitted when the radio button has focus.   | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
