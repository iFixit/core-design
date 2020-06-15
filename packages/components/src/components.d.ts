/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CoreAlert {
        /**
          * Optional primary color of the alert. Use: `color="gray"`, `color="green"`, `color="yellow"`, `color="red"`.
         */
        "color"?: "gray" | "green" | "yellow" | "red";
    }
    interface CoreBadge {
        /**
          * Color of the badge. Use: `color="black"` or `color="red"`.
         */
        "color"?: "black" | "red";
        /**
          * The pre-defined badge size. Use: `"small"` or `"large"`.
         */
        "size"?: "small" | "large";
        /**
          * The badge variation. Use: `"border"`, `"dot"`, or `"fill"`.
         */
        "variation"?: "border" | "dot" | "fill";
    }
    interface CoreButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * Specifies CSS display property of the custom element. [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
         */
        "display"?: "block" | "flex" | "inline" | "inlineFlex" | "none";
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * The type of element.
         */
        "elementType": string;
        /**
          * If `true`, the group styling is applied.
         */
        "group": boolean;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a button.
         */
        "href": string | undefined;
        /**
          * Specifies the loading animation location if applied. Use: `"left"`, `"right"`, or `"only"`.
         */
        "loading"?: "left" | "right" | "only";
        /**
          * Set to the value of border-radius applied. Default is 4(px).
         */
        "radius"?: "0" | "4" | "circle";
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * The pre-defined button size. Use: `"small"`, `"default"`, or `"large"`.
         */
        "size"?: "small" | "default" | "large";
        /**
          * The status classing of the button. Use: `"success"`, `"danger"`, or `"warning"`.
         */
        "status": "success" | "danger" | "warning";
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": "submit" | "reset" | "button";
        /**
          * The button variation.
         */
        "variation"?: "basic" | "primary" | "secondary" | "dark" | "light" | "borderless";
    }
    interface CoreCheckbox {
        /**
          * If applied, the element is checked. Use: `"checked"`.
         */
        "checked": boolean;
        /**
          * If applied, the user cannot interact with the element. Use: `"disabled"`.
         */
        "disabled": boolean;
        /**
          * Apply the large pre-defined large checkbox size styling. Use: `"large"`.
         */
        "large": boolean;
        /**
          * If applied, the user must fill in a value before submitting a form containing this element. Use: `"required"`.
         */
        "required": boolean;
    }
    interface CoreDropdown {
        /**
          * The dropdown visibility
         */
        "active": boolean;
        /**
          * The dropdown will show up when hovering the dropdown-trigger
         */
        "hoverable": boolean;
        /**
          * The dropdown will not wrap it's child element content.
         */
        "nowrap": boolean;
    }
    interface CoreDropdownItem {
        /**
          * The type of element.
         */
        "elementType": string;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a div.
         */
        "href": string | undefined;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
    }
    interface CoreIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Optional color of the icon. Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. (e.g. `color="red"`, `color="gray-2"`, etc).
         */
        "color"?: string;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: "alert-circle" | "alert-triangle" | "alert-triangle-solid" | "anchor" | "archive" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "bar" | "bell" | "bell-mute" | "bell-solid" | "bold" | "bullet" | "calendar" | "camera" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cart" | "cart-solid" | "category" | "check" | "check-sm" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "circle" | "clipboard" | "clock" | "columns" | "cross" | "cross-sm" | "disable" | "dot" | "download" | "drag" | "fast-forward" | "film-camera" | "gear" | "globe" | "grad" | "grid" | "heading" | "heart" | "help" | "help-solid" | "history" | "hourglass" | "image" | "info" | "italic" | "layers" | "link" | "link-out" | "list-bullet" | "list-num" | "logout" | "mail" | "mail-solid" | "menu" | "meter" | "minus" | "minus-box" | "more" | "paragraph" | "pen" | "pencil" | "play" | "plus" | "plus-box" | "quote" | "redo" | "refresh" | "rewind" | "rows" | "search" | "settings" | "speech" | "spinner" | "star" | "star-half" | "star-solid" | "strike" | "toolbox" | "trash" | "underline" | "undo" | "user" | "users" | "video" | string;
        /**
          * If enabled, core-icon will be loaded lazily when it's visible in the viewport.
         */
        "lazy": boolean;
        /**
          * Specifies which icon to use from `src/core-icons`.
         */
        "name"?: string;
        /**
          * The size of the icon. Available options are: `"16"` and `"24"`.
         */
        "size"?: "16" | "24";
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
    }
    interface CoreInput {
        /**
          * Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus": boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * Returns the native `<input>` element.
         */
        "getInputElement": () => Promise<HTMLInputElement>;
        /**
          * The core-icon to render inside the text input.
         */
        "icon"?: string;
        /**
          * A hint to the browser for which keyboard to display. Use: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputkeyboard"?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Instructional placeholder text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * Apply the large pre-defined input size and styling. Use: `"large"`.
         */
        "size"?: "large";
        /**
          * How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
         */
        "type"?: string;
    }
    interface CoreLabel {
        /**
          * Optional color of the label. Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. (e.g. `color="red"`, `color="gray-2"`, etc).
         */
        "color"?: string;
        /**
          * If `true`, the user cannot interact with the nested element (typically core-input).
         */
        "disabled": boolean;
        /**
          * The display determines where and how the label behaves inside an item.
         */
        "display"?: "inline" | "block";
        /**
          * Applies the provided URL to the helpIcon href.
         */
        "helpurl"?: string | null;
    }
    interface CoreProgress {
        /**
          * Color of the progress bar. Use: `color="black"`, `color="red"`, etc.
         */
        "color"?: "black" | "blue" | "green" | "yellow" | "red";
        /**
          * The progress bar maximum value.
         */
        "max": number;
        /**
          * The pre-defined progress bar size. Use: `"small"` or `"large"`.
         */
        "size"?: "small" | "large";
        /**
          * The progress bar value.
         */
        "value": number | undefined;
    }
    interface CoreRadio {
        /**
          * If applied, the element is checked. Use: `"checked"`.
         */
        "checked": boolean;
        /**
          * If applied, the user cannot interact with the element. Use: `"disabled"`.
         */
        "disabled": boolean;
        /**
          * Apply the large pre-defined large radio size styling. Use: `"large"`.
         */
        "large": boolean;
        /**
          * If applied, the user must fill in a value before submitting a form containing this element. Use: `"required"`.
         */
        "required": boolean;
    }
    interface CoreSpinner {
        /**
          * Color of the spinner. Use: `color="black"` or `color="red"`.
         */
        "color"?: "black" | "red" | "blue" | "green" | "yellow";
        /**
          * The pre-defined spinner size. Use: `"small"`, `"medium"`, `"large"`, ect.
         */
        "size"?: "small" | "medium" | "large";
    }
    interface CoreTag {
        /**
          * Allows the tag to be closable and removed from the view.
         */
        "closable": boolean;
        /**
          * Optional primary color of the tag. Defaults to `black`. Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. Use: `color="blue"`, `color="green"`, `color="yellow"`, `color="red"`.
         */
        "color"?: "black" | "blue" | "green" | "yellow" | "red";
        /**
          * The pre-defined tag size. Use: `"small"` or `"large"`.
         */
        "size"?: "small" | "large";
        /**
          * The tag variation. Use: `"default"` or `"light"`.
         */
        "variation"?: "default" | "light";
    }
    interface CoreTextarea {
        /**
          * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
         */
        "cols"?: number;
        /**
          * If `true`, the user cannot interact with the textarea.
         */
        "disabled": boolean;
        /**
          * Returns the native `<textarea>` element used under the hood.
         */
        "getInputElement": () => Promise<HTMLTextAreaElement>;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * The number of visible text lines for the control.
         */
        "rows"?: number;
        /**
          * The value of the textarea.
         */
        "value"?: string | null;
    }
    interface CoreToast {
        /**
          * Optional primary color of the toast. Defaults to `black`. Use: `color="white"`, `color="green"`, `color="yellow"`, `color="red"`.
         */
        "color"?: "white" | "green" | "yellow" | "red";
    }
    interface CoreToggle {
        /**
          * If applied, the element is rendered with the alternate styling. Use: `"alt"`.
         */
        "alt": boolean;
        /**
          * If applied, the element is checked. Use: `"checked"`.
         */
        "checked": boolean;
        /**
          * Optional primary color of the icon. Defaults to `blue`. Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. Use: `color="green"`, `color="yellow"`, `color="red"`, `color="black"`.
         */
        "color"?: "green" | "yellow" | "red" | "black";
        /**
          * If applied, the user cannot interact with the element. Use: `"disabled"`.
         */
        "disabled": boolean;
        /**
          * Apply the large pre-defined large toggle size styling. Use: `"large"`.
         */
        "large": boolean;
        /**
          * If applied, the user must fill in a value before submitting a form containing this element. Use: `"required"`.
         */
        "required": boolean;
    }
    interface CoreTooltip {
        /**
          * The tooltip visibility
         */
        "active": boolean;
        /**
          * The tooltip color Use: "dark"`or `"light"`.
         */
        "color"?: "dark" | "light";
        /**
          * The tooltip will show up when hovering the tooltip-trigger
         */
        "hoverable": boolean;
        /**
          * The tooltip variation.
         */
        "variation"?: "top" | "bottom";
    }
}
declare global {
    interface HTMLCoreAlertElement extends Components.CoreAlert, HTMLStencilElement {
    }
    var HTMLCoreAlertElement: {
        prototype: HTMLCoreAlertElement;
        new (): HTMLCoreAlertElement;
    };
    interface HTMLCoreBadgeElement extends Components.CoreBadge, HTMLStencilElement {
    }
    var HTMLCoreBadgeElement: {
        prototype: HTMLCoreBadgeElement;
        new (): HTMLCoreBadgeElement;
    };
    interface HTMLCoreButtonElement extends Components.CoreButton, HTMLStencilElement {
    }
    var HTMLCoreButtonElement: {
        prototype: HTMLCoreButtonElement;
        new (): HTMLCoreButtonElement;
    };
    interface HTMLCoreCheckboxElement extends Components.CoreCheckbox, HTMLStencilElement {
    }
    var HTMLCoreCheckboxElement: {
        prototype: HTMLCoreCheckboxElement;
        new (): HTMLCoreCheckboxElement;
    };
    interface HTMLCoreDropdownElement extends Components.CoreDropdown, HTMLStencilElement {
    }
    var HTMLCoreDropdownElement: {
        prototype: HTMLCoreDropdownElement;
        new (): HTMLCoreDropdownElement;
    };
    interface HTMLCoreDropdownItemElement extends Components.CoreDropdownItem, HTMLStencilElement {
    }
    var HTMLCoreDropdownItemElement: {
        prototype: HTMLCoreDropdownItemElement;
        new (): HTMLCoreDropdownItemElement;
    };
    interface HTMLCoreIconElement extends Components.CoreIcon, HTMLStencilElement {
    }
    var HTMLCoreIconElement: {
        prototype: HTMLCoreIconElement;
        new (): HTMLCoreIconElement;
    };
    interface HTMLCoreInputElement extends Components.CoreInput, HTMLStencilElement {
    }
    var HTMLCoreInputElement: {
        prototype: HTMLCoreInputElement;
        new (): HTMLCoreInputElement;
    };
    interface HTMLCoreLabelElement extends Components.CoreLabel, HTMLStencilElement {
    }
    var HTMLCoreLabelElement: {
        prototype: HTMLCoreLabelElement;
        new (): HTMLCoreLabelElement;
    };
    interface HTMLCoreProgressElement extends Components.CoreProgress, HTMLStencilElement {
    }
    var HTMLCoreProgressElement: {
        prototype: HTMLCoreProgressElement;
        new (): HTMLCoreProgressElement;
    };
    interface HTMLCoreRadioElement extends Components.CoreRadio, HTMLStencilElement {
    }
    var HTMLCoreRadioElement: {
        prototype: HTMLCoreRadioElement;
        new (): HTMLCoreRadioElement;
    };
    interface HTMLCoreSpinnerElement extends Components.CoreSpinner, HTMLStencilElement {
    }
    var HTMLCoreSpinnerElement: {
        prototype: HTMLCoreSpinnerElement;
        new (): HTMLCoreSpinnerElement;
    };
    interface HTMLCoreTagElement extends Components.CoreTag, HTMLStencilElement {
    }
    var HTMLCoreTagElement: {
        prototype: HTMLCoreTagElement;
        new (): HTMLCoreTagElement;
    };
    interface HTMLCoreTextareaElement extends Components.CoreTextarea, HTMLStencilElement {
    }
    var HTMLCoreTextareaElement: {
        prototype: HTMLCoreTextareaElement;
        new (): HTMLCoreTextareaElement;
    };
    interface HTMLCoreToastElement extends Components.CoreToast, HTMLStencilElement {
    }
    var HTMLCoreToastElement: {
        prototype: HTMLCoreToastElement;
        new (): HTMLCoreToastElement;
    };
    interface HTMLCoreToggleElement extends Components.CoreToggle, HTMLStencilElement {
    }
    var HTMLCoreToggleElement: {
        prototype: HTMLCoreToggleElement;
        new (): HTMLCoreToggleElement;
    };
    interface HTMLCoreTooltipElement extends Components.CoreTooltip, HTMLStencilElement {
    }
    var HTMLCoreTooltipElement: {
        prototype: HTMLCoreTooltipElement;
        new (): HTMLCoreTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "core-alert": HTMLCoreAlertElement;
        "core-badge": HTMLCoreBadgeElement;
        "core-button": HTMLCoreButtonElement;
        "core-checkbox": HTMLCoreCheckboxElement;
        "core-dropdown": HTMLCoreDropdownElement;
        "core-dropdown-item": HTMLCoreDropdownItemElement;
        "core-icon": HTMLCoreIconElement;
        "core-input": HTMLCoreInputElement;
        "core-label": HTMLCoreLabelElement;
        "core-progress": HTMLCoreProgressElement;
        "core-radio": HTMLCoreRadioElement;
        "core-spinner": HTMLCoreSpinnerElement;
        "core-tag": HTMLCoreTagElement;
        "core-textarea": HTMLCoreTextareaElement;
        "core-toast": HTMLCoreToastElement;
        "core-toggle": HTMLCoreToggleElement;
        "core-tooltip": HTMLCoreTooltipElement;
    }
}
declare namespace LocalJSX {
    interface CoreAlert {
        /**
          * Optional primary color of the alert. Use: `color="gray"`, `color="green"`, `color="yellow"`, `color="red"`.
         */
        "color"?: "gray" | "green" | "yellow" | "red";
    }
    interface CoreBadge {
        /**
          * Color of the badge. Use: `color="black"` or `color="red"`.
         */
        "color"?: "black" | "red";
        /**
          * The pre-defined badge size. Use: `"small"` or `"large"`.
         */
        "size"?: "small" | "large";
        /**
          * The badge variation. Use: `"border"`, `"dot"`, or `"fill"`.
         */
        "variation"?: "border" | "dot" | "fill";
    }
    interface CoreButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * Specifies CSS display property of the custom element. [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
         */
        "display"?: "block" | "flex" | "inline" | "inlineFlex" | "none";
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * The type of element.
         */
        "elementType"?: string;
        /**
          * If `true`, the group styling is applied.
         */
        "group"?: boolean;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a button.
         */
        "href"?: string | undefined;
        /**
          * Specifies the loading animation location if applied. Use: `"left"`, `"right"`, or `"only"`.
         */
        "loading"?: "left" | "right" | "only";
        /**
          * Set to the value of border-radius applied. Default is 4(px).
         */
        "radius"?: "0" | "4" | "circle";
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * The pre-defined button size. Use: `"small"`, `"default"`, or `"large"`.
         */
        "size"?: "small" | "default" | "large";
        /**
          * The status classing of the button. Use: `"success"`, `"danger"`, or `"warning"`.
         */
        "status"?: "success" | "danger" | "warning";
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: "submit" | "reset" | "button";
        /**
          * The button variation.
         */
        "variation"?: "basic" | "primary" | "secondary" | "dark" | "light" | "borderless";
    }
    interface CoreCheckbox {
        /**
          * If applied, the element is checked. Use: `"checked"`.
         */
        "checked"?: boolean;
        /**
          * If applied, the user cannot interact with the element. Use: `"disabled"`.
         */
        "disabled"?: boolean;
        /**
          * Apply the large pre-defined large checkbox size styling. Use: `"large"`.
         */
        "large"?: boolean;
        /**
          * If applied, the user must fill in a value before submitting a form containing this element. Use: `"required"`.
         */
        "required"?: boolean;
    }
    interface CoreDropdown {
        /**
          * The dropdown visibility
         */
        "active"?: boolean;
        /**
          * The dropdown will show up when hovering the dropdown-trigger
         */
        "hoverable"?: boolean;
        /**
          * The dropdown will not wrap it's child element content.
         */
        "nowrap"?: boolean;
    }
    interface CoreDropdownItem {
        /**
          * The type of element.
         */
        "elementType"?: string;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a div.
         */
        "href"?: string | undefined;
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
    }
    interface CoreIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Optional color of the icon. Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. (e.g. `color="red"`, `color="gray-2"`, etc).
         */
        "color"?: string;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: "alert-circle" | "alert-triangle" | "alert-triangle-solid" | "anchor" | "archive" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "bar" | "bell" | "bell-mute" | "bell-solid" | "bold" | "bullet" | "calendar" | "camera" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cart" | "cart-solid" | "category" | "check" | "check-sm" | "chevron-down" | "chevron-left" | "chevron-right" | "chevron-up" | "circle" | "clipboard" | "clock" | "columns" | "cross" | "cross-sm" | "disable" | "dot" | "download" | "drag" | "fast-forward" | "film-camera" | "gear" | "globe" | "grad" | "grid" | "heading" | "heart" | "help" | "help-solid" | "history" | "hourglass" | "image" | "info" | "italic" | "layers" | "link" | "link-out" | "list-bullet" | "list-num" | "logout" | "mail" | "mail-solid" | "menu" | "meter" | "minus" | "minus-box" | "more" | "paragraph" | "pen" | "pencil" | "play" | "plus" | "plus-box" | "quote" | "redo" | "refresh" | "rewind" | "rows" | "search" | "settings" | "speech" | "spinner" | "star" | "star-half" | "star-solid" | "strike" | "toolbox" | "trash" | "underline" | "undo" | "user" | "users" | "video" | string;
        /**
          * If enabled, core-icon will be loaded lazily when it's visible in the viewport.
         */
        "lazy"?: boolean;
        /**
          * Specifies which icon to use from `src/core-icons`.
         */
        "name"?: string;
        /**
          * The size of the icon. Available options are: `"16"` and `"24"`.
         */
        "size"?: "16" | "24";
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
    }
    interface CoreInput {
        /**
          * Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus"?: boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * The core-icon to render inside the text input.
         */
        "icon"?: string;
        /**
          * A hint to the browser for which keyboard to display. Use: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputkeyboard"?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Instructional placeholder text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * Apply the large pre-defined input size and styling. Use: `"large"`.
         */
        "size"?: "large";
        /**
          * How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
         */
        "type"?: string;
    }
    interface CoreLabel {
        /**
          * Optional color of the label. Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. (e.g. `color="red"`, `color="gray-2"`, etc).
         */
        "color"?: string;
        /**
          * If `true`, the user cannot interact with the nested element (typically core-input).
         */
        "disabled"?: boolean;
        /**
          * The display determines where and how the label behaves inside an item.
         */
        "display"?: "inline" | "block";
        /**
          * Applies the provided URL to the helpIcon href.
         */
        "helpurl"?: string | null;
    }
    interface CoreProgress {
        /**
          * Color of the progress bar. Use: `color="black"`, `color="red"`, etc.
         */
        "color"?: "black" | "blue" | "green" | "yellow" | "red";
        /**
          * The progress bar maximum value.
         */
        "max"?: number;
        /**
          * The pre-defined progress bar size. Use: `"small"` or `"large"`.
         */
        "size"?: "small" | "large";
        /**
          * The progress bar value.
         */
        "value"?: number | undefined;
    }
    interface CoreRadio {
        /**
          * If applied, the element is checked. Use: `"checked"`.
         */
        "checked"?: boolean;
        /**
          * If applied, the user cannot interact with the element. Use: `"disabled"`.
         */
        "disabled"?: boolean;
        /**
          * Apply the large pre-defined large radio size styling. Use: `"large"`.
         */
        "large"?: boolean;
        /**
          * If applied, the user must fill in a value before submitting a form containing this element. Use: `"required"`.
         */
        "required"?: boolean;
    }
    interface CoreSpinner {
        /**
          * Color of the spinner. Use: `color="black"` or `color="red"`.
         */
        "color"?: "black" | "red" | "blue" | "green" | "yellow";
        /**
          * The pre-defined spinner size. Use: `"small"`, `"medium"`, `"large"`, ect.
         */
        "size"?: "small" | "medium" | "large";
    }
    interface CoreTag {
        /**
          * Allows the tag to be closable and removed from the view.
         */
        "closable"?: boolean;
        /**
          * Optional primary color of the tag. Defaults to `black`. Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. Use: `color="blue"`, `color="green"`, `color="yellow"`, `color="red"`.
         */
        "color"?: "black" | "blue" | "green" | "yellow" | "red";
        /**
          * The pre-defined tag size. Use: `"small"` or `"large"`.
         */
        "size"?: "small" | "large";
        /**
          * The tag variation. Use: `"default"` or `"light"`.
         */
        "variation"?: "default" | "light";
    }
    interface CoreTextarea {
        /**
          * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
         */
        "cols"?: number;
        /**
          * If `true`, the user cannot interact with the textarea.
         */
        "disabled"?: boolean;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The number of visible text lines for the control.
         */
        "rows"?: number;
        /**
          * The value of the textarea.
         */
        "value"?: string | null;
    }
    interface CoreToast {
        /**
          * Optional primary color of the toast. Defaults to `black`. Use: `color="white"`, `color="green"`, `color="yellow"`, `color="red"`.
         */
        "color"?: "white" | "green" | "yellow" | "red";
    }
    interface CoreToggle {
        /**
          * If applied, the element is rendered with the alternate styling. Use: `"alt"`.
         */
        "alt"?: boolean;
        /**
          * If applied, the element is checked. Use: `"checked"`.
         */
        "checked"?: boolean;
        /**
          * Optional primary color of the icon. Defaults to `blue`. Use the following `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. Use: `color="green"`, `color="yellow"`, `color="red"`, `color="black"`.
         */
        "color"?: "green" | "yellow" | "red" | "black";
        /**
          * If applied, the user cannot interact with the element. Use: `"disabled"`.
         */
        "disabled"?: boolean;
        /**
          * Apply the large pre-defined large toggle size styling. Use: `"large"`.
         */
        "large"?: boolean;
        /**
          * If applied, the user must fill in a value before submitting a form containing this element. Use: `"required"`.
         */
        "required"?: boolean;
    }
    interface CoreTooltip {
        /**
          * The tooltip visibility
         */
        "active"?: boolean;
        /**
          * The tooltip color Use: "dark"`or `"light"`.
         */
        "color"?: "dark" | "light";
        /**
          * The tooltip will show up when hovering the tooltip-trigger
         */
        "hoverable"?: boolean;
        /**
          * The tooltip variation.
         */
        "variation"?: "top" | "bottom";
    }
    interface IntrinsicElements {
        "core-alert": CoreAlert;
        "core-badge": CoreBadge;
        "core-button": CoreButton;
        "core-checkbox": CoreCheckbox;
        "core-dropdown": CoreDropdown;
        "core-dropdown-item": CoreDropdownItem;
        "core-icon": CoreIcon;
        "core-input": CoreInput;
        "core-label": CoreLabel;
        "core-progress": CoreProgress;
        "core-radio": CoreRadio;
        "core-spinner": CoreSpinner;
        "core-tag": CoreTag;
        "core-textarea": CoreTextarea;
        "core-toast": CoreToast;
        "core-toggle": CoreToggle;
        "core-tooltip": CoreTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "core-alert": LocalJSX.CoreAlert & JSXBase.HTMLAttributes<HTMLCoreAlertElement>;
            "core-badge": LocalJSX.CoreBadge & JSXBase.HTMLAttributes<HTMLCoreBadgeElement>;
            "core-button": LocalJSX.CoreButton & JSXBase.HTMLAttributes<HTMLCoreButtonElement>;
            "core-checkbox": LocalJSX.CoreCheckbox & JSXBase.HTMLAttributes<HTMLCoreCheckboxElement>;
            "core-dropdown": LocalJSX.CoreDropdown & JSXBase.HTMLAttributes<HTMLCoreDropdownElement>;
            "core-dropdown-item": LocalJSX.CoreDropdownItem & JSXBase.HTMLAttributes<HTMLCoreDropdownItemElement>;
            "core-icon": LocalJSX.CoreIcon & JSXBase.HTMLAttributes<HTMLCoreIconElement>;
            "core-input": LocalJSX.CoreInput & JSXBase.HTMLAttributes<HTMLCoreInputElement>;
            "core-label": LocalJSX.CoreLabel & JSXBase.HTMLAttributes<HTMLCoreLabelElement>;
            "core-progress": LocalJSX.CoreProgress & JSXBase.HTMLAttributes<HTMLCoreProgressElement>;
            "core-radio": LocalJSX.CoreRadio & JSXBase.HTMLAttributes<HTMLCoreRadioElement>;
            "core-spinner": LocalJSX.CoreSpinner & JSXBase.HTMLAttributes<HTMLCoreSpinnerElement>;
            "core-tag": LocalJSX.CoreTag & JSXBase.HTMLAttributes<HTMLCoreTagElement>;
            "core-textarea": LocalJSX.CoreTextarea & JSXBase.HTMLAttributes<HTMLCoreTextareaElement>;
            "core-toast": LocalJSX.CoreToast & JSXBase.HTMLAttributes<HTMLCoreToastElement>;
            "core-toggle": LocalJSX.CoreToggle & JSXBase.HTMLAttributes<HTMLCoreToggleElement>;
            "core-tooltip": LocalJSX.CoreTooltip & JSXBase.HTMLAttributes<HTMLCoreTooltipElement>;
        }
    }
}
