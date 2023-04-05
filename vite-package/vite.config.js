import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es"],
    },
  },
  rollupOptions: {
    external: ["react"],
    output: {
      globals: {
        react: "react"
      }
    }
  },
});
