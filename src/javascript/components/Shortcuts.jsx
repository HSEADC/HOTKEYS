import React, {Component} from 'react'
import Cookies from 'js-cookie'
import Select from 'react-select'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

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
    })
  }

  render() {
    const {system, selectedProgramOption, selectedMainOption, searchQuery} = this.state // destructure search query state

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
        const {selected, text} = hotkey
        const combinedText = `${selected} ${text}`
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
        <div class="S_Header Shortcuts">
          <div>
            <a class="W_LinkLogo" href="./">
              <div className="O_Logo">
                <svg className="M_LogoSVG" viewBox="0 0 230 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className="A_VectorShift">
                    <path className="Q_ShiftFirst" d="M14.7285 17.7402L6.58445 17.8007L3.67821 32.2411H0L6.3574 0.544922H10.0356L7.2656 14.5312L15.5 14.5L14.7285 17.7402Z" />
                    <path className="Q_ShiftSecond" d="M23.145 18.8452L20.4658 32.2411H14.7441L21.1015 0.544922H26.8232L24.1894 13.7592H33.2285L32.2285 18.7402L23.145 18.8452Z" />
                  </g>
                  <g className="A_TextShift">
                    <path className="Q_LetterH" d="M53.8901 19.1176H42.0835L39.4497 32.2411H32.8652L39.2226 0.544922H45.8071L43.2641 13.3051H55.0707L57.6137 0.544922H64.1981L57.8407 32.2411H51.2563L53.8901 19.1176Z" />
                    <path className="Q_LetterO" d="M75.832 32.786C74.3183 32.786 72.8652 32.5438 71.4726 32.0595C70.1103 31.5448 68.8994 30.7728 67.8398 29.7436C66.8105 28.684 65.978 27.352 65.3423 25.7475C64.7368 24.1127 64.4341 22.1752 64.4341 19.935C64.4341 17.2104 64.8427 14.6372 65.6601 12.2153C66.4775 9.79342 67.6128 7.67429 69.0659 5.85789C70.519 4.04149 72.2446 2.61864 74.2426 1.58935C76.2407 0.529784 78.4203 0 80.7817 0C82.2953 0 83.7333 0.257324 85.0956 0.771971C86.4882 1.25634 87.6991 2.02831 88.7284 3.08788C89.788 4.11717 90.6205 5.4492 91.226 7.08396C91.8617 8.68845 92.1796 10.6108 92.1796 12.851C92.1796 15.5756 91.7709 18.1489 90.9535 20.5707C90.1361 22.9926 89.0009 25.1117 87.5477 26.9281C86.0946 28.7445 84.369 30.1825 82.371 31.2421C80.373 32.2714 78.1933 32.786 75.832 32.786ZM76.2861 26.9281C78.4052 26.9281 80.1459 26.2167 81.5082 24.7939C82.8705 23.371 83.809 21.373 84.3236 18.7997L85.2772 14.0317C85.3681 13.5473 85.4286 13.1235 85.4589 12.7602C85.4892 12.3667 85.5043 12.0034 85.5043 11.6704C85.5043 7.79538 83.7787 5.85789 80.3276 5.85789C78.2084 5.85789 76.4677 6.56931 75.1054 7.99216C73.7431 9.41501 72.8046 11.413 72.29 13.9863L71.3364 18.7543C71.2456 19.2084 71.185 19.6323 71.1547 20.0258C71.1245 20.4194 71.1093 20.7826 71.1093 21.1157C71.1093 24.9906 72.8349 26.9281 76.2861 26.9281Z" />
                    <path className="Q_LetterT" d="M109.677 6.3574L104.5 32.2411H97.9154L103.092 6.3574H94.7367L95.9174 0.544922H119.213L118.032 6.3574H109.677Z" />
                    <path className="Q_LetterK" d="M139.541 16.6655L133.865 21.9784L131.821 32.2411H128.143L134.501 0.544922H138.179L134.955 16.7109H135.182L140.586 11.4887L151.893 0.544922H156.57L142.357 14.3042L151.302 32.2411H147.306L139.541 16.6655Z" />
                    <path className="Q_LetterE" d="M155.627 32.2411L161.984 0.544922H180.648L179.967 3.81444H165.027L162.893 14.5312H176.334L175.698 17.8007H162.211L159.986 28.9716H175.698L175.062 32.2411H155.627Z" />
                    <path className="Q_LetterY" d="M188.432 32.2411L190.93 19.8442L184.3 0.544922H188.024L193.291 16.0297H193.518L204.871 0.544922H209.094L194.608 19.8442L192.111 32.2411H188.432Z" />
                    <path className="Q_LetterS" d="M214.777 32.786C212.446 32.786 210.312 32.3319 208.374 31.4237C206.437 30.5155 204.968 29.0775 203.969 27.1098L206.785 25.0663C207.723 26.6708 208.874 27.8061 210.236 28.4721C211.598 29.1381 213.142 29.4711 214.868 29.4711C216.2 29.4711 217.38 29.3046 218.41 28.9716C219.439 28.6083 220.287 28.1239 220.953 27.5185C221.649 26.8827 222.164 26.1562 222.497 25.3388C222.86 24.5214 223.042 23.6435 223.042 22.705C223.042 21.3427 222.663 20.2529 221.906 19.4355C221.15 18.6181 219.923 18.0429 218.228 17.7099L215.186 17.1196C212.945 16.6957 211.22 15.8178 210.009 14.4858C208.828 13.1235 208.238 11.413 208.238 9.35446C208.238 8.08298 208.48 6.88719 208.965 5.76707C209.449 4.61668 210.145 3.61766 211.053 2.77001C211.992 1.92236 213.142 1.25634 214.505 0.771971C215.867 0.257324 217.426 0 219.182 0C221.634 0 223.677 0.454102 225.312 1.3623C226.977 2.2705 228.339 3.45116 229.399 4.90428L226.72 7.12937C225.842 5.94871 224.782 5.02538 223.541 4.35936C222.3 3.66307 220.771 3.31493 218.955 3.31493C216.805 3.31493 215.095 3.81444 213.823 4.81346C212.552 5.81248 211.916 7.23533 211.916 9.082C211.916 11.7461 213.521 13.396 216.73 14.0317L219.772 14.622C222.012 15.0458 223.723 15.9238 224.903 17.2558C226.114 18.5878 226.72 20.3437 226.72 22.5234C226.72 23.9462 226.447 25.2782 225.902 26.5194C225.388 27.7606 224.616 28.8505 223.587 29.789C222.588 30.7274 221.346 31.4691 219.863 32.0141C218.38 32.5287 216.684 32.786 214.777 32.786Z" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div>
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
          <div>
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
        <div className="C_Wrapper">
          <form className="S_SearchForm">
            <div className="C_SearchBar">
              <input className="M_SearchInput" type="text" placeholder="Поиск шорткатов" value={searchQuery} onChange={(e) => this.setState({searchQuery: e.target.value})} />
              <button className="M_SearchButton" type="submit">
                <FontAwesomeIcon icon={faSearch} className="A_ButtonIcon" />
              </button>
            </div>
            <div className="S_Filters">
              <div className="C_SelectBar">
                <Select options={programOptions} value={selectedProgramOption} onChange={handleProgramChange} styles={colorStyles} placeholder="Все программы" />
                <Select options={mainOptions} value={selectedMainOption} onChange={handleMainChange} styles={colorStyles} placeholder="Сортировка" />
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
