export { default as Author } from '../../components/author.vue'
export { default as Booking } from '../../components/booking.vue'
export { default as Card } from '../../components/card.vue'
export { default as Cards } from '../../components/cards.vue'
export { default as Feedback } from '../../components/feedback.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Introduction } from '../../components/introduction.vue'
export { default as Mainslider } from '../../components/mainslider.vue'
export { default as Modal } from '../../components/modal.vue'
export { default as New } from '../../components/new.vue'
export { default as PhotogalleryAd } from '../../components/photogallery-ad.vue'
export { default as Photogallery } from '../../components/photogallery.vue'
export { default as Quickmenu } from '../../components/quickmenu.vue'
export { default as Shortmessage } from '../../components/shortmessage.vue'
export { default as Tours } from '../../components/tours.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
