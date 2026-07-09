import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en", "fr"],
    defaultLocale: "fr",
    preferredLocale: "fr",
    routing: {
      fallbackType: "rewrite"
    }
  },
  devToolbar: {
    enabled: false
  },
  site: 'https://fabienclaude.github.io',
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
