import Cookies from 'js-cookie'

const modal = document.getElementById('modal')
const modalButton = document.getElementById('modalButton')

if (modal?.style && modalButton) {
  if (!Cookies.get('modal')) {
    Cookies.set('modal', true)
    setTimeout(() => {
      modal.style.display = 'flex'
    }, 1500)
  }

  modalButton.addEventListener('click', () => {
    modal.style.display = 'none'
  })
  modal.addEventListener('click', () => {
    modal.style.display = 'none'
  })
}
