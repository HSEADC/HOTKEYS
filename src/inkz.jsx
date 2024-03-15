import React from 'react'
import {createRoot} from 'react-dom/client'
import Inkz from './javascript/components/Inkz.jsx'

function rendeInkzPage() {
  const container = document.getElementById('reactInkz')

  if (container) {
    const root = createRoot(container)
    root.render(<Inkz />)
  }
}

document.addEventListener('DOMContentLoaded', rendeInkzPage)
