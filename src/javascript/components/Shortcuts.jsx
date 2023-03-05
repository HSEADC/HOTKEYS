import React, {Component} from 'react'
import Cookies from 'js-cookie'
import hotkeys from './hotkeys.json'

export default class Shortcuts extends Component {
  constructor(props) {
    super(props)
    const osCookie = Cookies.get('os')
    this.state = {
      system: osCookie === 'macos' ? 'macos' : 'windows',
    }
  }

  handleWindowsClick = () => {
    this.setState({system: 'windows'})
  }

  handleMacosClick = () => {
    this.setState({system: 'macos'})
  }

  render() {
    const {system} = this.state

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
        <div className="buttons">
          <button id="win" onClick={this.handleWindowsClick}>
            Windows
          </button>
          <button id="mac" onClick={this.handleMacosClick}>
            MacOS
          </button>
        </div>
      </div>
    )
  }
}
