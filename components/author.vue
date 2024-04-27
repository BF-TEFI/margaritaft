<template>
  <div>
    <div class="wrap">
      <div class="text">
        <p>Мы также можем предложить вам роскошный ретро-автомобиль для максимально Карибского антуража на ваших снимках. </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthorComponent',
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.wrap
  width: 100%
  height: 100vh
  background: url('~static/images/car02.jpg') center / cover no-repeat rgba(255, 255, 255, .5)
  background-blend-mode: screen
  display: flex
  justify-content: center
  align-items: center
  & .text
    width: 80%
    color: #1a2036
    text-shadow: 1px 1px 1px #fff
    text-transform: uppercase
    text-align: center
    font-size: 2.1rem
    font-weight: 700
    @include small
      font-size: 1.5rem
</style>
