import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31eeb7bc = () => interopDefault(import('../pages/gide.vue' /* webpackChunkName: "pages/gide" */))
const _c6ab1152 = () => interopDefault(import('../pages/packages/happy.vue' /* webpackChunkName: "pages/packages/happy" */))
const _14a5e36c = () => interopDefault(import('../pages/packages/hit.vue' /* webpackChunkName: "pages/packages/hit" */))
const _7861cc80 = () => interopDefault(import('../pages/packages/smart.vue' /* webpackChunkName: "pages/packages/smart" */))
const _3d8ac99e = () => interopDefault(import('../pages/packages/tour.vue' /* webpackChunkName: "pages/packages/tour" */))
const _3fc914c9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/gide",
    component: _31eeb7bc,
    meta: {"name":"GidePage","head":{"title":"Гайд по острову Маргарита ","meta":[{"hide":"description","name":"description","content":"Мы делаем сказочные фотосессии и фото-экскурсии на острове Маргарита в Венесуэле, чтобы вы привезли самые лучшие фотографии с отдыха и запомнили эту поездку на всю жизнь. Профессионально. Стильно. Экзотично. Прозрачный прайс"},{"hide":"keywords","name":"keywords","content":""}]}},
    name: "gide"
  }, {
    path: "/packages/happy",
    component: _c6ab1152,
    meta: {"name":"HappyPackPage"},
    name: "packages/happy"
  }, {
    path: "/packages/hit",
    component: _14a5e36c,
    meta: {"name":"HitPackPage"},
    name: "packages/hit"
  }, {
    path: "/packages/smart",
    component: _7861cc80,
    meta: {"name":"SmartPackPage"},
    name: "packages/smart"
  }, {
    path: "/packages/tour",
    component: _3d8ac99e,
    meta: {"name":"TourPackPage"},
    name: "packages/tour"
  }, {
    path: "/",
    component: _3fc914c9,
    meta: {"name":"IndexPage","head":{"title":"Фотосессии и фото-экскурсии на острове Маргарита ","meta":[{"hide":"description","name":"description","content":"Мы делаем сказочные фотосессии и фото-экскурсии на острове Маргарита в Венесуэле, чтобы вы привезли самые лучшие фотографии с отдыха и запомнили эту поездку на всю жизнь. Профессионально. Стильно. Экзотично. Прозрачный прайс"},{"hide":"keywords","name":"keywords","content":""}]}},
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
