const value = document.getElementById('shortcut-value')
const description = document.getElementById('shortcut-description')
const resetButton = document.getElementById('reset-button')
const counter = document.getElementById('shortcut-counter')
const shortcuts = {
  'Ctrl+F': 'Поиск по странице',
  'Ctrl+A': 'Выделение всего текста',
  'Ctrl+C': 'Копирование текста',
  'Ctrl+V': 'Вставка текста',
  'Ctrl+S': 'Сохранить изменения в окне',
  'Ctrl+Shift+A': 'Пример сочетания Ctrl+Shift+A',
}
const shortcutKeys = Object.keys(shortcuts)
let shortcutIndex = 0
let correctCount = 0
value.innerHTML = shortcutKeys[shortcutIndex]

document.addEventListener('keydown', function (event) {
  event.preventDefault()

  if (event.key === 'Escape') {
    value.innerHTML = 'Все!'
    description.innerHTML = ''
    value.style.color = '#cbfb45'
  }

  const shortcutKey = shortcutKeys[shortcutIndex]
  const shortcutParts = shortcutKey.split('+')
  if (event.ctrlKey && event.shiftKey && event.key.toUpperCase() === shortcutParts[2]) {
    showShortcutInfo(shortcuts[shortcutKey], ++shortcutIndex)
    correctCount++
  } else if (event.ctrlKey && !event.shiftKey && event.key.toUpperCase() === shortcutParts[1]) {
    showShortcutInfo(shortcuts[shortcutKey], ++shortcutIndex)
    correctCount++
  }
  counter.innerHTML = `Правильных ответов: ${correctCount}`
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
      value.innerHTML = `Все! Количество правильных сочетаний: ${correctCount}`
      description.innerHTML = ''
      value.style.color = '#cbfb45'
      resetButton.style.display = 'block'
    }
  }, 2000)
}

resetButton.addEventListener('click', function () {
  window.location.reload()
})
