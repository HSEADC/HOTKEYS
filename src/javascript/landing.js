import Cookies from 'js-cookie'

import {snackBar} from './snack_bar.js'

window.addEventListener('DOMContentLoaded', function () {
  const macKeyboard = document.querySelector('#IMG_MAC')
  const winKeyboard = document.querySelector('#IMG_WIN')

  const system = Cookies.get('os')

  const showElement = (elementToShow, elementToHide) => {
    elementToShow.style.display = 'block'
    elementToHide.style.display = 'none'
  }

  if (system == 'macos') {
    showElement(macKeyboard, winKeyboard)
  } else {
    showElement(winKeyboard, macKeyboard)
  }

  const bookmarkBtn = document.querySelector('#ADD_BOOKMARK')
  bookmarkBtn.addEventListener('click', function () {
    snackBar(`Чтобы добавить, нажми <span class="A_SnackBarKey">${system === 'macos' ? 'CMD+D' : 'CTRL+D'}</span>`, 3000)
  })
})
