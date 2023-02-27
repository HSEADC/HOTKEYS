const userAgent = navigator.userAgent.toLowerCase()
const isMac = /macintosh|mac os x/i.test(userAgent)

const macEl = document.getElementById('O_Mac')
const winEl = document.getElementById('O_Win')
let mySystem

const macBtn = document.querySelector('#mac')
const winBtn = document.querySelector('#win')

const winVector = document.querySelector('.Q_WindowsVector')
const macVector = document.querySelector('.Q_MacosVector')

if (isMac) {
  if (macEl) {
    macEl.style.display = 'block'
    mySystem = 'mac'
    macBtn.classList.add('_Active')
    macVector.style.fill = 'black'
  }
} else {
  if (winEl) {
    winEl.style.display = 'block'
    mySystem = 'win'
    winBtn.classList.add('_Active')
    winVector.style.fill = 'black'
  }
}

winBtn.addEventListener('click', () => {
  winEl.style.display = 'block'
  macEl.style.display = 'none'
  mySystem = 'win'
  winBtn.classList.add('_Active')
  winVector.style.fill = 'black'
  macBtn.classList.remove('_Active')
  macVector.style.fill = 'white'
})

macBtn.addEventListener('click', () => {
  macEl.style.display = 'block'
  winEl.style.display = 'none'
  mySystem = 'mac'
  macBtn.classList.add('_Active')
  macVector.style.fill = 'black'
  winBtn.classList.remove('_Active')
  winVector.style.fill = 'white'
})
