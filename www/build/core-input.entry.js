import { r as registerInstance, h, H as Host, g as getElement } from './index-73cae565.js';

const findItemLabel = (componentEl) => {
    const itemEl = componentEl.closest("div");
    if (itemEl) {
        return itemEl.querySelector("core-label");
    }
    return null;
};

const coreInputCss = ":host{color:#828D96;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font:inherit;position:relative}:host([icon]) .native-element{padding-left:40px}:host([disabled]) .native-element{color:rgba(130, 141, 150, 0.5);cursor:not-allowed}:host([size=\"large\"]) .native-element{font-size:16px;padding:14px 20px 14px 50px}:host([type=\"text\"]){-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}:host([type=\"text\"]) .native-element{width:inherit}:host([type=\"checkbox\"]) .input-inner{height:16px;margin-right:8px;width:16px}:host([type=\"checkbox\"]) .native-element{height:inherit;margin:0;min-height:inherit;padding:0;width:inherit}:host(.core-error){color:#F34E46}:host(.core-error) .native-element{border-color:#FF6860}:host(.core-error) .native-element:not(:disabled):focus,:host(.core-error) .native-element:not(:disabled):active{border-color:#F34E46;-webkit-box-shadow:0 0 0 3px rgba(255, 104, 96, 0.3);box-shadow:0 0 0 3px rgba(255, 104, 96, 0.3)}:host(.core-success){color:#33B464}:host(.core-success) .native-element{border-color:#5DC984}:host(.core-success) .native-element:not(:disabled):focus,:host(.core-success) .native-element:not(:disabled):active{border-color:#33B464;-webkit-box-shadow:0 0 0 3px rgba(93, 201, 132, 0.3);box-shadow:0 0 0 3px rgba(93, 201, 132, 0.3)}:host(.core-search) .native-element{-webkit-box-shadow:0px 2px 4px rgba(0, 0, 0, 0.07);box-shadow:0px 2px 4px rgba(0, 0, 0, 0.07)}:host(.core-search) .native-element:not(:disabled):focus,:host(.core-search) .native-element:not(:disabled):active{border-color:#828D96;-webkit-box-shadow:0 0 0 3px rgba(59, 149, 255, 0.3);box-shadow:0 0 0 3px rgba(59, 149, 255, 0.3)}.input-inner{width:inherit}.native-element{background:#FFFFFF;border:1px solid #D2DADF;border-radius:4px;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:#242C33;font:inherit;min-height:36px;outline:none;padding-right:16px;padding-left:16px;-webkit-transition:-webkit-box-shadow 0.12s ease-in-out;transition:-webkit-box-shadow 0.12s ease-in-out;-o-transition:box-shadow 0.12s ease-in-out;transition:box-shadow 0.12s ease-in-out;transition:box-shadow 0.12s ease-in-out, -webkit-box-shadow 0.12s ease-in-out;width:inherit}.native-element::-webkit-input-placeholder{color:#AFBBC4}.native-element::-moz-placeholder{color:#AFBBC4}.native-element::-ms-input-placeholder{color:#AFBBC4}.native-element::placeholder{color:#AFBBC4}.native-element:not(:disabled):not([type=\"checkbox\"]):focus,.native-element:not(:disabled):not([type=\"checkbox\"]):active{border-color:#828D96;-webkit-box-shadow:0 0 0 3px rgba(59, 149, 255, 0.3);box-shadow:0 0 0 3px rgba(59, 149, 255, 0.3)}.native-element:disabled{background:#F7F9FA;border-color:transparent;color:#AFBBC4;cursor:not-allowed}";

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.inputId = `core-input-${inputIds++}`;
        this.hasFocus = false;
        /**
         * Boolean attribute lets you specify that a form control should
         * have input focus when the page loads.
         */
        this.autofocus = false;
        /**
         * If `true`, a clear icon will appear in the input when there is a
         * value. Clicking it clears the input.
         */
        this.clearInput = false;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * How an <input> works varies considerably depending on the value of
         * its type attribute, hence the different types are covered in their
         * own separate reference pages. If this attribute is not specified,
         * the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
         */
        this.type = "text";
    }
    /**
     * Returns the native `<input>` element.
     */
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    render() {
        const labelId = `${this.inputId}-label`;
        const label = findItemLabel(this.el);
        if (label) {
            label.id = labelId;
        }
        return (h(Host, { "aria-disabled": this.disabled ? "true" : null, class: {
                "core-input": true,
                "has-focus": this.hasFocus,
            } }, h("div", { class: "input-inner" }, h("slot", { name: "input-left" }, this.icon ? (h("core-icon", { slot: "input-left", icon: this.icon })) : undefined), h("input", { class: "native-element", ref: (input) => (this.nativeInput = input), disabled: this.disabled, autoFocus: this.autofocus, placeholder: this.placeholder || "", required: this.required, type: this.type }), this.clearInput && !this.disabled && (h("button", { type: "button", class: "input-clear-icon", tabindex: "-1" })), h("slot", { name: "input-right" }))));
    }
    get el() { return getElement(this); }
};
let inputIds = 0;
Input.style = coreInputCss;

export { Input as core_input };
