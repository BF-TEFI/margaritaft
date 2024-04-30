<template>
  <div>
    <div class="introduction">
      <div class="item">
        <div class="slogan">
          <h1>Стильно</h1>
        </div>
      </div>
      <div class="item">
        <div class="slogan">
          <h1>Экзотично</h1>
        </div>
        <div class="slideshow">
          <div class="line">
            <div class="slidershow_wrap">
                <div class="vignette"><img src="~static/images/slide_show_01.jpg" alt=""></div>
                <div class="vignette"><img src="~static/images/slide_show_02.jpg" alt=""></div>
                <div class="vignette"><img src="~static/images/slide_show_03.jpg" alt=""></div>
                <div class="vignette"><img src="~static/images/slide_show_04.jpg" alt=""></div>
            </div>
            <div class="slidershow_wrap">
                <div class="vignette"><img src="~static/images/slide_show_01.jpg" alt=""></div>
                <div class="vignette"><img src="~static/images/slide_show_02.jpg" alt=""></div>
                <div class="vignette"><img src="~static/images/slide_show_03.jpg" alt=""></div>
                <div class="vignette"><img src="~static/images/slide_show_04.jpg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="slogan">
          <h1>Профессионально</h1>
        </div>
      </div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionComponent',
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
    var ob = new IntersectionObserver(
      (entries) => {
        if (window.innerWidth >= 1024) {
          entries.forEach((entry) => {
            var height = entry.intersectionRect.height
            var slogan = entry.target.querySelector('.slogan')
            var last = document.querySelector('.introduction .item:last-child')
            var speed = 200
            var opacity
            opacity = height / speed
            if (slogan) {
              if (height / speed >= 0.85) {
                opacity = 1
              }
              if (height / speed <= 0.25) {
                opacity = 0
              }
              if (entry.intersectionRect.top > 0) {
                slogan.style.cssText = `display: block`
                slogan.style.cssText = `opacity: ${opacity}`
              }
              
            }
            if (window.innerHeight > last.getBoundingClientRect().bottom) {
              opacity = last.getBoundingClientRect().top / speed - .5
              document.querySelectorAll('.slogan').forEach((i) => {
                i.style.cssText = `opacity: ${opacity}`
                if (opacity <= 0) {
                  i.style.cssText = `position: absolute`
                }
              })
              // document.querySelector('.introduction').style.cssText = `opacity: ${opacity}`
            }
        })
      }
    },
    {
      threshold: this.threholdSet
    }
  )


  document.querySelectorAll('.introduction .item').forEach((i) => ob.observe(i))
}
}
</script>

<style lang='sass' scoped>
.introduction
  width: 100%
  background: #000
  position: relative
  display: flex
  flex-wrap: wrap
  z-index: 4
  & .item
    flex: 0 0 100%
    height: 30vh
    color: #fff
  & .item:nth-child(1) > .slogan
    top: 31vh
  & .item:nth-child(2) > .slogan
    top: 46vh
  & .item:nth-child(3) > .slogan
    top: 61vh
.slogan
  position: fixed
  left: 10%
  font-size: 3.6rem
  text-transform: uppercase
  opacity: 0
  transform: scale(1, 2)
.slideshow
  width: 90%
  height: 40vh
  opacity: .4
  display: flex
  margin: 0 auto
  overflow: hidden
  & .line
    flex: 0 0 300%
    display: flex
    animation: slideshow 9s linear infinite
    & .slidershow_wrap
      justify-content: space-around
      display: flex
.vignette
  // flex: 0 0 20%
  width: 40%
  margin: 0 20px
  display: flex
  & img
    object-fit: contain
    width: 100%
  // box-shadow: inset 0 0 50px #000 inset 0 0 50px #000 inset 0 0 50px #000
@keyframes slideshow
  0%
    transform: translateX(0%) 
  100%
    transform: translateX(-50%)
@include small
  .introduction
    overflow: hidden
    height: 80vh
    position: relative
    &:nth-child(1) .item
      height: 29vh
  .slideshow
    & img
      object-fit: cover
  .slogan
    width: 100%
    // text-align: center
    position: absolute
    left: 0
    padding: 0 20px
    font-size: 6vw
    transform: scale(1, 3)
    opacity: 1
  .vignette
    margin: 0 10px
</style>
