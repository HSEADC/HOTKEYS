import Cookies from 'js-cookie'

const macEl = document.getElementById('S_Mac')
const winEl = document.getElementById('S_Win')
const macBtn = document.querySelector('#mac')
const winBtn = document.querySelector('#win')
const macShortcut = document.querySelectorAll('.Q_ShortcutWindows')
const winShortcut = document.querySelectorAll('.Q_ShortcutMacos')

const isMac = navigator.userAgent.toLowerCase().includes('macintosh')
const cookiesSystem = Cookies.get('system')

const setActiveButton = (activeBtn, inactiveBtn) => {
  activeBtn.classList.add('_Active')
  inactiveBtn.classList.remove('_Active')
}

const showElement = (elementToShow, elementToHide) => {
  elementToShow.style.display = 'block'
  elementToHide.style.display = 'none'
}

const setSystemAndElements = (system) => {
  if (system === 'macos') {
    showElement(macEl, winEl)
    setActiveButton(macBtn, winBtn)
    winShortcut.forEach((el) => (el.style.display = 'none'))
    macShortcut.forEach((el) => (el.style.display = 'block'))
  } else {
    showElement(winEl, macEl)
    setActiveButton(winBtn, macBtn)
    winShortcut.forEach((el) => (el.style.display = 'block'))
    macShortcut.forEach((el) => (el.style.display = 'none'))
  }
}

const setKeyboard = (elementToShow, elementToHide) => {
  elementToShow.style.borderRadius = '21px'
  elementToHide.style.borderRadius = '0px'
}

const handleButtonClick = (system) => {
  setSystemAndElements(system)
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const macKeyboard = macEl.querySelector('.O_Keyboard')
    const winKeyboard = winEl.querySelector('.O_Keyboard')

    setKeyboard(macKeyboard, winKeyboard)
  }
}

if (!cookiesSystem) {
  const system = isMac ? 'macos' : 'windows'
  Cookies.set('system', system)

  handleButtonClick(system)
} else {
  setSystemAndElements(cookiesSystem)
}

winBtn?.addEventListener('click', () => {
  handleButtonClick('windows')
})

macBtn?.addEventListener('click', () => {
  handleButtonClick('macos')
})
