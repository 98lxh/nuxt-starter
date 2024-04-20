import { transformTSX } from "./plugins/vite/transformTSX";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt'
  ],
  css: ["~/assets/css/globals.css"],
  vite: {
    plugins: [
      transformTSX()
    ],
  }
})
