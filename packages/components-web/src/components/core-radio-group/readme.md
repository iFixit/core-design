# core-radio-group



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                                                                                                               | Type                | Default        |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------------- |
| `display` | `display` | Display the radio group as a row or column (via flexbox). Child `core-radio` margin is set to 16px as a default. The core-radio-group`is not a shadow element, feel free to overwrite with CSS as-needed. | `"column" \| "row"` | `"column"`     |
| `name`    | `name`    | The name of the control, which is submitted with the form data.                                                                                                                                           | `string`            | `this.inputId` |
| `value`   | `value`   | The value of the radio group.                                                                                                                                                                             | `any`               | `undefined`    |


## Events

| Event         | Description                         | Type                                       |
| ------------- | ----------------------------------- | ------------------------------------------ |
| `valueChange` | Emitted when the value has changed. | `CustomEvent<RadioGroupChangeEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
