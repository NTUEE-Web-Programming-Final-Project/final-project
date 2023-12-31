import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: {
        main: resolve(__dirname, "index.html"),
        // src: resolve(__dirname, "src/main.tsx"),
        // codegen: resolve(__dirname, "src/codegen/codegen.ts"),
      },
    },
  },
});
