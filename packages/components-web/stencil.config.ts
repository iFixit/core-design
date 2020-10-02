import { Config } from "@stencil/core";
import { less } from "@stencil/less";
import LessPluginAutoPrefix from "less-plugin-autoprefix";
import { generateJsonDocs } from "./src/utils/customElementDocGenerator";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "core-design",
  globalStyle: "./src/assets/style/style-guide.less",
  taskQueue: "async",
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "@core-design/components-web",
      proxiesFile: "../components-react/src/generated/core-design.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [{ src: "assets", dest: "../assets" }],
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
      copy: [{ src: "favicon.svg" }],
    },
  ],
  plugins: [
    less({
      injectGlobalPaths: ["./src/assets/style/global.less"],
      plugins: [
        new LessPluginAutoPrefix({
          browsers: ["last 3 versions"],
        }),
      ],
    }),
  ],
};
