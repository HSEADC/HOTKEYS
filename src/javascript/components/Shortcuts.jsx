import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Cookies from 'js-cookie'

import hotkeys from './hotkeys.json'

export default class Shortcuts extends Component {
  render() {
    const osCookie = Cookies.get('os')
    const system = osCookie === 'macos' ? 'macos' : 'windows'

    return (
      <div className="S_Shortcuts">
        {hotkeys.map((hotkey, index) => (
          <a href={hotkey.link} key={index}>
            <div className="M_ShortcutCard">
              <h1 className="A_CardName">
                <span className="Q_TextSelection">{hotkey.selected} </span>
                {hotkey.text}
              </h1>
              <h2 className="A_CardKey">{hotkey[system]}</h2>
            </div>
          </a>
        ))}
      </div>
    )
  }
}
