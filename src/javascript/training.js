const value = document.getElementById('shortcut-value')
const description = document.getElementById('shortcut-description')
const shortcuts = ['Ctrl+F', 'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+S']
const shortcutsMac = ['⌘Cmd+F', '⌘Cmd+A', '⌘Cmd+C', '⌘Cmd+V', '⌘Cmd+S']
const shortcutsUse = ['Поиск по странице', 'Выделение всего текста', 'Копирование текста', 'Вставка текста', 'Сохранить изменения в окне']

let shortcutIndex = 0
value.innerHTML = `${shortcuts[shortcutIndex]}`

document.addEventListener('keydown', function (event) {
  event.preventDefault()

  if (event.ctrlKey && event.key === 'f') {
    showShortcutInfo(shortcutsUse[0], ++shortcutIndex)
  } else if (event.ctrlKey && event.key === 'a') {
    showShortcutInfo(shortcutsUse[1], ++shortcutIndex)
  } else if (event.ctrlKey && event.key === 'c') {
    showShortcutInfo(shortcutsUse[2], ++shortcutIndex)
  } else if (event.ctrlKey && event.key === 'v') {
    showShortcutInfo(shortcutsUse[3], ++shortcutIndex)
  } else if (event.ctrlKey && event.key === 's') {
    showShortcutInfo(shortcutsUse[4], shortcuts.length)
  }
})

function showShortcutInfo(shortcutInfo, shortcutIndex) {
  value.style.color = '#cbfb45'
  description.innerHTML = shortcutInfo

  setTimeout(() => {
    if (shortcutIndex < shortcuts.length) {
      value.innerHTML = `${shortcuts[shortcutIndex]}`
      description.innerHTML = ``
      value.style.color = 'white'
    } else {
      value.innerHTML = `Все!`
      description.innerHTML = ``
      value.style.color = '#cbfb45'
    }
  }, 2000)
}
