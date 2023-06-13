import './index.css'

import {modal} from './javascript/modal'
import {onScroll} from './javascript/on-scroll'
import {systemSwitch} from './javascript/system-switch'

window.addEventListener('DOMContentLoaded', function () {
  modal()
  systemSwitch()

  //   if (window.location.pathname === '/styleguide.html') {
  onScroll()
  //   }
})
