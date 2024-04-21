import { vitePluginVueact } from "vite-plugin-vueact"

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
      vitePluginVueact()
    ]
  }
})
