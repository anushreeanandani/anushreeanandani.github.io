// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://anushreeanandani.github.io',
  base: '/',
  output:'static',
  integrations: [icon()],
  prefetch: true,
});
