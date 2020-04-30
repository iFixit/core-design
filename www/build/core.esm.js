import { p as patchBrowser, b as bootstrapLazy } from './index-73cae565.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["core-input",[[1,"core-input",{"autofocus":[4],"clearInput":[4,"clear-input"],"disabled":[4],"icon":[1],"inputkeyboard":[1],"name":[1],"placeholder":[1],"required":[4],"size":[513],"type":[513],"hasFocus":[32],"getInputElement":[64]}]]],["core-label",[[1,"core-label",{"disabled":[516],"display":[1],"helpurl":[1]}]]],["core-button",[[1,"core-button",{"disabled":[516],"display":[1],"download":[1],"elementType":[1025,"element-type"],"href":[1],"loading":[513],"radius":[1],"rel":[1],"size":[1],"status":[1],"target":[1],"type":[1],"variation":[1],"width":[1]}]]],["core-textarea",[[1,"core-textarea",{"cols":[2],"disabled":[4],"placeholder":[1],"required":[4],"rows":[2],"value":[1025],"hasFocus":[32],"getInputElement":[64]}]]],["core-icon",[[1,"core-icon",{"ariaLabel":[1537,"aria-label"],"color":[1],"icon":[8],"lazy":[4],"name":[1],"size":[1],"src":[1],"svgContent":[32],"isVisible":[32]}]]]], options);
});
