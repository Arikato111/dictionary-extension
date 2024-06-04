import { defineConfig } from "wxt";
import react from "@vitejs/plugin-react";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "The Cambridge Dictionary",
    description: "searching word in Cambridge dictionary",
    permissions: ["tabs", "contextMenus"],
    default_locale: "en",
    browser_specific_settings: {
      gecko: {
        id: "dictionary-extension@Arikato111",
      },
    },
  },
  vite: () => ({
    plugins: [react()],
  }),
});
