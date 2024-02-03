import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [tailwind(), vue(), react(), partytown()],
});