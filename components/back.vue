<template>
  <div class="back">
    <p @click="toBack">
    &#8592; Назад
    </p>
  </div>
</template>

<script>
export default {
  name: 'BackComponent',
  data () {
    return {}
  },
  methods: {
    toBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='sass' scoped>
.back
  position: sticky
  position: -webkit-sticky
  background-color: #e8e8e8
  top: 0
  width: 100%
  padding: 5px 15px
  cursor: pointer
  color: #777
  z-index: 10
  &:hover
    color: #f88c02
    text-decoration: none
  &:focus
    background-color: #e8e8e8
</style>
