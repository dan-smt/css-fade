/** @type {import('tailwindcss').Config} */
// import pluginFade from 'css-fade/tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('css-fade/tailwindcss')
	],
}
