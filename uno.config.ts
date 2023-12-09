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
    },
  },
  transformers: [transformerVariantGroup()],
})
