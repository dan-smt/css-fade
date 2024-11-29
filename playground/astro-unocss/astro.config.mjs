import { defineConfig } from 'astro/config';
import UnocssAstroIntegration from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnocssAstroIntegration()
  ],
  devToolbar: {
    enabled: false
  }
});
