export default (context, inject) => {
  const modal = (modaltype, item) => {
    const source = { type: modaltype, item }
    const modal = document.querySelector('.modal')
    context.store.dispatch('get_modal', source).then(() => {
      modal.classList.add('is-active')
    })
  }
  inject('modal', modal)
}
