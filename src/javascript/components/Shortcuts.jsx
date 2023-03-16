import React, {Component} from 'react'
import Cookies from 'js-cookie'
import Select, {components} from 'react-select'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import TriangleDown from '../../images/triangle.svg'

import {colorStyles, green, black, lightBlack} from './SelectStyle'
import hotkeys from './hotkeys.json'

export default class Shortcuts extends Component {
  state = {
    system: Cookies.get('os') === 'macos' ? 'macos' : 'windows',
    selectedProgramOption: null,
    selectedMainOption: null,
    systemSelected: false,
    searchQuery: '',
  }

  //* [windows button] switch system on click and add active class
  handleWindowsClick = (event) => {
    event.preventDefault()
    this.setState({system: 'windows', systemSelected: true})
    document.getElementById('mac').classList.remove('active')
    document.getElementById('win').classList.add('active')
  }

  //* [macos button] switch system on click and add active class
  handleMacosClick = (event) => {
    event.preventDefault()
    this.setState({system: 'macos', systemSelected: true})
    document.getElementById('win').classList.remove('active')
    document.getElementById('mac').classList.add('active')
  }

  //* [reset button] reset search filters on click
  handleReset = (event) => {
    event.preventDefault()
    this.setState({
      selectedProgramOption: null,
      selectedMainOption: null,
      system: Cookies.get('os') === 'macos' ? 'macos' : 'windows',
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
      if (selectedMainOption) {
        if (hotkey[selectedMainOption.value] !== true) {
          return false
        }
      }
      return true
    })

    return (
      <>
        <div className="S_Header Shortcuts">
          <a className="W_LinkLogo O_HeaderShortcutsLogo" href="./">
            <div className="O_Logo">
              <svg className="M_LogoSVG" width="224" height="33" viewBox="0 0 224 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="A_VectorShift">
                  <path d="M11.1777 17.7402L6.58445 17.8007L3.67821 32.2411H0L6.3574 0.544922H10.0356L7.2656 14.5312L11.9492 14.5L11.1777 17.7402Z" fill="#7A9729" />
                  <path d="M20.4009 18.8452L17.7217 32.2411H12L18.3574 0.544922H24.0791L21.4453 13.7592H26.2559L25.2559 18.7402L20.4009 18.8452Z" fill="#7A9729" />
                </g>
                <g className="A_TextShift">
                  <path d="M47.892 19.1176H36.0854L33.4516 32.2411H26.8672L33.2246 0.544922H39.809L37.2661 13.3051H49.0727L51.6156 0.544922H58.2001L56.6107 8.46897L55.0214 16.393L51.8427 32.2411H45.2582L47.892 19.1176Z" fill="#CBFB45" />
                  <path d="M69.8339 32.786C68.3203 32.786 66.8671 32.5438 65.4746 32.0595C64.1123 31.5448 62.9013 30.7728 61.8418 29.7436C60.8125 28.684 59.9799 27.352 59.3442 25.7475C58.7387 24.1127 58.436 22.1752 58.436 19.935C58.436 17.2104 58.8447 14.6372 59.6621 12.2153C60.4795 9.79342 61.6147 7.67429 63.0678 5.85789C64.5209 4.04149 66.2465 2.61864 68.2446 1.58935C70.2426 0.529784 72.4223 0 74.7836 0C76.2973 0 77.7353 0.257324 79.0976 0.771971C80.4901 1.25634 81.7011 2.02831 82.7304 3.08788C83.7899 4.11717 84.6224 5.4492 85.2279 7.08396C85.8636 8.68845 86.1815 10.6108 86.1815 12.851C86.1815 15.5756 85.7728 18.1489 84.9554 20.5707C84.1381 22.9926 83.0028 25.1117 81.5497 26.9281C80.0966 28.7445 78.371 30.1825 76.373 31.2421C74.3749 32.2714 72.1952 32.786 69.8339 32.786ZM70.288 26.9281C72.4072 26.9281 74.1479 26.2167 75.5102 24.7939C76.8725 23.371 77.8109 21.373 78.3256 18.7997L79.2792 14.0317C79.37 13.5473 79.4306 13.1235 79.4608 12.7602C79.4911 12.3667 79.5062 12.0034 79.5062 11.6704C79.5062 7.79538 77.7807 5.85789 74.3295 5.85789C72.2104 5.85789 70.4697 6.56931 69.1074 7.99216C67.7451 9.41501 66.8066 11.413 66.2919 13.9863L65.3383 18.7543C65.2475 19.2084 65.187 19.6323 65.1567 20.0258C65.1264 20.4194 65.1113 20.7826 65.1113 21.1157C65.1113 24.9906 66.8369 26.9281 70.288 26.9281Z" fill="#CBFB45" />
                  <path d="M103.679 6.3574L98.5018 32.2411H91.9174L97.0941 6.3574H88.7387L89.9193 0.544922H113.215L112.034 6.3574H103.679Z" fill="#CBFB45" />
                  <path d="M133.543 16.6655L127.867 21.9784L125.823 32.2411H122.145L128.503 0.544922H132.181L128.957 16.7109H129.184L134.588 11.4887L145.895 0.544922H150.572L136.358 14.3042L145.304 32.2411H141.308L133.543 16.6655Z" fill="#EEEEEE" />
                  <path d="M149.629 32.2411L155.986 0.544922H174.65L173.969 3.81444H159.029L156.894 14.5312H170.336L169.7 17.8007H156.213L153.988 28.9716H169.7L169.064 32.2411H149.629Z" fill="#EEEEEE" />
                  <path d="M182.434 32.2411L184.932 19.8442L178.302 0.544922H182.026L187.293 16.0297H187.52L198.873 0.544922H203.096L188.61 19.8442L186.113 32.2411H182.434Z" fill="#EEEEEE" />
                  <path d="M208.779 32.786C206.448 32.786 204.314 32.3319 202.376 31.4237C200.439 30.5155 198.97 29.0775 197.971 27.1098L200.787 25.0663C201.725 26.6708 202.876 27.8061 204.238 28.4721C205.6 29.1381 207.144 29.4711 208.87 29.4711C210.202 29.4711 211.382 29.3046 212.412 28.9716C213.441 28.6083 214.289 28.1239 214.955 27.5185C215.651 26.8827 216.166 26.1562 216.499 25.3388C216.862 24.5214 217.044 23.6435 217.044 22.705C217.044 21.3427 216.665 20.2529 215.908 19.4355C215.151 18.6181 213.925 18.0429 212.23 17.7099L209.188 17.1196C206.947 16.6957 205.222 15.8178 204.011 14.4858C202.83 13.1235 202.24 11.413 202.24 9.35446C202.24 8.08298 202.482 6.88719 202.966 5.76707C203.451 4.61668 204.147 3.61766 205.055 2.77001C205.994 1.92236 207.144 1.25634 208.506 0.771971C209.869 0.257324 211.428 0 213.184 0C215.636 0 217.679 0.454102 219.314 1.3623C220.979 2.2705 222.341 3.45116 223.401 4.90428L220.722 7.12937C219.844 5.94871 218.784 5.02538 217.543 4.35936C216.302 3.66307 214.773 3.31493 212.957 3.31493C210.807 3.31493 209.097 3.81444 207.825 4.81346C206.554 5.81248 205.918 7.23533 205.918 9.082C205.918 11.7461 207.523 13.396 210.732 14.0317L213.774 14.622C216.014 15.0458 217.725 15.9238 218.905 17.2558C220.116 18.5878 220.722 20.3437 220.722 22.5234C220.722 23.9462 220.449 25.2782 219.904 26.5194C219.39 27.7606 218.618 28.8505 217.588 29.789C216.589 30.7274 215.348 31.4691 213.865 32.0141C212.381 32.5287 210.686 32.786 208.779 32.786Z" fill="#EEEEEE" />
                </g>
              </svg>
            </div>
          </a>
          <div className="O_HeaderShortcutsSwitch">
            <div className="O_SystemSwitch">
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
          <div className="O_HeaderShortcutsMenu">
            <div className="O_Menu">
              <div className="C_MenuItems">
                <a className="M_MenuItem Shortcuts" href="shortcuts.html">
                  <h3 className="Q_MenuText">ШОРТКАТЫ</h3>
                </a>
                <div className="Q_MenuSeparator" />
                <a className="M_MenuItem Selections" href="selections.html">
                  <h3 className="Q_MenuText">ПОДБОРКИ</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="C_Wrapper Shortcuts">
          <form className="S_SearchForm Shortcuts">
            <div className="C_SearchBar">
              <input className="M_SearchInput" type="text" placeholder="Ищите сочетания клавиш" value={searchQuery} onChange={(e) => this.setState({searchQuery: e.target.value})} />
              <button className="M_SearchButton" type="submit">
                <FontAwesomeIcon icon={faSearch} className="A_ButtonIcon" />
              </button>
            </div>
            <div className="S_Filters">
              <div className="C_SelectBar">
                <Select options={programOptions} value={selectedProgramOption} onChange={handleProgramChange} styles={colorStyles} components={{DropdownIndicator}} placeholder="Все программы" />
                <Select options={mainOptions} value={selectedMainOption} onChange={handleMainChange} styles={colorStyles} components={{DropdownIndicator}} placeholder="Сортировка" />
              </div>
              <button className="M_ResetFilters" onClick={this.handleReset}>
                Сбросить
                <FontAwesomeIcon icon={faTimes} className="A_ResetIcon" />
              </button>
            </div>
          </form>
          <div className="S_Shortcuts">
            {filteredHotkeys
              .sort(() => Math.random() - 0.5)
              .map((hotkey, index) => (
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
        </div>
      </>
    )
  }
}
