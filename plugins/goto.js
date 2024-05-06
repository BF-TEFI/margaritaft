export default (context, inject) => {
  const goto = (way) => {
    const el = document.querySelector(way)
    if (way) {
      window.scrollTo({ top: el.getBoundingClientRect().top+window.scrollY, behavior: 'smooth' })
    }
  }
  inject('goto', goto)
}