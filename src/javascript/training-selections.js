import Cookies from 'js-cookie'
import hotkeys from 'hotkeys-js'

const trainingButton = document.querySelector('#TRAINING_BTN')
const shortcutsContainer = document.querySelector('.S_Shortcuts')
const trainingContainer = document.querySelector('.O_Training')
const shortcutContent = document.querySelector('.Q_TextSelection').textContent.trim()
console.log('🚀 ~ file: training-selections.js:8 ~ shortcutContent:', shortcutContent)

const macosShortcuts = document.querySelectorAll('.Q_ShortcutMacos')
const windowsShortcuts = document.querySelectorAll('.Q_ShortcutWindows')
const shortcutText = document.querySelector('#SHORTCUT_TEXT')
const shortcutDescription = document.querySelector('#SHORTCUT_DSC')
const shortcutResult = document.querySelector('#SHORTCUT_RESULT')

let currentShortcutIndex = 0

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey || event.altKey || event.shiftKey) {
    event.preventDefault()
  }
})

trainingButton.addEventListener('click', trainingSelections)

function trainingSelections() {
  shortcutsContainer.style.display = 'none'
  trainingContainer.style.display = 'grid'

  const system = Cookies.get('os')
  const shortcutTextArray = Array.from(system === 'macos' ? macosShortcuts : windowsShortcuts).map((shortcut) => shortcut.textContent)

  console.log(shortcutTextArray)

  playLevel(shortcutTextArray)
}

function playLevel(shortcutTextArray) {
  const requiredShortcut = shortcutTextArray[currentShortcutIndex]
  shortcutText.textContent = requiredShortcut

  hotkeys(shortcutContent.toLowerCase(), handleShortcutPress)

  function handleShortcutPress(event, handler) {
    const pressedShortcut = handler.key.toLowerCase()

    if (pressedShortcut === shortcutContent.toLowerCase()) {
      shortcutDescription.textContent = shortcutContent

      shortcutResult.textContent = 'Correct shortcut!'
      setTimeout(() => {
        shortcutResult.textContent = ''
      }, 1500)
      currentShortcutIndex++
      hotkeys.unbind(shortcutContent.toLowerCase(), handleShortcutPress)

      if (currentShortcutIndex === shortcutTextArray.length) {
        finishTraining()
      } else {
        setTimeout(() => {
          playLevel(shortcutTextArray)
        }, 500)
      }
    } else {
      shortcutResult.textContent = 'Incorrect shortcut!'
    }
  }
}

function finishTraining() {
  shortcutText.textContent = 'Finish training!'
  shortcutText.style.color = '#cbfb45;'

  setTimeout(() => {
    location.reload()
  }, 2000)
}
