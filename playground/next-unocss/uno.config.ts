import presetFade from "css-fade/unocss"

import {
  defineConfig,
  presetWind,
  transformerVariantGroup,
  transformerDirectives
} from "unocss"

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|css)($|\?)/,
        // include js/ts files
        "app/**/*.{js,ts}",
      ],
    },
  },
  presets: [
    presetWind(),
    presetFade(),
  ],
  transformers: [
    transformerVariantGroup(), 
    transformerDirectives()
  ]
})
