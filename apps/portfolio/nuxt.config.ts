// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-lucide-icons',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt'
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
  },
  content: {
    navigation: {
      fields: ['author', 'publishedAt']
    },
    experimental: {
      search: { 
        indexed: true,
        options: {
          fields: ['title', 'content', 'titles'],
          storeFields: ['title', 'content', 'titles'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              content: 2,
              titles: 1
            }
          }
        }        
      }
    }
  },
  routeRules: {
    "/": { prerender: true },
    "/blog/**": { prerender: true },
  },
})