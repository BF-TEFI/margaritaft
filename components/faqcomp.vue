<template>
  <div class="cont">
    <div class="question" @click="show">
      <h4>{{ getObject.q }}</h4>
    </div>
    <div v-if="showA" class="answer">
      {{ getObject.a }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQComp',
  props: {
    getObject: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      showA: false
    }
  },
  methods: {
    show () {
      this.showA = (this.showA === false)
    }
  }
}
</script>

<style lang='sass' scoped>
.cont
  min-width: 3em
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  @include small
    width: 100%
    padding: 10px
.question
  height: auto
  cursor: pointer
  padding: 10px
  & h4
    margin: 0.5em
.answer
  width: 70%
  border-top: 1px solid #e0e0e0
  border-bottom: 1px solid #e0e0e0
  @include small
    width: 90%
</style>
