import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "./index.js",
    external: ["react", "react-proptypes"],
    output: [
      {
        file: "dist/index.js",
        format: "es",
        sourcemap: true
      }
    ],
    plugins: [
      babel({
        babelrc: false,
        presets: [["env", { modules: false }], "react"],
        plugins: ["transform-class-properties", "transform-object-rest-spread"],
        exclude: ["node_modules/**"]
      }),
      resolve(),
      commonjs(),
    ]
  }
];
