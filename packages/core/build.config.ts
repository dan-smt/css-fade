import { BuildEntry, MkdistBuildEntry, defineBuildConfig } from "unbuild";

function dualOutput(
  config: Omit<MkdistBuildEntry, "builder" | "format">
): BuildEntry[] {
  return [
    {
      builder: "mkdist",
      format: "esm",
      ...config,
      pattern: "**/*.{js,jsx,ts,tsx}",
    },
    {
      builder: "mkdist",
      format: "cjs",
      ...config,
      pattern: "**/*.{js,jsx,ts,tsx}",
    }
  ];
}

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
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
  // Generates .d.ts declaration file
  declaration: true
})