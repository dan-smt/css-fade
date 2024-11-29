# css-fade
css-fade fades out one or multiple sides of html elements it's applied to, including all nested elements; using the css mask property.

Works in TailwindCSS, UnoCSS, and vanilla CSS.

<br>

<p>
  <img src="https://raw.githubusercontent.com/dan-smt/css-fade/main/packages/core/assets/examples.png" style="width:100%;" />
</p>

## Usage with TailwindCSS & UnoCSS

### Directions & sizing
Usage with UnoCSS, and TailwindCSS are the same, the only difference is TailwindCSS values are strict while UnoCSS values aren't. TailwindCSS values are the same values you'll find on spacing properties.

```html

<!-- Set fade towards a single direction -->
<div class="fade-b-24" ></div>

<!-- Set fade towards 2 directions -->
<div class="fade-x-24" ></div>

<!-- Set fade towards all directions -->
<div class="fade-12" ></div>

<!-- Set fade towards multiple directions -->
<div class="fade-x-24 fade-y-12" ></div>
<div class="fade-t-12 fade-r-6" ></div>

<!-- Kitchen sink, yes multiple classes can be applied on one element -->
<div class="fade-tl-12 fade-b-4" ></div>

<!-- Using relative (%) values -->
<div class="fade-x-[30%]" ></div>

```

### Fading between different values
Use `fade-from-<0-100>` and  `fade-to-<0-100>` to set the opacity from which the fade starts from, and ends at. the *from* value is the center, the *to* value are the edges.

```html

<div class="fade-b-24 fade-to-80"></div>

```

## Installation Guides

- TailwindCSS
- UnoCSS
- CSS

### Installing The Unified Package
css-fade comes in a single unified package for all frameworks.

```sh

pnpm add css-fade
npm install css-fade
yarn install css-fade

```

### TailwindCSS

After installing the unified `css-fade` package, add css-fade to your `tailwind.config.*`:

```js
// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */

// import pluginFade from 'css-fade/tailwindcss' // <=== you may also choose to import it

export default {
  plugins: [
    require('css-fade/tailwindcss') // <=== add using require
    // pluginFade // <===== or import it
  ],
}

```

### UnoCSS

After installing the unified `css-fade` package, add css-fade to your `uno.config.*`:

```ts
// uno.config.ts

import presetFade from "css-fade/unocss" // <=== import

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

### CSS

You may use css-fade in CSS by importing the base CSS, or by copying over the core css.

#### Importing base CSS

After installing the unified `css-fade` package, import `css-fade/css` into your entry file.

```ts
// /src/main.ts
import 'css-fade/css' // <==== import base css

```

#### Copying CSS

You can find the base CSS for css-fade in `/packages/core/src/css/index.css` in this repository, copy and paste the CSS in a global context in your project.

## Limitations

Even though you can fade on 2 dimensions (vertically & horizontally) it's not recommended to do so with this library in most cases as ugly lines may appear. Due to the way positioning & sizing works in css backgrounds which we're using to generate the mask templates dynamically we had to choose between two appraoches,

- Approach 1: code named BurningPaper (find implementation in playground/astro-css/src/components/BurningPaper.astro )
  This approach gives us smooth transitions between dimensions, and allows us to add extra utility classes for improved gradient smoothing but does not allow relative (%) values to be used.

- Approach 2: code named RadicalRabbit (find implementation in playground/astro-css/src/components/RadicalRabbit.astro )
  This approach is a little more janky with transitions between dimensions, and although improvements are possible, does not allow easy improvements to the gradient smoothing.

In vast majority of cases likely usage will be in one dimension, and being able to set a % based fade will be handy, so this package primarily uses Approach 2.

You can find comparison between the 2 approaches at playground/astro-css/src/pages/approaches.astro.

## TODO:

- Make property animatable: [mdn @property](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) when [caniuse css mask](https://caniuse.com/?search=mask) & [caniuse @property](https://caniuse.com/?search=%40property) are at similar adoption.
