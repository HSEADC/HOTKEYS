import Cookies from 'js-cookie'
import hotkeys from 'hotkeys-js'

const trainingButton = document.getElementById('TRAINING_BTN')
const trainingSelection = document.getElementById('TRAINING_SELECTION')

trainingButton.addEventListener('click', hideElements)

function hideElements() {
  const shortcutCards = document.getElementsByClassName('M_ShortcutCard')
  Array.from(shortcutCards).forEach((card) => {
    card.style.display = 'none'
  })

  trainingSelection.style.display = 'none'

  const system = Cookies.get('os')
  let shortcutTextArray

  if (system === 'macos') {
    const macosShortcuts = document.getElementsByClassName('Q_ShortcutMacos')
    shortcutTextArray = Array.from(macosShortcuts).map((shortcut) => shortcut.textContent)
    console.log(shortcutTextArray)
  } else {
    const windowsShortcuts = document.getElementsByClassName('Q_ShortcutWindows')
    shortcutTextArray = Array.from(windowsShortcuts).map((shortcut) => shortcut.textContent)
    console.log(shortcutTextArray)
  }

  shortcutTextArray.forEach((shortcutText) => {
    hotkeys(shortcutText, () => {
      console.log('Shortcut Pressed:', shortcutText)
      goToNextShortcut(shortcutTextArray.length)
    })
  })
}

function goToNextShortcut(totalShortcuts) {
  currentShortcutIndex++
  if (currentShortcutIndex < totalShortcuts) {
    console.log('Next Shortcut:', currentShortcutIndex + 1)
  } else {
    console.log('Training completed')
    hotkeys.unbind() // Unbind all shortcuts
  }
}

let currentShortcutIndex = -1 // Keeps track of the current shortcut index
