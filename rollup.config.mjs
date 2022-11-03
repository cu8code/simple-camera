import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/bundle.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/bundle.esm.js",
        format: "esm",
      },
      {
        name: "Calendar",
        file: "dist/bundle.js",
        format: "umd",
      },
    ],
    plugins: [
      typescript(),
      commonjs({
        include: "node_modules/**",
      }),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
    ],
  },
];
