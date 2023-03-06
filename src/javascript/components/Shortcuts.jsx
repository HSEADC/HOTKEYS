import React, {Component} from 'react'
import Cookies from 'js-cookie'
import hotkeys from './hotkeys.json'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faWindows, faApple} from '@fortawesome/free-brands-svg-icons'

import SelectInput from './SelectInput.jsx'

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
      <>
        <form className="S_SearchForm">
          <div className="C_SearchBar">
            <input className="M_SearchInput" type="text" placeholder="Поиск шорткатов" />
            <button className="M_SearchButton" type="submit">
              <FontAwesomeIcon icon={faSearch} className="A_ButtonIcon" />
            </button>
          </div>
          <SelectInput></SelectInput>
        </form>
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
            <button id="mac" onClick={this.handleMacosClick}>
              <FontAwesomeIcon icon={faApple} size="2x" style={{padding: '0.2rem 0.5rem'}} />
            </button>
            <button id="win" onClick={this.handleWindowsClick}>
              <FontAwesomeIcon icon={faWindows} size="2x" style={{padding: '0.2rem 0.5rem'}} />
            </button>
          </div>
        </div>
      </>
    )
  }
}
