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
  background-color: #1a1a1a
  top: 0
  width: 100%
  padding: 5px 15px
  cursor: pointer
  color: #e0e0e0
  z-index: 10
  &:hover
    color: #FF7F50
    text-decoration: none
  &:focus
    background-color: #e8e8e8
</style>
