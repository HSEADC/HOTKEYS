const userAgent = navigator.userAgent.toLowerCase()
const isMac = /macintosh|mac os x/i.test(userAgent)

const macEl = document.getElementById('O_Mac')
const winEl = document.getElementById('O_Win')
let mySystem

if (isMac) {
  if (macEl) {
    macEl.style.display = 'block'
    mySystem = 'mac'
  }
} else {
  if (winEl) {
    winEl.style.display = 'block'
    mySystem = 'win'
  }
}

const macBtn = document.querySelector('#mac')
const winBtn = document.querySelector('#win')

winBtn.addEventListener('click', () => {
  winEl.style.display = 'block'
  macEl.style.display = 'none'
})

macBtn.addEventListener('click', () => {
  macEl.style.display = 'block'
  winEl.style.display = 'none'
})
