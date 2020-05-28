import { Config } from "@stencil/core";
import { less } from "@stencil/less";
import LessPluginAutoPrefix from "less-plugin-autoprefix";
import { generateJsonDocs } from "./src/customElementDocGenerator";

export const config: Config = {
  namespace: "components",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
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
