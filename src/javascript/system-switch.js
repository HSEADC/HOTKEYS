const isMac = navigator.userAgent.toLowerCase().includes('macintosh')

const macEl = document.getElementById('S_Mac')
const winEl = document.getElementById('S_Win')

const macBtn = document.querySelector('#mac')
const winBtn = document.querySelector('#win')

const winVector = document.querySelector('.Q_WindowsVector')
const macVector = document.querySelector('.Q_MacosVector')

if (isMac && macEl) {
  macEl.style.display = 'block'
  macBtn.classList.add('_Active')
  macVector.style.fill = 'black'
} else if (winEl) {
  winEl.style.display = 'block'
  winBtn.classList.add('_Active')
  winVector.style.fill = 'black'
}

if (winBtn) {
  winBtn.addEventListener('click', () => {
    winEl.style.display = 'block'
    macEl.style.display = 'none'
    winBtn.classList.add('_Active')
    winVector.style.fill = 'black'
    macBtn.classList.remove('_Active')
    macVector.style.fill = 'white'
  })
}

if (macBtn) {
  macBtn.addEventListener('click', () => {
    macEl.style.display = 'block'
    winEl.style.display = 'none'
    macBtn.classList.add('_Active')
    macVector.style.fill = 'black'
    winBtn.classList.remove('_Active')
    winVector.style.fill = 'white'
  })
}
