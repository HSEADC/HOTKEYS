import React, {Component} from 'react'
import Select, {components} from 'react-select'

import Cookies from 'js-cookie'

import Logo from './Logo.jsx'
import {selectStyles} from './selectStyles'
import TriangleDown from '../../images/triangle.svg'

import hotkeys from '../../lib/data/hotkeys.json'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
export default class Shortcuts extends Component {
  constructor(props) {
    super(props)
    this.winButtonRef = React.createRef()
    this.macButtonRef = React.createRef()
  }

  state = {
    system: Cookies.get('os') === 'macos' ? 'macos' : 'windows',
    selectedProgramOption: null,
    selectedMainOption: null,
    systemSelected: false,
    searchQuery: '',
  }

  //* [windows button] switch system on click and add active class
  handleWindowsClick = () => {
    this.setState({system: 'windows', systemSelected: true})
    this.macButtonRef.current.classList.remove('active')
    this.winButtonRef.current.classList.add('active')
  }

  //* [macos button] switch system on click and add active class
  handleMacosClick = () => {
    this.setState({system: 'macos', systemSelected: true})
    this.winButtonRef.current.classList.remove('active')
    this.macButtonRef.current.classList.add('active')
  }

  //* [reset button] reset search filters on click
  handleReset = () => {
    this.setState({
      selectedProgramOption: null,
      selectedMainOption: null,
      // system: Cookies.get('os') === 'macos' ? 'macos' : 'windows',
      searchQuery: '',
    })
  }

  render() {
    const {system, selectedProgramOption, selectedMainOption, searchQuery} = this.state // destructure search query state

    //* set custom icon resetButton
    const DropdownIndicator = (props) => {
      return (
        <components.DropdownIndicator {...props}>
          <img src={TriangleDown} alt="Dropdown Indicator" className="A_SelectIcon" />
        </components.DropdownIndicator>
      )
    }

    //? [Все программы] select program options
    const programOptions = [
      {value: 'system', label: 'Система'},
      {value: 'browser', label: 'Браузер'},
      {value: 'vs-code', label: 'VS Code'},
      {value: 'figma', label: 'Figma'},
    ]

    //? [Сортировка] select main options
    const mainOptions = [
      {value: 'popular', label: 'Популярные'},
      {value: 'useful', label: 'Самые полезные'},
      {value: 'simple', label: 'Самые простые'},
      {value: 'complex', label: 'Самые сложные'},
    ]

    //* [Все программы] apply select program option and reRender {hotkeys}
    const handleProgramChange = (selectedProgramOption) => {
      this.setState({selectedProgramOption})
    }

    //* [Все программы] apply select main option and reRender {hotkeys}
    const handleMainChange = (selectedMainOption) => {
      this.setState({selectedMainOption})
    }

    let filteredHotkeys = hotkeys

    //* search filter {hotkeys}
    if (searchQuery) {
      filteredHotkeys = filteredHotkeys.filter((hotkey) => {
        const {selected, text, windows, macos} = hotkey
        const combinedText = `${selected} ${text} ${windows} ${macos}`.replace(/\+/g, ' ')
        return combinedText.toLowerCase().includes(searchQuery.toLowerCase())
      })
    }

    //* on load filter {hotkeys}
    filteredHotkeys = filteredHotkeys.filter((hotkey) => {
      if (selectedProgramOption && hotkey.target !== selectedProgramOption.value) {
        return false
      }
      if (selectedMainOption && !hotkey[selectedMainOption.value]) {
        return false
      }
      return true
    })

    return (
      <>
        <div className="S_Header Shortcuts">
          <a className="W_LinkLogo O_HeaderShortcutsLogo Shortcuts" href="./">
            <Logo></Logo>
          </a>
          <div className="O_HeaderShortcutsSwitch">
            <div className="O_SystemSwitch">
              <div className="C_SwitchItems">
                <div id="mac" className={system === 'macos' ? 'M_MacosItem _Active' : 'M_MacosItem'} ref={this.macButtonRef} onClick={this.handleMacosClick}>
                  <svg className="A_MacosSVG" xmlns="http://www.w3.org/2000/svg" width={19} height={23} viewBox="0 0 19 23" fill="none">
                    <path className="Q_MacosVector" fillRule="evenodd" d="M14.09 0h-.163c-1.224.162-2.502.888-3.199 1.704-.751.875-1.371 1.998-1.262 3.596 1.635.129 2.646-.717 3.384-1.588.753-.878 1.372-2.09 1.24-3.712Zm4.786 16.927v-.046c-1.6-.76-2.88-2.048-3.058-4.25-.2-2.426.97-3.846 2.451-4.788-.767-1.2-2.01-1.977-3.76-2.242-1.345-.202-2.39.18-3.43.56l-.258.094a8.914 8.914 0 0 0-.28.11c-.29.116-.578.232-.867.24-.441.014-.902-.182-1.31-.355-.112-.048-.22-.094-.324-.134-.502-.19-1.074-.382-1.635-.469-1.308-.2-2.483.248-3.337.773C1.449 7.408.231 9.446.125 11.953v1.029c.25 3.502 1.597 6.24 3.339 8.358.59.717 1.402 1.513 2.407 1.659h.466c.585-.083 1.07-.27 1.551-.455.644-.249 1.28-.494 2.138-.48.704.012 1.284.237 1.86.461.582.226 1.159.45 1.852.45 1.52 0 2.404-1.223 3.115-2.207l.108-.15c.8-1.107 1.456-2.3 1.915-3.691Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div id="win" className={system === 'windows' ? 'M_WindowsItem _Active' : 'M_WindowsItem'} ref={this.winButtonRef} onClick={this.handleWindowsClick}>
                  <svg className="A_WindowsSVG" xmlns="http://www.w3.org/2000/svg" width={23} height={22} viewBox="0 0 23 22" fill="none">
                    <path className="Q_WindowsVector" d="M11.045 1.727A862.493 862.493 0 0 1 22.935 0c.002 3.476 0 6.949.002 10.425-3.963.015-7.927.075-11.892.087-.003-2.93-.003-5.858 0-8.785ZM.992 3.129c2.98-.46 5.974-.857 8.967-1.232.003 2.883.003 5.763.005 8.646-2.99-.003-5.981.042-8.972.035v-7.45Zm0 8.356c2.989-.01 5.976.038 8.965.033 0 2.89.007 5.78.002 8.67-2.985-.442-5.976-.83-8.967-1.234v-7.469Zm10.035.116h11.907c.005 3.465 0 6.93 0 10.399a856.508 856.508 0 0 0-11.89-1.681c-.004-2.905-.012-5.81-.017-8.718Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="O_HeaderShortcutsMenu">
            <div className="O_Menu">
              <div className="C_MenuItems">
                <a className="M_MenuItem Shortcuts" href="shortcuts.html">
                  <h3 className="Q_MenuText">ШОРТКАТЫ</h3>
                </a>
                <div className="Q_MenuSeparator" />
                <a className="M_MenuItem Selections" href="/selections.html">
                  <h3 className="Q_MenuText">ПОДБОРКИ</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="C_Wrapper Shortcuts">
          <form className="S_SearchBar Shortcuts">
            <div className="C_SearchBar">
              <input className="M_SearchInput" type="text" placeholder="Ищите сочетания клавиш" value={searchQuery} onChange={(e) => this.setState({searchQuery: e.target.value})} />
            </div>
            <div className="S_Filters">
              <div className="C_SelectBar">
                <Select options={programOptions} value={selectedProgramOption} onChange={handleProgramChange} styles={selectStyles} components={{DropdownIndicator}} isSearchable={false} placeholder="Все шорткаты" />
                <Select options={mainOptions} value={selectedMainOption} onChange={handleMainChange} styles={selectStyles} components={{DropdownIndicator}} isSearchable={false} placeholder="Сортировка" />
              </div>
              <div className="M_ResetFilter" onClick={this.handleReset} style={{display: searchQuery || selectedProgramOption || selectedMainOption ? 'block' : 'none'}}>
                <span className="A_ResetText">Сбросить</span>
                <FontAwesomeIcon icon={faTimes} className="A_ResetIcon" />
              </div>
            </div>
          </form>
          <div className="S_Shortcuts">
            {filteredHotkeys
              .sort(() => Math.random() - 0.5)
              .map((hotkey, index) => (
                <a href={'shortcuts/' + hotkey.link + '.html'} key={index}>
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
        </div>
      </>
    )
  }
}
