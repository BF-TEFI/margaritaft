<template>
  <div>
      <VueSlickCarousel v-bind="slickOptions">
        <slot></slot>
      </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderComponent',
  components: { VueSlickCarousel },
  props: {
    showLarge: {
      type: Number,
      default: 4,
      require: false
    },
    showMid: {
      type: Number,
      default: 2,
      require: false
    },
    showSmall: {
      type: Number,
      default: 1,
      require: false
    },
    torows: {
      type: Number,
      default: 1,
      require: false
    },
    todots: {
      type: Boolean,
      default: true,
      require: false
    },
    tostart: {
      type: Number,
      default: 0,
      require: false
    },
    toaccessibility: {
      type: Boolean,
      default: false,
      require: false
    }
  },
  data () {
    return {
      slickOptions: {
        accessibility: this.toaccessibility,
        // arrows: true,
        dots: this.todots,
        focusOnSelect: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: this.torows,
        slidesPerRow: 1,
        initialSlide: this.tostart,
        responsive: [
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: this.showLarge,
              arrows: true,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1123,
            settings: {
              slidesToShow: this.showMid,
              arrows: false,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: this.showSmall,
              arrows: false,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='sass' scoped>
// .slider-wrap
//   width: 100%
//   position: relative
.prev, .next
  width: 40px
  height: 40px
  display: flex
  opacity: 0.05
  cursor: pointer
  transition: .3s
  position: absolute
  top: calc(90% - 25px)
  // bottom: 0
  &:hover
    opacity: 0.5
.prev
  left: -20px
.next
  right: -20px
</style>
