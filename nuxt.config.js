// Dynamic routes generate function
// const dynamicRoutes = async ({ $axios }) => {
//   const priceSlug = await $axios.get('https://api.groomingcrm.ru/api/price/').then((res) => {
//     const slug = res.data.filter((elem) => elem.COMMENT !== '')
//     return slug.map((price) => `/price/${price.SLUG}`)
//   })
//   const eventSlug = await $axios.get('https://api.groomingcrm.ru/api/event/').then((res) => res.data.map((event) => `/event/${event.slug}`))
//   const routes = priceSlug.concat(eventSlug)
//   return routes
// }
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Grooming CRM',
    titleTemplate: '%s - margaritaft.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '../assets/styles/index.sass',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css'
  ],

  styleResources: {
    sass: ['@/assets/styles/*.sass']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/observer.js', mode: 'client' },
    { src: '~plugins/showmodal.js', mode: 'client' }
    // { src: '~plugins/websocket.js', mode: 'client' },
    // { src: '~plugins/axios.js', mode: 'client' }
    // { src: '~plugins/socialauth.js', mode: 'client' },
    // { src: '~plugins/webpush.js', mode: 'client' },
    // { src: '~/plugins/youtube.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    // Equivalent to { path: '~/components' }
    '~/components'
  ],

  // loading: '~/components/loading.vue',
  loading: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    'nuxt-route-meta',
    '@nuxtjs/bulma',
    'cookie-universal-nuxt',
    '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'https://back.skyjumping.ru/'
    // baseURL: 'https://needapp.ru/',
    // proxy: true
  // },

  // proxy: {
  //   '/api': 'https://needapp.ru/'
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    },

    workbox: {
      autoRegister: false
    },

    icon: {
      source: '[srcDir] / [staticDir] / icon.png',
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      chunk: () => '[name].[id].[contenthash].js'
    },
    analyze: false
  },

  server: {
    // host: '0'
  },

  transition: {
    mode: 'in-out'
  },

  router: {
    // middleware: ['verify'],
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
}
