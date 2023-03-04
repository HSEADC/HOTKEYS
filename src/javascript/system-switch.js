document.addEventListener('DOMContentLoaded', () => {
  const isMac = navigator.userAgent.toLowerCase().includes('macintosh')

  const macEl = document.getElementById('S_Mac')
  const winEl = document.getElementById('S_Win')

  const macBtn = document.querySelector('#mac')
  const winBtn = document.querySelector('#win')

  const winVector = document.querySelector('.Q_WindowsVector')
  const macVector = document.querySelector('.Q_MacosVector')

  if (isMac) {
    if (macEl) macEl.style.display = 'block'
    macBtn.classList.add('_Active')
    macVector.style.fill = 'black'
  } else {
    if (winEl) winEl.style.display = 'block'
    winBtn.classList.add('_Active')
    winVector.style.fill = 'black'
  }

  winBtn?.addEventListener('click', () => {
    if (macEl && winEl) {
      winEl.style.display = 'block'
      macEl.style.display = 'none'
    }
    winBtn.classList.toggle('_Active')
    winVector.style.fill = 'black'
    macBtn.classList.toggle('_Active')
    macVector.style.fill = 'white'
  })

  macBtn?.addEventListener('click', () => {
    if (macEl && winEl) {
      macEl.style.display = 'block'
      winEl.style.display = 'none'
    }
    macBtn.classList.toggle('_Active')
    macVector.style.fill = 'black'
    winBtn.classList.toggle('_Active')
    winVector.style.fill = 'white'
  })
})
