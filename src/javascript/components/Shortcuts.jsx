import React, {Component} from 'react'
import Cookies from 'js-cookie'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import Select from 'react-select'
import {colorStyles, green, black, lightBlack} from './SelectStyle'

import hotkeys from './hotkeys.json'

export default class Shortcuts extends Component {
  constructor(props) {
    super(props)
    const osCookie = Cookies.get('os')
    this.state = {
      system: osCookie === 'macos' ? 'macos' : 'windows',
      selectedProgramOption: null,
      selectedMainOption: null,
    }
  }

  handleWindowsClick = (event) => {
    event.preventDefault()
    this.setState({system: 'windows'})
    document.getElementById('mac').classList.remove('active')
    document.getElementById('win').classList.add('active')
  }

  handleMacosClick = (event) => {
    event.preventDefault()
    this.setState({system: 'macos'})
    document.getElementById('win').classList.remove('active')
    document.getElementById('mac').classList.add('active')
  }

  render() {
    const {system, selectedProgramOption, selectedMainOption} = this.state

    const programOptions = [
      {value: 'system', label: 'Система'},
      {value: 'ms-office', label: 'Microsoft Office'},
      {value: 'photoshop', label: 'Adobe Photoshop'},
      {value: 'vs-code', label: 'VS Code'},
    ]

    const mainOptions = [
      {value: 'popular', label: 'Популярные'},
      {value: 'useful', label: 'Самые полезные'},
      {value: 'simple', label: 'Сначала простые'},
      {value: 'complex', label: 'Сначала сложные'},
    ]

    const filteredHotkeys = hotkeys.filter((hotkey) => {
      if (selectedProgramOption && hotkey.target !== selectedProgramOption.value) {
        return false
      }
      if (selectedMainOption) {
        if (hotkey[selectedMainOption.value] !== true) {
          return false
        }
      }
      return true
    })

    const handleProgramChange = (selectedProgramOption) => {
      this.setState({selectedProgramOption})
    }

    const handleMainChange = (selectedMainOption) => {
      this.setState({selectedMainOption})
    }

    return (
      <>
        <form className="S_SearchForm">
          <div className="C_SearchBar">
            <input className="M_SearchInput" type="text" placeholder="Поиск шорткатов" />
            <button className="M_SearchButton" type="submit">
              <FontAwesomeIcon icon={faSearch} className="A_ButtonIcon" />
            </button>
          </div>
          <div className="S_Filters">
            <div className="C_SelectBar">
              <Select options={programOptions} onChange={handleProgramChange} styles={colorStyles} placeholder="Все программы" />
              <Select options={mainOptions} onChange={handleMainChange} styles={colorStyles} placeholder="Сортировка" />
            </div>
            <div className="O_SystemSwitch Filter">
              <div className="C_SwitchItems">
                <button id="mac" className={system === 'macos' ? 'M_MacosItem _Active' : 'M_MacosItem'} onClick={this.handleMacosClick}>
                  <svg className="A_MacosSVG" xmlns="http://www.w3.org/2000/svg" width={19} height={23} viewBox="0 0 19 23" fill="none">
                    <path className="Q_MacosVector" fillRule="evenodd" d="M14.09 0h-.163c-1.224.162-2.502.888-3.199 1.704-.751.875-1.371 1.998-1.262 3.596 1.635.129 2.646-.717 3.384-1.588.753-.878 1.372-2.09 1.24-3.712Zm4.786 16.927v-.046c-1.6-.76-2.88-2.048-3.058-4.25-.2-2.426.97-3.846 2.451-4.788-.767-1.2-2.01-1.977-3.76-2.242-1.345-.202-2.39.18-3.43.56l-.258.094a8.914 8.914 0 0 0-.28.11c-.29.116-.578.232-.867.24-.441.014-.902-.182-1.31-.355-.112-.048-.22-.094-.324-.134-.502-.19-1.074-.382-1.635-.469-1.308-.2-2.483.248-3.337.773C1.449 7.408.231 9.446.125 11.953v1.029c.25 3.502 1.597 6.24 3.339 8.358.59.717 1.402 1.513 2.407 1.659h.466c.585-.083 1.07-.27 1.551-.455.644-.249 1.28-.494 2.138-.48.704.012 1.284.237 1.86.461.582.226 1.159.45 1.852.45 1.52 0 2.404-1.223 3.115-2.207l.108-.15c.8-1.107 1.456-2.3 1.915-3.691Z" clipRule="evenodd" />
                  </svg>
                </button>
                <button id="win" className={system === 'windows' ? 'M_WindowsItem _Active' : 'M_WindowsItem'} onClick={this.handleWindowsClick}>
                  <svg className="A_WindowsSVG" xmlns="http://www.w3.org/2000/svg" width={23} height={22} viewBox="0 0 23 22" fill="none">
                    <path className="Q_WindowsVector" d="M11.045 1.727A862.493 862.493 0 0 1 22.935 0c.002 3.476 0 6.949.002 10.425-3.963.015-7.927.075-11.892.087-.003-2.93-.003-5.858 0-8.785ZM.992 3.129c2.98-.46 5.974-.857 8.967-1.232.003 2.883.003 5.763.005 8.646-2.99-.003-5.981.042-8.972.035v-7.45Zm0 8.356c2.989-.01 5.976.038 8.965.033 0 2.89.007 5.78.002 8.67-2.985-.442-5.976-.83-8.967-1.234v-7.469Zm10.035.116h11.907c.005 3.465 0 6.93 0 10.399a856.508 856.508 0 0 0-11.89-1.681c-.004-2.905-.012-5.81-.017-8.718Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="S_Shortcuts">
          {filteredHotkeys.map(
            (
              hotkey,
              index, // use the filtered hotkeys array to render the hotkeys
            ) => (
              <a href={hotkey.link} key={index}>
                <div className="M_ShortcutCard">
                  <h1 className="A_CardName">
                    <span className="Q_TextSelection">{hotkey.selected} </span>
                    {hotkey.text}
                  </h1>
                  <h2 className="A_CardKey">{hotkey[system]}</h2>
                </div>
              </a>
            ),
          )}
        </div>
      </>
    )
  }
}
