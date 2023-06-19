import Cookies from 'js-cookie'

window.addEventListener('DOMContentLoaded', function () {
  const macKeyboard = document.querySelector('.A_KeyboardMac')
  const winKeyboard = document.querySelector('.A_KeyboardWin')

  const isMac = navigator.userAgent.toLowerCase().includes('macintosh')
  const cookiesSystem = Cookies.get('system')

  const showElement = (elementToShow, elementToHide) => {
    elementToShow.style.display = 'block'
    elementToHide.style.display = 'none'
  }

  if (!cookiesSystem) {
    const system = isMac ? 'macos' : 'windows'
    Cookies.set('system', system)
    showElement(macKeyboard, winKeyboard)
  } else {
    showElement(winKeyboard, macKeyboard)
  }
})
