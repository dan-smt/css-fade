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
  rules: [
    [
      "bg-effect-lighting",
      {
        "mask-image": "radial-gradient(rgba(0, 0, 0, .27), transparent 70%)"
      }
    ],
  ],
  presets: [
    presetWind(),
    presetFade(),
  ],
  transformers: [
    transformerVariantGroup(), 
    transformerDirectives()
  ]
})
