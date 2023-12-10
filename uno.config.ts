import { defineConfig, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      c: {
        pink: {
          400: '#f7b6d0b3',
          500: '#F26DAA',
          600: '#6c314cb3',
        },
        danger: {
          400: '#ffa7a7b3',
          500: '#f24441',
        },
      },
      dim: {
        50: '#D0D3D5',
        100: '#C3C5C7',
        200: '#B6B7B9',
        300: '#A9A9AB',
        400: '#9C9B9',
        500: '#8F8D8F',
        600: '#827F81',
        700: '#757173',
        800: '#686365',
        900: '#5B5557',
      },
    },
  },
  transformers: [transformerVariantGroup()],
})
