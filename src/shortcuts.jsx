import React from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import Shortcuts from './javascript/components/Shortcuts.jsx'

const pythonGenerated = document.getElementById('PYTHON_GENERATED')
if (pythonGenerated) {
  pythonGenerated.parentNode.removeChild(pythonGenerated)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactShortcuts')

  if (container) {
    const root = createRoot(container)
    root.render(<Shortcuts />)
  }
})
