import { Config } from "@stencil/core";
import { less } from "@stencil/less";
import LessPluginAutoPrefix from "less-plugin-autoprefix";

export const config: Config = {
  namespace: "core-design",
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
      type: "www",
      serviceWorker: null,
      copy: [
        {
          src: "../node_modules/@core-ds/icons/icons",
          dest: "build/assets/core-icons",
        },
      ],
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
