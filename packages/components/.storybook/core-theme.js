import { create } from "@storybook/theming";

export const coreTheme = create({
  base: "light",

  colorPrimary: "#16161d",
  colorSecondary: "#1975F1",

  // UI
  appBg: "#f8f8fc",
  appContentBg: "white",
  appBorderColor: "#AFBBC4",
  appBorderRadius: 4,

  // Typography
  fontBase:
    "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
  fontCode: "Jetbrains Mono, monospace",

  // Text colors
  textColor: "#242C33",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#242C33",
  barSelectedColor: "#1975F1",
  barBg: "white",

  // Form colors
  inputBg: "white",
  inputBorder: "#AFBBC4",
  inputTextColor: "#242C33",
  inputBorderRadius: 4,

  // Branding
  brandTitle: "Core Design",
  brandUrl: "https://core-ds-components.netlify.app/",
});
