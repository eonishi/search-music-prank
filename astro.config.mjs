import { defineConfig } from "astro/config";
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), htmx(), react()],
  //adapter: vercel()
  adapter: netlify(),
});
