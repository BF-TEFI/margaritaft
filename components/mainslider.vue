<template>
  <div>
    <div class="main">
      <div class="info__wrap">
        <div data-slide="01" class="item">
          <h1 class="">MARGARITA PHOTO TRIPS</h1>
          <div class="info">
            <p>Фотосессии на острове Маргарита и необычные путешествия по Венесуэле</p>
          </div>
        </div>
        <div data-slide="02" class="item">
          <!-- <div class="price">$170</div> -->
          <h1 class="">Фотосессия "Smart-пакет"</h1>
          <div class="info">
            <p>25 снимков в обработке
              10 роскошных пейзажей острова</p>
            <p>Локации: тайный пляж, маяк, антипиратская крепость, колониальный город. 
              От 1 до 3 участников</p>
          </div>
          <div class="button-wrap"><Nuxt-link :to="{path: 'packages/smart'}"><button>Подробнее</button></Nuxt-link></div>
        </div>
        <div data-slide="03" class="item">
          <!-- <div class="price">$210</div> -->
          <h1 class="">Фотосессия "Хит-пакет"</h1>
          <div class="info">
            <p>25 снимков в обработке
              До 3 образов
              10 роскошных пейзажей острова</p>
            <p>Локации: тайный пляж, маяк, антипиратская крепость, колониальный город.
              От 1 до 3 участников</p>
          </div>
          <div class="button-wrap"><Nuxt-link :to="{path: 'packages/hit'}"><button>Подробнее</button></Nuxt-link></div>
        </div>
        <div data-slide="04" class="item">
          <!-- <div class="price">$300</div> -->
          <h1 class="">Фотосессия
            "3 часа счастья"</h1>
          <div class="info">
            <p>60 снимков в обработке
              Летящие платья бесплатно
              10 роскошных пейзажей острова</p>
            <p>Локации: тайный пляж, маяк, антипиратская крепость, колониальный город.
              От 1 до 6 участников</p>
          </div>
          <div class="button-wrap"><Nuxt-link :to="{path: 'packages/happy'}"><button>Подробнее</button></Nuxt-link></div>
        </div>
        <div data-slide="05" class="item">
          <!-- <div class="price">$320</div> -->
          <h1 class="">"Фотосессия + 
            экскурсия по острову"</h1>
          <div class="info">
            <p>60 снимков в обработке
              Летящие платья бесплатно
              10 роскошных пейзажей острова</p>
            <p>Лродолжительность фото-экскурсии: 6 часов
              От 1 до 3 участников</p>
          </div>
          <div class="button-wrap"><Nuxt-link :to="{path: 'packages/tour'}"><button>Подробнее</button></Nuxt-link></div>
        </div>
      </div>
      <div id="slider" class="slider__wrap">
        <div data-slide="05" class="item">
          <img src="~static/images/slide_item_005.jpg" alt="">
        </div>
        <div data-slide="04" class="item">
          <img src="~static/images/slide_item_001.jpg" alt="">
        </div>
        <div data-slide="03" class="item">
          <img src="~static/images/slide_item_002.jpg" alt="">
        </div>
        <div data-slide="02" class="item">
          <img src="~static/images/slide_item_004.jpg" alt="">
        </div>
        <div data-slide="01" class="item">
          <img src="~static/images/slide_item_000.jpg" alt="">
        </div>
      </div>
      <div class="blackout"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReverseSliderComponent',
  props: {
  },
  data () {
    var threholdSet = []
    for (let i = 0; i <= 1.0; i += 0.005) {
      threholdSet.push(i)
    }
    return {
      threholdSet
    }
  },
  mounted () {
    var slider = document.querySelector('#slider')
    var blackout = document.querySelector('.main .blackout')
    var opacity
    var layer
    var sliderObserver = new IntersectionObserver(
      (entries) => {
        var blackout_start = window.innerHeight - blackout.getBoundingClientRect().bottom
        var blackout_end = 150
      // перелистование слайдов
        if (window.innerWidth >= 1024) {
          blackout.style.cssText = `opacity: 0; z-index: -1`
          if (slider.getBoundingClientRect().top === 0) {
            document.querySelectorAll('.slogan').forEach((i) => {
              i.style.cssText = `opacity: 0`
            })
            entries.forEach((entry) => {
              var scrl = entry.boundingClientRect.height - entry.boundingClientRect.bottom
              var sldr = document.querySelector(`#slider [data-slide="${entry.target.dataset.slide}"]`)
              if (entry.boundingClientRect.top <= 0) {
                sldr.style.cssText = `top:${scrl}px`
              }
            })
          }
          document.querySelectorAll('.info__wrap .item').forEach((i) => {
            if (i.getBoundingClientRect().top > 0) {
              document.querySelector(`#slider [data-slide="${i.dataset.slide}"]`).style.cssText = `top: 0`
            }
          })
          // Blackout
          if (blackout_start >= 1) {
            document.querySelector('#slider .item:nth-child(2)').style.cssText = `top: 100%`
            opacity = blackout_start / blackout_end
            layer = 3
          if (opacity >= 0.95) {
            opacity = 1
          }
          if (opacity <= 0.2) {
            opacity = 0
            layer = -1
          }
            blackout.style.cssText = `opacity: ${opacity}; z-index: ${layer}`
          }
        }
        },
        {
          threshold: this.threholdSet
        })
    document.querySelectorAll('.info__wrap .item').forEach((i) => sliderObserver.observe(i))
  },
  methods: {}
}
</script>

<style lang='sass' scoped>
.main
  display: flex
  justify-content: space-between
  padding: 0
  flex-wrap: nowrap
  position: relative
.info__wrap, .slider__wrap
  flex: 0 0 50%
  // padding-bottom: 10px
.info__wrap
  display: flex
  flex-direction: column
  & .item
    width: 100%
    height: 100vh
    display: flex
    padding: 50px
    flex-direction: column
    justify-content: center
    border-bottom: 1px solid #ccc
    &:last-child
      border-bottom: none
    & h1
      font-size: 3.4em
      line-height: 1
      margin: 1rem 0
      color: #fff
    & .price
      font-size: 2.8rem
      color: #ed6b3a
      font-weight: 700
      margin: 0
      padding: 0
      text-shadow: 0px 0px 1px #000
    & .info
      font-size: 1.5rem
      line-height: 1.2
      color: #e0e0e0
.slider__wrap
  height: 100vh
  position: sticky
  top: 0
  overflow: hidden
  & .item
    position: absolute
    width: 100%
    height: 100vh
    top: 0
    left: 0
    display: flex
    & img
      object-fit: cover
      object-position: top
      width: 100%
@include small
  .main
    flex-direction: column
  .slider__wrap
    width: 100%
    height: auto
    position: absolute
    top: 0
    left: 0
    display: flex
    flex-direction: column-reverse
    z-index: 1
    & .item
      position: static
  .info__wrap
    z-index: 2
    text-align: center
    background-color: rgba(0, 0, 0, .3)
    & .item
      padding: 10px
      &:nth-child(1)
        position: relative
        & .info
          position: absolute
          bottom: 5%
    & .item h1
      color: #fff
      font-size: 10vw
      text-shadow: 0px 0px 3px #1b2338
    & p
      color: #fff
      font-size: 1.3rem
      font-weight: 600
    & .item .price
      font-weight: 700
      text-shadow: 0px 0px 3px #000
    & button
      width: 80%
      color: #1b2338
      border-color: #000
      text-transform: uppercase
      background: #ed6b3a
      &:hover
        color: #fff
</style>
