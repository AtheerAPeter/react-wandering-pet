import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy-assets";

export default [
  {
    input: `src/index.ts`,
    plugins: [
      esbuild(),
      typescript({ tsconfig: "./tsconfig.json" }),
      external(),
      resolve(),
      terser(),
      copy({
        assets: ["src/assets"],
      }),
    ],
    output: [
      {
        file: `dist/index.js`,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
  },
  {
    input: `src/index.ts`,
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: "esm",
    },
  },
];

// export default [
//   {
//     input: "./src/index.ts",
//     output: [
//       {
//         file: "dist/index.js",
//         format: "cjs",
//       },
//       {
//         file: "dist/index.es.js",
//         format: "es",
//         exports: "named",
//       },
//       {
//         file: "index.d.ts",
//         format: "es",
//       },
//     ],
//     plugins: [
//       babel({
//         exclude: "node_modules/**",
//         presets: ["@babel/preset-react"],
//       }),
//       external(),
//       resolve(),
//       terser(),
//       typescript(),
//       esbuild(),
//       dts(),
//     ],
//   },
// ];
