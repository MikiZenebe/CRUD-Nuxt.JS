// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //Server config variable
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
});
