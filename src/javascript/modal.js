const modal = document.getElementById('modal')
const modalButton = document.getElementById('modalButton')

if (modal && modalButton) {
  setTimeout(() => {
    modal.style.display = 'flex'

    modalButton.addEventListener('click', () => {
      modal.style.display = 'none'
    })
    modal.addEventListener('click', () => {
      modal.style.display = 'none'
    })
  }, 1000)
}
