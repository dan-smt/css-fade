import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  entries: [
    {
      builder: 'rollup',
      input: './src/tailwindcss',
      outDir: './dist/tailwindcss',
      name: 'tailwindcss/index'
    },
    {
      builder: 'rollup',
      input: './src/unocss',
      outDir: './dist/unocss',
      name: 'unocss/index'
    },
    {
      builder: 'copy',
      input: './src/css',
      outDir: './dist/css'
    }
  ],
  declaration: true,
  externals: ['tailwindcss', 'postcss', 'postcss-js', 'unocss'],
  rollup: {
    inlineDependencies: true,
    emitCJS: true
  }
})