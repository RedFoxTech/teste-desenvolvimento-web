export default {
  head: {
    title: 'Pokedesc',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: [{ src: '@/plugins/dragscroll.js', ssr: false }],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/toast'],
  axios: {
    baseURL: process.env.API_BASE_URL,
  },
  build: {},
  styleResources: {
    scss: ['~/assets/scss/index.scss'],
  },
}
