import { Config } from "@stencil/core";
import { generateJsonDocs } from "./src/utils/customElementDocGenerator";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "core-design",
  globalStyle: "./src/assets/style/style-guide.css",
  taskQueue: "async",
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@core-design/components-web",
      proxiesFile: "../components-react/src/generated/core-design.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        { src: "assets", dest: "../assets" }
      ],
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
      copy: [
        { src: "favicon.svg" }
      ],
    },
  ],
};
