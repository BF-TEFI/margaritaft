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
  background: url('~static/images/2022-11-24 10-57-54(37).jpeg') center / cover no-repeat
  display: flex
  justify-content: center
  align-items: center
  & .text
    width: 80%
    color: #fff
    text-shadow: 1px 1px 1px #1a2036
    text-transform: uppercase
    text-align: center
    font-size: 1.7rem
    font-weight: 700
</style>
