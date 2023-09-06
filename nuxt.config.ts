// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxthq/ui', 'magic-regexp/nuxt', '@nuxt/image', '@pinia/nuxt'],
  pinia: {
    autoImports: ['storeToRefs', 'defineStore'],
  },
  nitro: {
    // Development Storage
    devStorage: {
      db: {
        driver: 'fs',
        base: './data/db',
      },
    },
  },
  imports: {
    dirs: ['stores', 'data'],
  },
  runtimeConfig: {
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    ADMIN_EMAILS: process.env.ADMIN_EMAILS,
    public: {
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
      TESTING_USERNAME: process.env.TESTING_USERNAME,
      TESTING_PASSWORD: process.env.TESTING_PASSWORD,
      TEST_MODE: process.env.TEST_MODE,
    },
  },
})
