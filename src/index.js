import './index.css'
import './javascript/modal.js'

import Cookies from 'js-cookie'

const isMac = navigator.userAgent.toLowerCase().includes('mac')
const osCookie = isMac ? 'macos' : 'windows'
Cookies.set('os', osCookie)
