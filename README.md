# FadeCSS
Advanced fade effects in css made reasonably usable, in TailwindCSS, UnoCSS, and CSS. Brought to you by the [designers & devs] @ https://withnull.com. 

FadeCSS fades out any part of your 

## Usage with TailwindCSS & UnoCSS

### Directions & sizing
Usage with UnoCSS, and TailwindCSS are the same, the only difference is TailwindCSS values are strict while UnoCSS values aren't. TailwindCSS values are the same values you'll find on spacing properties.

```html

<!-- Set fade towards a single direction -->
<div class="fade-b-24" ></div>

<!-- Set fade towards a 2 directions -->
<div class="fade-x-24" ></div>

<!-- Set fade towards all directions -->
<div class="fade-12" ></div>

<!-- Set fade towards multiple directions -->
<div class="fade-x-24 fade-y-12" ></div>
<div class="fade-t-12 fade-r-6" ></div>

<!-- Kitchen sink, yes multiple classes can be applied on one element -->
<div class="fade-tl-12 fade-b-4" ></div>

```

### Using relative (%) values versus absolutes
Because the fade effect is a css *mask* using *linear & radial gradients as mask images*, it's not possible to use % values relative to the element itself while sizing the fade effect, however it is possible to use the css container query api & an additional wrapping html element to use % like values.

*cqw = 1% of container width, cqh = 1% of container height*

```html

<div class="container-query" >
  <div class="fade-x-[20cqw]" >

  </div>
</div>

<style>

  /* where container-query has at least the following css: */
  .container-query {
    container-type: inline-size;
  }

</style>

```

### Smoothing the fade
You may additionally use the `fade-smooth` class to make your fade effect look smoother.

```html

<div class="fade-x-12 fade-smooth" ></div>

```

### Fading between different values
Use `fade-from-<0-100>` and  `fade-to-<0-100>` to set the opacity from which the fade starts from, and ends at. the *from* value is the center, the *to* value are the edges.

```html

<div class="fade-b-24 fade-to-80"></div>

```


## More

- Using relative (%) values instead absolute values
- Examples
- Problems this solves compared to a basic overlay
- Internals rundown

## Installation Guides

- TailwindCSS
- UnoCSS
- CSS

## Installing The Unified Package
Fadecss comes in a single unified package for all frameworks.

```sh

pnpm add fadecss
npm install fadecss
yarn install fadecss

```

## TailwindCSS

After installing the unified `fadecss` package, add fadecss to your `tailwind.config.mjs`:

```js
// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */

// import pluginFade from 'fadecss/tailwindcss' // <=== you may also choose to import it

export default {
	plugins: [
		require('fadecss/tailwindcss') // <=== add using require
    // pluginFade // <===== or import it
	],
}

```

## UnoCSS

After installing the unified `fadecss` package, add fadecss to your `uno.config.ts`:

```ts
// uno.config.ts

import presetFade from "fadecss/unocss" // <=== import

import {
  defineConfig,
  presetWind,
} from "unocss"

export default defineConfig({
  presets: [
    presetWind(),
    presetFade() // <=== pass in as preset
  ],
})

```

## CSS

You may use fadecss in CSS by importing the base CSS, or by copying over the core css.

### Importing base CSS

After installing the unified `fadecss` package, import `fadecss/css` into your entry file.

```ts
// /src/main.ts
import 'fadecss/css' // <==== import base css

```

### Copying CSS

You can find the base CSS for fadecss in `/packages/core/src/css/index.css` in this repository, copy and paste the CSS in a global context in your project.

