import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import getSizes from '../utils/getSizes'
import getPreflightCss from '../utils/getPreflightCss'

const preflightCss = getPreflightCss()

function presetFade(): Preset<Theme> {
  return {
    name: 'unocss-preset-fade',
    preflights: [
      {
        getCSS: () => preflightCss.toString()
      },
    ],
    rules: [
      [
        /^fade-?([rltb]{1,2}|[xya])?-(.+)$/,
        ([_, d, s]) => {

          if(!s) return {}

          const matchedCustomSize = [...s.matchAll(/\[(.*)\]/g)][0]?.[1]

          if(
            !matchedCustomSize // is NOT custom value
            && isNaN(Number(s)) // is NOT number
          ) return []

          const sideSizes = getSizes(d, s)

          const output = Object.entries(sideSizes).map(([side, size]) => [`--fade-w-${side}`, matchedCustomSize ?? `${(Number(size) / 4)}rem`])
  
          return [
            ...output,
            ['mask', 'var(--fade-mask-template)']
          ]
  
        }
      ],
      [
        /^fade-?(from|to)-(\d{1,3})$/,
        ([_, d, s]) => {

          const size = Number(s)
          if(size > 100) return []

          return [
            [`--fade-o-${d}`, `${size}%`]
          ]

        }
      ]
    ]
  }
};

export default presetFade;