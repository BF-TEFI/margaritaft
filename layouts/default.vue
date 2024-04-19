<template>
  <div>
    <Modal/>
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'defaultLayout',
  head: {
    title: '',
    meta: [
      {
        hide: 'description',
        name: 'description',
        content: ''
      },
      {
        hide: 'keywords',
        name: 'keywords',
        content: ''
      }
    ]
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='sass' scoped>
</style>
