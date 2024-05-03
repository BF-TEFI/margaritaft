<template>
  <div>
    <div class="wrap">
      <div class="mesage">
        <p>{{msg}}
          <slot />
        </p>
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
  height: 45px
  background-color: #404040
  display: flex
  justify-content: center
  align-items: center
  color: #e0e0e0
  font-weight: 600
  @include small
    padding: 3px
    min-height: 45px
    text-align: center
p
  text-align: center
  white-space: pre-wrap
</style>
