import { BuildEntry, MkdistBuildEntry, defineBuildConfig } from "unbuild"

// https://github.com/unjs/unbuild/issues/398
function dualOutput( config: Omit<MkdistBuildEntry, "builder" | "format"> ): BuildEntry[] {
  return [
    {
      builder: "rollup",
      // format: "esm",
      ...config,
      // pattern: "**/*.{ts,js}",
    },
    // {
    //   builder: "mkdist",
    //   format: "cjs",
    //   ...config,
    //   pattern: "**/*.{ts,js}",
    // }
  ]
}

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