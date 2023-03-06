import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', () => {
  const isMac = navigator.userAgent.toLowerCase().includes('macintosh')

  const macEl = document.getElementById('S_Mac')
  const winEl = document.getElementById('S_Win')
  const macBtn = document.querySelector('#mac')
  const winBtn = document.querySelector('#win')

  if (isMac) {
    Cookies.set('os', 'macos')
  } else {
    Cookies.set('os', 'windows')
  }

  const osCookie = Cookies.get('os')

  if (osCookie === 'macos') {
  } else {
  }

  if (osCookie === 'macos') {
    if (macEl) macEl.style.display = 'block'
    if (macBtn) {
      macBtn.classList.add('_Active')
    }
  } else {
    if (winEl) winEl.style.display = 'block'
    if (winBtn) {
      winBtn.classList.add('_Active')
    }
  }

  winBtn?.addEventListener('click', () => {
    if (macEl && winEl) {
      winEl.style.display = 'block'
      macEl.style.display = 'none'
    }
    winBtn.classList.toggle('_Active')
    macBtn.classList.toggle('_Active')
  })

  macBtn?.addEventListener('click', () => {
    if (macEl && winEl) {
      macEl.style.display = 'block'
      winEl.style.display = 'none'
    }
    macBtn.classList.toggle('_Active')
    winBtn.classList.toggle('_Active')
  })
})
