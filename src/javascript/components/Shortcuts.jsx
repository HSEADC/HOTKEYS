import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import hotkeys from './hotkeys.json'

export default class Shortcuts extends Component {
  render() {
    return (
      <div className="S_Shortcuts">
        {hotkeys.map((hotkey, index) => (
          <a href="{hotkey.link}" key={index}>
            <div className="M_ShortcutCard">
              <h1 className="A_CardName">
                <span className="Q_TextSelection">{hotkey.selected} </span>
                {hotkey.text}
              </h1>
              <h2 className="A_CardKey">{hotkey.windows}</h2>
            </div>
          </a>
        ))}
      </div>
    )
  }
}
