import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal')
  const modalButton = document.getElementById('modalButton')

  if (modal?.style && modalButton) {
    if (!Cookies.get('modal')) {
      Cookies.set('modal', true)

      setTimeout(() => {
        modal.style.display = 'flex'
      }, 1500)
    }

    function closeModal() {
      modal.style.display = 'none'
    }

    modalButton.addEventListener('click', closeModal)
    modal.addEventListener('click', closeModal)
  }
})
