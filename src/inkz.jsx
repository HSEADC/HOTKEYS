import React from 'react'
import {createRoot} from 'react-dom/client'

import InkzPanel from './javascript/components/inkz/InkzPanel.jsx'
import InkzData from './javascript/components/inkz/InkzData.jsx'

function rendeInkzPage() {
  const container = document.getElementById('reactInkz')

  if (container) {
    const root = createRoot(container)
    root.render(<InkzPage />)
  }
}

function InkzPage() {
  return (
    <div className="space-y-20">
      <InkzPanel />
      <InkzData />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', rendeInkzPage)
