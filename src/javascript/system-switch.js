import Cookies from 'js-cookie'

export function systemSwitch() {
  const isMac = navigator.userAgent.toLowerCase().includes('macintosh')

  //*? shortcut pages
  const macEl = document.getElementById('S_Mac')
  const winEl = document.getElementById('S_Win')
  const macBtn = document.querySelector('#mac')
  const winBtn = document.querySelector('#win')

  //*? selection pages
  const macShortcut = document.querySelectorAll('.Q_ShortcutWindows')
  const winShortcut = document.querySelectorAll('.Q_ShortcutMacos')

  if (isMac) {
    Cookies.set('os', 'macos')
  } else {
    Cookies.set('os', 'windows')
  }

  const osCookie = Cookies.get('os')

  const setActiveButton = (activeBtn, inactiveBtn) => {
    activeBtn.classList.add('_Active')
    inactiveBtn.classList.remove('_Active')
  }

  const showElement = (elementToShow, elementToHide) => {
    if (elementToShow && elementToHide) {
      elementToShow.style.display = 'block'
      elementToHide.style.display = 'none'
    }
  }

  if (osCookie === 'macos') {
    showElement(macEl, winEl)
    setActiveButton(macBtn, winBtn)

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach((el) => (el.style.display = 'block'))
      macShortcut.forEach((el) => (el.style.display = 'none'))
    }
  } else {
    showElement(winEl, macEl)
    setActiveButton(winBtn, macBtn)

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach((el) => (el.style.display = 'none'))
      macShortcut.forEach((el) => (el.style.display = 'block'))
    }
  }

  winBtn?.addEventListener('click', () => {
    showElement(winEl, macEl)
    setActiveButton(winBtn, macBtn)

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach((el) => (el.style.display = 'none'))
      macShortcut.forEach((el) => (el.style.display = 'block'))
    }
  })

  macBtn?.addEventListener('click', () => {
    showElement(macEl, winEl)
    setActiveButton(macBtn, winBtn)

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach((el) => (el.style.display = 'block'))
      macShortcut.forEach((el) => (el.style.display = 'none'))
    }
  })
}
