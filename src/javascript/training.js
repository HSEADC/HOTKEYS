import Cookies from 'js-cookie'

const value = document.getElementById('shortcut-value')
const description = document.getElementById('shortcut-description')
const counter = document.getElementById('shortcut-counter')
const isMac = navigator.userAgent.toLowerCase().includes('macintosh')

if (isMac) {
  Cookies.set('os', 'macos')
} else {
  Cookies.set('os', 'windows')
}
const osCookie = Cookies.get('os')
const isMacOS = osCookie === 'macos'

const shortcuts = isMacOS
  ? {
      'Cmd+F': 'Поиск по странице',
      'Cmd+A': 'Выделение всего текста',
      'Cmd+C': 'Копирование текста',
      'Cmd+V': 'Вставка текста',
      'Cmd+S': 'Сохранить изменения в окне',
      'Cmd+Shift+A': 'Что-то оно делает',
    }
  : {
      'Ctrl+F': 'Поиск по странице',
      'Ctrl+A': 'Выделение всего текста',
      'Ctrl+C': 'Копирование текста',
      'Ctrl+V': 'Вставка текста',
      'Ctrl+S': 'Сохранить изменения в окне',
      'Ctrl+Shift+A': 'Что-то оно делает',
    }

const shortcutKeys = Object.keys(shortcuts)
let shortcutIndex = 0
let correctCount = 0
value.innerHTML = shortcutKeys[shortcutIndex]
counter.innerHTML = `Уровень: ${correctCount}`

document.addEventListener('keydown', function (event) {
  event.preventDefault()

  if (event.key === 'Escape') {
    value.innerHTML = 'Все!'
    description.innerHTML = ''
    value.style.color = '#cbfb45'
  }

  const shortcutKey = shortcutKeys[shortcutIndex]
  const shortcutParts = shortcutKey.split('+')
  const isCorrectKey = isMac ? event.metaKey : event.ctrlKey
  if (isCorrectKey && event.shiftKey && event.key.toUpperCase() === shortcutParts[2]) {
    showShortcutInfo(shortcuts[shortcutKey], ++shortcutIndex)
    correctCount++
  } else if (isCorrectKey && !event.shiftKey && event.key.toUpperCase() === shortcutParts[1]) {
    showShortcutInfo(shortcuts[shortcutKey], ++shortcutIndex)
    correctCount++
  }
  counter.innerHTML = `Уровень: ${correctCount}`
})

function showShortcutInfo(shortcutInfo, shortcutIndex) {
  value.style.color = '#cbfb45'
  description.innerHTML = shortcutInfo

  setTimeout(() => {
    if (shortcutIndex < shortcutKeys.length) {
      value.innerHTML = shortcutKeys[shortcutIndex]
      description.innerHTML = ''
      value.style.color = 'white'
    } else {
      value.innerHTML = 'Все!'
      description.innerHTML = ''
      value.style.color = '#cbfb45'

      const restart = document.getElementById('reset-button')
      restart.style.display = 'block'
      counter.style.display = 'none'
      restart.onclick = () => {
        window.location.reload()
      }
    }
  }, 2000)
}
