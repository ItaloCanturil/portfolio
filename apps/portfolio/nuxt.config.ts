// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  experimental: {
    inlineRouteRules: true
  },
  css: ['./assets/css/main.css'],
  runtimeConfig: {

    public: {
      GITHUB_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
    }
  },
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
    // database: {
    //   type: 'libsql',
    //   url: process.env.TURSO_CONNECTION_URL,
    //   authToken: process.env.TURSO_AUTH_TOKEN
    // },
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