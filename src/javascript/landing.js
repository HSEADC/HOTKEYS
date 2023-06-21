import Cookies from 'js-cookie'

import {snackBar} from './snack_bar.js'
import {animateKeyboard} from './_animateKeyboard.js'

import imageWin2 from '../images/index/index_win2.png'
import imageWin3 from '../images/index/index_win3.png'

import imageMac2 from '../images/index/index_mac2.png'
import imageMac3 from '../images/index/index_mac3.png'

window.addEventListener('DOMContentLoaded', function () {
  // system detection
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

  // bookmark call

  const bookmarkBtn = document.querySelector('#ADD_BOOKMARK')
  bookmarkBtn.addEventListener('click', function () {
    snackBar(`Добавь сайт в закладки, нажав <span class="A_SnackBarKey">${system === 'macos' ? 'CMD+D' : 'CTRL+D'}</span>`, 3000)
  })

  // keyboard animation

  if (system == 'macos') {
    animateKeyboard('#IMG_MAC', imageMac2, imageMac3)
  } else {
    animateKeyboard('#IMG_WIN', imageWin2, imageWin3)
  }
})
