import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', () => {
  const macEl = document.getElementById('S_Mac')
  const winEl = document.getElementById('S_Win')
  const macBtn = document.querySelector('#mac')
  const winBtn = document.querySelector('#win')

  const macShortcut = document.querySelectorAll('.Q_ShortcutWindows')
  const winShortcut = document.querySelectorAll('.Q_ShortcutMacos')

  const system = Cookies.get('os')

  const toggleDisplay = (showElement, hideElement) => {
    showElement.style.display = 'block'
    hideElement.style.display = 'none'
  }

  const toggleActiveClass = (activateBtn, deactivateBtn) => {
    activateBtn.classList.add('_Active')
    deactivateBtn.classList.remove('_Active')
  }

  function toggleMac() {
    if (macEl && winEl) {
      toggleDisplay(macEl, winEl)
    }

    toggleActiveClass(macBtn, winBtn)

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach((el) => (el.style.display = 'block'))
      macShortcut.forEach((el) => (el.style.display = 'none'))
    }
  }

  function toggleWin() {
    if (macEl && winEl) {
      toggleDisplay(winEl, macEl)
    }
    toggleActiveClass(winBtn, macBtn)

    if (winShortcut.length > 0 && macShortcut.length > 0) {
      winShortcut.forEach((el) => (el.style.display = 'none'))
      macShortcut.forEach((el) => (el.style.display = 'block'))
    }
  }

  if (system == 'macos') {
    toggleMac()
  } else {
    toggleWin()
  }

  macBtn?.addEventListener('click', () => {
    toggleMac()
  })

  winBtn?.addEventListener('click', () => {
    toggleWin()
  })
})
