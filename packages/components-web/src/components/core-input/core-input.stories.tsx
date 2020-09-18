import { boolean, select, text } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-input",
  title: "Buttons & Inputs/Input",
};

const icons = {
  "alert-circle": "alert-circle",
  "alert-triangle": "alert-triangle",
  "alert-triangle-solid": "alert-triangle-solid",
  anchor: "anchor",
  archive: "archive",
  "arrow-down": "arrow-down",
  "arrow-left": "arrow-left",
  "arrow-right": "arrow-right",
  "arrow-up": "arrow-up",
  bar: "bar",
  bell: "bell",
  "bell-mute": "bell-mute",
  "bell-solid": "bell-solid",
  bold: "bold",
  bullet: "bullet",
  calendar: "calendar",
  camera: "camera",
  "caret-down": "caret-down",
  "caret-left": "caret-left",
  "caret-right": "caret-right",
  "caret-up": "caret-up",
  cart: "cart",
  "cart-solid": "cart-solid",
  category: "category",
  check: "check",
  "check-sm": "check-sm",
  "chevron-down": "chevron-down",
  "chevron-left": "chevron-left",
  "chevron-right": "chevron-right",
  "chevron-up": "chevron-up",
  circle: "circle",
  clipboard: "clipboard",
  clock: "clock",
  columns: "columns",
  cross: "cross",
  "cross-sm": "cross-sm",
  disable: "disable",
  dot: "dot",
  download: "download",
  drag: "drag",
  "fast-forward": "fast-forward",
  "film-camera": "film-camera",
  gear: "gear",
  globe: "globe",
  grad: "grad",
  grid: "grid",
  heading: "heading",
  heart: "heart",
  help: "help",
  "help-solid": "help-solid",
  history: "history",
  hourglass: "hourglass",
  image: "image",
  info: "info",
  italic: "italic",
  layers: "layers",
  link: "link",
  "link-out": "link-out",
  "list-bullet": "list-bullet",
  "list-num": "list-num",
  logout: "logout",
  mail: "mail",
  "mail-solid": "mail-solid",
  menu: "menu",
  meter: "meter",
  minus: "minus",
  "minus-box": "minus-box",
  more: "more",
  paragraph: "paragraph",
  pen: "pen",
  pencil: "pencil",
  play: "play",
  plus: "plus",
  "plus-box": "plus-box",
  quote: "quote",
  redo: "redo",
  refresh: "refresh",
  rewind: "rewind",
  rows: "rows",
  search: "search",
  settings: "settings",
  speech: "speech",
  spinner: "spinner",
  star: "star",
  "star-half": "star-half",
  "star-solid": "star-solid",
  strike: "strike",
  toolbox: "toolbox",
  trash: "trash",
  underline: "underline",
  undo: "undo",
  user: "user",
  users: "users",
  video: "video",
};

const inputkeyboards = {
  none: "none",
  text: "text",
  tel: "tel",
  url: "url",
  email: "email",
  numeric: "numeric",
  decimal: "decimal",
  search: "search",
};

const labelDisplays = {
  block: "block",
  inline: "inline",
};

const labelPositions = {
  left: "left",
  right: "right",
};

export const PropStates = (): TemplateResult => {
  return html`
    <core-input
      autofocus=${boolean("Autofocus", false)}
      disabled=${boolean("Disabled", false)}
      error=${boolean("Error", false)}
      icon="${select("Icon", icons, "search")}"
      inputkeyboard=${select("Inputkeyboard", inputkeyboards, "none")}
      label=${text("Label", "Label")}
      labelDisplay=${select("Label Display", labelDisplays, "block")}
      labelPosition=${select("Label Position", labelPositions, "left")}
      placeholder=${text("Placeholder", "Placeholder")}
      required=${boolean("Required", false)}
      success=${boolean("Success", false)}
    ></core-input>
  `;
};

export const Default = (): TemplateResult => {
  return html`
    <core-input></core-input>
  `;
};

export const Search = (): TemplateResult => {
  return html`
    <core-input icon="search" placeholder="Search"></core-input>
  `;
};
