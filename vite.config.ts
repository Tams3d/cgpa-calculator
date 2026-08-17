import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import reactScan from "@react-scan/vite-plugin-react-scan";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(), ...(command === "serve" ? [reactScan()] : [])],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
          if (id.includes("node_modules/@base-ui")) {
            return "base-ui";
          }
          if (id.includes("node_modules/@heroicons")) {
            return "icons";
          }
        },
      },
    },
  },
}));
