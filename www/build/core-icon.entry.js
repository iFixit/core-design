import { c as getAssetPath, r as registerInstance, B as Build, h, H as Host, g as getElement } from './index-73cae565.js';

let CACHED_MAP;
const getIconMap = () => {
    if (typeof window === "undefined") {
        return new Map();
    }
    else {
        if (!CACHED_MAP) {
            const win = window;
            win.coreIcons = win.coreIcons || {};
            CACHED_MAP = win.coreIcons.map = win.coreIcons.map || new Map();
        }
        return CACHED_MAP;
    }
};
const addIcons = (icons) => {
    const map = getIconMap();
    Object.keys(icons).forEach((name) => map.set(name, icons[name]));
};
const getUrl = (i) => {
    let url = getSrc(i.src);
    if (url) {
        return url;
    }
    url = getName(i.name, i.icon);
    if (url) {
        return getNamedUrl(url);
    }
    if (i.icon) {
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
        url = getSrc(i.icon);
        if (url) {
            return url;
        }
    }
    return null;
};
const getNamedUrl = (iconName) => {
    const url = getIconMap().get(iconName);
    if (url) {
        return url;
    }
    return getAssetPath(`assets/core-icons/16/${iconName}.svg`);
};
const getName = (iconName, icon) => {
    if (!iconName && icon && !isSrc(icon)) {
        iconName = icon;
    }
    if (isStr(iconName)) {
        iconName = toLower(iconName);
    }
    if (!isStr(iconName) || iconName.trim() === "") {
        return null;
    }
    // only allow alpha characters and dash
    const invalidChars = iconName.replace(/[a-z]|-|\d/gi, "");
    if (invalidChars !== "") {
        return null;
    }
    return iconName;
};
const getSrc = (src) => {
    if (isStr(src)) {
        src = src.trim();
        if (isSrc(src)) {
            return src;
        }
    }
    return null;
};
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === "string";
const toLower = (val) => val.toLowerCase();

const validateContent = (svgContent) => {
    if (svgContent && typeof document !== "undefined") {
        const div = document.createElement("div");
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (let i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        const svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return "";
};
const isValid = (elm) => {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === "script") {
            return false;
        }
        for (let i = 0; i < elm.attributes.length; i++) {
            const val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().indexOf("on") === 0) {
                return false;
            }
        }
        for (let i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};

const ioniconContent = new Map();
const requests = new Map();
const getSvgContent = (url) => {
    // see if we already have a request for this url
    let req = requests.get(url);
    if (!req) {
        if (typeof fetch !== "undefined") {
            // we don't already have a request
            req = fetch(url).then((rsp) => {
                if (rsp.ok) {
                    return rsp.text().then((svgContent) => {
                        ioniconContent.set(url, validateContent(svgContent));
                    });
                }
                ioniconContent.set(url, "");
            });
            // cache for the same requests
            requests.set(url, req);
        }
        else {
            // set to empty for ssr scenarios and resolve promise
            ioniconContent.set(url, "");
            return Promise.resolve();
        }
    }
    return req;
};

const coreIconCss = ":host{-webkit-box-sizing:content-box;box-sizing:content-box;color:inherit;contain:strict;-ms-flex-item-align:center;align-self:center;fill:currentColor}:host(.core-icon--16){height:16px;min-width:16px;width:16px}:host(.core-icon--24){height:24px;width:24px}:host([slot=button-left]){margin-right:8px}:host([slot=button-right]){margin-left:8px}:host([slot=input-left]),:host([slot=input-right]){position:absolute;top:calc(50% - 8px)}:host([slot=input-left]){left:12px}:host([slot=input-right]){right:12px}:host([color=blue]){color:#1975F1}:host([color=green]){color:#33B464}:host([color=yellow]){color:#F9C03E}:host([color=red]){color:#F34E46}:host([color=white]){color:#FFFFFF}:host([color=black]){color:#11161A}:host([color=blue-light-4]){color:#EDF6FF}:host([color=blue-light-3]){color:#BDDCFF}:host([color=blue-light-2]){color:#77B5FF}:host([color=blue-light-1]){color:#3B95FF}:host([color=blue-dark-1]){color:#085FD9}:host([color=blue-dark-2]){color:#004AB3}:host([color=blue-dark-3]){color:#00368C}:host([color=blue-dark-4]){color:#002466}:host([color=green-light-4]){color:#E8FAEE}:host([color=green-light-3]){color:#B7ECC8}:host([color=green-light-2]){color:#89DCA5}:host([color=green-light-1]){color:#5DC984}:host([color=green-dark-1]){color:#269C55}:host([color=green-dark-2]){color:#1B8246}:host([color=green-dark-3]){color:#126637}:host([color=green-dark-4]){color:#0A4927}:host([color=yellow-light-4]){color:#FFF8E9}:host([color=yellow-light-3]){color:#FFE9B9}:host([color=yellow-light-2]){color:#FFDB8C}:host([color=yellow-light-1]){color:#FFCD63}:host([color=yellow-dark-1]){color:#D99B2E}:host([color=yellow-dark-2]){color:#B37820}:host([color=yellow-dark-3]){color:#8C5715}:host([color=yellow-dark-4]){color:#66390C}:host([color=red-light-4]){color:#FFEDED}:host([color=red-light-3]){color:#FFB8B3}:host([color=red-light-2]){color:#FF8B85}:host([color=red-light-1]){color:#FF6860}:host([color=red-dark-1]){color:#D93531}:host([color=red-dark-2]){color:#B3201F}:host([color=red-dark-3]){color:#8C1113}:host([color=red-dark-4]){color:#66070B}:host([color=gray-1]){color:#F7F9FA}:host([color=gray-2]){color:#E3E8ED}:host([color=gray-3]){color:#D2DADF}:host([color=gray-4]){color:#AFBBC4}:host([color=gray-5]){color:#828D96}:host([color=gray-6]){color:#525D66}:host([color=gray-7]){color:#39444D}:host([color=-gray-8]){color:#242C33}.core-icon--inner{height:inherit;width:inherit}";

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isVisible = false;
        /**
         * If enabled, core-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
        /**
         * The size of the icon.
         * Available options are: `"16"` and `"24"`.
         * Default, `16`.
         */
        this.size = "16";
    }
    connectedCallback() {
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, "80px", () => {
            this.isVisible = true;
            this.loadIcon();
        });
    }
    disconnectedCallback() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    waitUntilVisible(el, rootMargin, cb) {
        if (Build.isBrowser &&
            this.lazy &&
            typeof window !== "undefined" &&
            window.IntersectionObserver) {
            const io = (this.io = new window.IntersectionObserver((data) => {
                if (data[0].isIntersecting) {
                    io.disconnect();
                    this.io = undefined;
                    cb();
                }
            }, { rootMargin }));
            io.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    }
    loadIcon() {
        if (Build.isBrowser && this.isVisible) {
            const url = getUrl(this);
            if (url) {
                if (ioniconContent.has(url)) {
                    // sync if it's already loaded
                    this.svgContent = ioniconContent.get(url);
                }
                else {
                    // async if it hasn't been loaded
                    getSvgContent(url).then(() => (this.svgContent = ioniconContent.get(url)));
                }
            }
        }
        if (!this.ariaLabel) {
            const label = getName(this.name, this.icon);
            // user did not provide a label
            // come up with the label based on the icon name
            if (label) {
                this.ariaLabel = label.replace(/\-/g, " ");
            }
        }
    }
    render() {
        return (h(Host, { role: "img", class: {
                "core-icon": true,
                [`core-icon--${this.size}`]: !!this.size,
            } }, Build.isBrowser && this.svgContent ? (h("div", { class: "core-icon--inner", innerHTML: this.svgContent })) : (h("div", { class: "core-icon--inner" }))));
    }
    static get assetsDirs() { return ["assets/icons"]; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "name": ["loadIcon"],
        "src": ["loadIcon"],
        "icon": ["loadIcon"]
    }; }
};
Icon.style = coreIconCss;

export { Icon as core_icon };
