import { Config } from "@stencil/core";
import { less } from "@stencil/less";
import LessPluginAutoPrefix from "less-plugin-autoprefix";
import { generateJsonDocs } from "./src/utils/customElementDocGenerator";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "components",
  globalStyle: "src/assets/less/global.css",
  taskQueue: "async",
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@core-design/components",
      proxiesFile: "../components-react/src/generated/components.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [{ src: "assets" }],
    },
    {
      type: "docs-readme",
      strict: true,
    },
    {
      type: "custom",
      generator: generateJsonDocs,
      name: "custom-element-docs",
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  plugins: [
    less({
      plugins: [
        new LessPluginAutoPrefix({
          browsers: ["last 3 versions"],
        }),
      ],
    }),
  ],
};
