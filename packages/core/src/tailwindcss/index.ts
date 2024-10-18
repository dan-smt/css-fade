import plugin from 'tailwindcss/plugin'
import postcss from "postcss"
import postcssJs from "postcss-js"
import getPreflightCss from '../utils/getPreflightCss.js'
import getSizes from '../utils/getSizes'

const root = postcss.parse(getPreflightCss())

// @ts-expect-error
const preflightCssInJs = postcssJs.objectify(root)

const pluginFade = plugin(
  function ({ matchUtilities, addUtilities, theme, addBase }) {

    function makeUtility(directions?: string): Parameters<typeof matchUtilities> {

      const base = 'fade'

      return [
        {
          [base + (directions ? `-${directions}` : '')]: (value: any) => {

            const sideSizes = getSizes(directions ?? '', value)
            const output = Object.entries(sideSizes).map(([side, size]) => [`--fade-w-${side}`, size])

            return {
              ...Object.fromEntries(output),
              mask: 'var(--fade-mask-template)'
            }

          }

        },
        {
          values,
          supportsNegativeValues: false
        }
      ]
    }

    // add preflights
    addBase(preflightCssInJs)

    addUtilities({
      '.fade-reset': {
        '--fade-o-from': '100%',
        '--fade-o-to': '0%',
        '--fade-w-r': '0rem',
        '--fade-w-l': '0rem',
        '--fade-w-t': '0rem',
        '--fade-w-b': '0rem',
      }
    })

    const values = theme('fade')
    const opacityValues = theme('fadeOpacity')

    // variations
    ;[
      'x', 'y', 'a', '', 
      'r', 'l', 't', 'b',
      'rr', 'rl', 'rt', 'rb',
      'lr', 'll', 'lt', 'lb',
      'tr', 'tl', 'tt', 'tb',
      'br', 'bl', 'bt', 'bb'
    ].forEach((d) => {
      matchUtilities(...makeUtility(d))
    })

    matchUtilities(
      { 'fade-from': (v) => ({ '--fade-o-from': v }) },
      { values: opacityValues }
    )

    matchUtilities(
      { 'fade-to': (v) => ({ '--fade-o-to': v }) },
      { values: opacityValues }
    )

  },
  {
    theme: {
      fadeOpacity: {
        ...Object.fromEntries(Array.from({ length: 21 }).map((_, i) => ([i*5, i*5 + '%'])))
      },
      fade: {
        0.5: '.125rem',
        1: '.25rem',
        1.5: '.375rem',
        2: '.5rem',
        2.5: '.625rem',
        3: '.75rem',
        3.5: '.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
    }
  }
)

export default pluginFade