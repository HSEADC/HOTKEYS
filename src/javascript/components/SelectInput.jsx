import React from 'react'
import Select from 'react-select'

const SelectInput = () => {
  const programOptions = [
    {value: 'microsoft_office', label: 'Microsoft Office'},
    {value: 'adobe_photoshop', label: 'Adobe Photoshop'},
    {value: 'visual_studio_code', label: 'Microsoft Visual Studio Code'},
  ]

  const mainOptions = [
    {value: 'popular', label: 'Популярные'},
    {value: 'useful', label: 'Самые полезные'},
    {value: 'simple-first', label: 'Сначала простые'},
    {value: 'complex-first', label: 'Сначала сложные'},
  ]

  const green = '#cbfb45'
  const black = '#0c0c0c'
  const lightBlack = '#1a1a1a'

  const colorStyles = {
    control: (styles, {isFocused}) => ({
      ...styles,
      backgroundColor: 'transparent',
    }),
  }
  const handleChange = (selectedOption, actionMeta) => {
    console.log('handleChange', selectedOption, actionMeta)
  }
  const handleInputChange = (inputValue, actionMeta) => {
    console.log('handleInputChange', inputValue, actionMeta)
  }
  return (
    <div className="C_SelectBar">
      <Select options={programOptions} onChange={handleChange} onInputChange={handleInputChange} styles={colorStyles} placeholder="Все программы" />
      <Select options={mainOptions} onChange={handleChange} onInputChange={handleInputChange} styles={colorStyles} placeholder="Сортировка" />
    </div>
  )
}

export default SelectInput
