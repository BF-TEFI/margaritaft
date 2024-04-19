<template>
  <div>
    <div class="wrap">
      <div class="mesage">
        <p>{{msg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortMessageComponent',
  props: {
    msg: {
      type: String,
      require: false,
      default: 'Сообщение в одну строку'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang='sass' scoped>
.wrap
  width: 100%
  height: 40px
  background-color: #000
  display: flex
  justify-content: center
  align-items: center
  color: #fff
  @include small
    min-height: 40px
    padding: 3px
    text-align: center
</style>
