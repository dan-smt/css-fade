import { BuildEntry, MkdistBuildEntry, defineBuildConfig } from "unbuild"

// https://github.com/unjs/unbuild/issues/398
function dualOutput( config: Omit<MkdistBuildEntry, "builder" | "format"> ): BuildEntry[] {
  return [
    {
      builder: "mkdist",
      format: "esm",
      ...config,
      pattern: "**/*.{ts,js}",
    },
    {
      builder: "mkdist",
      format: "cjs",
      ...config,
      pattern: "**/*.{ts,js}",
    }
  ]
}

export default defineBuildConfig({
  entries: [
    ...dualOutput({
      input: './src/tailwindcss',
      outDir: './dist/tailwindcss'
    }),
    ...dualOutput({
      input: './src/unocss',
      outDir: './dist/unocss'
    }),
    ...dualOutput({
      input: './src/utils',
      outDir: './dist/utils'
    }),
    {
      builder: 'mkdist',
      input: './src/css',
      outDir: './dist/css'
    }
  ],
  declaration: true
})