import Cookies from 'js-cookie'

window.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal')
  const modalButton = document.getElementById('modalButton')

  const cookiesModal = Cookies.get('modal')

  if (modal && !cookiesModal) {
    Cookies.set('modal', true)

    setTimeout(() => {
      modal.style.display = 'flex'
    }, 5000)

    function closeModal() {
      modal.style.display = 'none'
    }

    modalButton.addEventListener('click', closeModal)
    modal.addEventListener('click', closeModal)
  }
})
