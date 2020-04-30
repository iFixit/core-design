import { r as registerInstance, h, H as Host, g as getElement } from './index-73cae565.js';

const coreLabelCss = ":host{-webkit-box-sizing:border-box;box-sizing:border-box;color:#828D96;display:-webkit-box;display:-ms-flexbox;display:flex;font:inherit}:host([disabled]) .native-element{color:rgba(130, 141, 150, 0.5);cursor:not-allowed}:host(.block){-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}:host(.block) .native-element{width:inherit}:host(.block) .label-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}:host(.block) slot[name=\"label-input\"]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:8px}:host(.block) .help-url{color:#D2DADF;-webkit-transition:color 0.12s ease-in-out;-o-transition:color 0.12s ease-in-out;transition:color 0.12s ease-in-out}:host(.block) .help-url:hover{color:#AFBBC4}";

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, the user cannot interact with the nested element (typically core-input).
         */
        this.disabled = false;
        /**
         * The display determines where and how the label behaves inside an item.
         */
        this.display = "block";
    }
    render() {
        const { display } = this;
        return (h(Host, { class: {
                "core-label": true,
                [display]: true,
            } }, h("label", { class: "native-element" }, h("div", { class: "label-inner" }, h("slot", { name: "label-left" }), h("slot", null), h("slot", { name: "label-right" }, this.helpurl ? (h("a", { class: "help-url", href: this.helpurl }, h("core-icon", { slot: "label-right", icon: "help-solid", color: "gray-3" }))) : undefined)), h("slot", { name: "label-input" }))));
    }
    get el() { return getElement(this); }
};
Button.style = coreLabelCss;

export { Button as core_label };
