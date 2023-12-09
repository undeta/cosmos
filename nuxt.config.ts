import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'],
  css: [resolve(__dirname, './assets/reset.css')],
})
