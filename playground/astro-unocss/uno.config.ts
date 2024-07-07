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
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "src/**/*.{js,ts}",
        "consts.ts"
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
