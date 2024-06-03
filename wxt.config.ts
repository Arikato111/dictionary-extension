import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";
import background from "./entrypoints/background";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    permissions: ["tabs", "contextMenus"],
  },
  vite: () => ({
    plugins: [react()],
  }),
});
