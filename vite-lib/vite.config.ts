import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import * as path from "path";
import dts from "vite-plugin-dts";

const resolvedPath = path.resolve(__dirname, "./src/index.ts");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    dts({
      exclude: ["node_module/**", "./demo/**", "**/__tests__/**"],
      outputDir: "./dist",
    }),
  ],
  build: {
    rollupOptions: {
      external: ["preact", "preact/compat"],
      output: {
        globals: {
          preact: "preact",
          "preact/compat": "preact/compat",
        },
      },
    },
    lib: {
      entry: resolvedPath,
      name: "vite-lib",
    },
  },
});
