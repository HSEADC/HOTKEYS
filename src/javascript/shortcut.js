const shortcuts = ['ctrl+f', 'cmd+c', 'ctrl+v', 'cmd+a', 'cmd+z', 'cmd+s', 'cmd+d']
const textElement = document.querySelector('.M_ShortcutValue')

function changeText(idx) {
  if (textElement) {
    textElement.innerText = shortcuts[idx]
    const nextIdx = idx + 1 === shortcuts.length ? 0 : idx + 1
    setTimeout(() => changeText(nextIdx), 500)
  }
}

changeText(0)
