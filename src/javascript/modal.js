import Cookies from 'js-cookie'

const modal = document.getElementById('modal')
const modalButton = document.getElementById('modalButton')

const cookiesModal = Cookies.get('modal')

if (modal && modalButton) {
  if (!cookiesModal) {
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
