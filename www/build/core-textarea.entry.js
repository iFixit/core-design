import { r as registerInstance, h, H as Host, g as getElement } from './index-73cae565.js';

const coreTextareaCss = ":host{display:-webkit-box;display:-ms-flexbox;display:flex;font:inherit}:host .native-element{border:1px solid #D2DADF;border-radius:4px;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:#242C33;font:inherit;outline:none;padding:12px 16px;-webkit-transition:-webkit-box-shadow 0.12s ease-in-out;transition:-webkit-box-shadow 0.12s ease-in-out;-o-transition:box-shadow 0.12s ease-in-out;transition:box-shadow 0.12s ease-in-out;transition:box-shadow 0.12s ease-in-out, -webkit-box-shadow 0.12s ease-in-out;width:inherit}:host .native-element::-webkit-input-placeholder{color:#AFBBC4}:host .native-element::-moz-placeholder{color:#AFBBC4}:host .native-element::-ms-input-placeholder{color:#AFBBC4}:host .native-element::placeholder{color:#AFBBC4}:host .native-element:focus,:host .native-element:active{border-color:#828D96;-webkit-box-shadow:0 0 0 3px rgba(59, 149, 255, 0.3);box-shadow:0 0 0 3px rgba(59, 149, 255, 0.3)}";

const Textarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hasFocus = false;
        /**
         * If `true`, the user cannot interact with the textarea.
         */
        this.disabled = false;
        /**
         * If `true`, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * The value of the textarea.
         */
        this.value = "";
    }
    /**
     * Returns the native `<textarea>` element used under the hood.
     */
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return this.value || "";
    }
    render() {
        const value = this.getValue();
        return (h(Host, { class: {
                "core-textarea": true,
            }, "aria-disabled": this.disabled ? "true" : null }, h("textarea", { class: "native-element", ref: (el) => (this.nativeInput = el), disabled: this.disabled, placeholder: this.placeholder || "", required: this.required, cols: this.cols, rows: this.rows }, value)));
    }
    get el() { return getElement(this); }
};
Textarea.style = coreTextareaCss;

export { Textarea as core_textarea };
