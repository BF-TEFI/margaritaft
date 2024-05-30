<template>
  <div>
    <div class="wrap">
      <div class="title orange">
        <h2>Частые вопросы</h2>
      </div>
      <div class="faq">
        <Faqcomp v-for="item in $store.state.faq" :key="item.q" :get-object="item" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FAQComponent'
  }
</script>

<style lang="sass" scoped>
.wrap
  width: 100%
  padding: 15px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  & .faq
    width: 90%
    border-radius: 15px
    border: 2px solid #e0e0e0
    background-color: #2a2a2a
    box-shadow: 0, 2px, 10px #000
    padding: 10px
    @include small
      width: 100%
</style>