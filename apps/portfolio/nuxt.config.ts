// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    '@nuxtjs/i18n'
  ],
  lucide: {
    namePrefix: 'Icon'
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', language: 'en-US'},
      { code: 'pt', language: 'pt-BR'},
    ],
    defaultLocale: 'pt'
  }
})