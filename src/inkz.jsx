import React from 'react'
import {createRoot} from 'react-dom/client'

import InkzData from './javascript/components/inkz/InkzData.jsx'
import InkzForm from './javascript/components/inkz/InkzForm.jsx'

function rendeInkzPage() {
  const container = document.getElementById('reactInkz')

  if (container) {
    const root = createRoot(container)
    root.render(<InkzPage />)
  }
}

function InkzPage() {
  return (
    <div>
      <InkzForm />
      <InkzData />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', rendeInkzPage)
