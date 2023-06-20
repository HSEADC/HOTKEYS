import Cookies from 'js-cookie'

import {snackBar} from './snack_bar.js'

window.addEventListener('DOMContentLoaded', function () {
  const macKeyboard = document.querySelector('.A_KeyboardMac')
  const winKeyboard = document.querySelector('.A_KeyboardWin')

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
    snackBar('шортгады', 3000)
  })
})
