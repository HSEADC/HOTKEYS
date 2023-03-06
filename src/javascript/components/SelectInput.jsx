import React from 'react'
import Select from 'react-select'
import {colorStyles, green, black, lightBlack} from './SelectStyle'

const SelectInput = () => {
  const programOptions = [
    {value: 'system', label: 'Система'},
    {value: 'ms-office', label: 'Microsoft Office'},
    {value: 'photoshop', label: 'Adobe Photoshop'},
    {value: 'vs-code', label: 'Microsoft Visual Studio Code'},
  ]

  const mainOptions = [
    {value: 'popular', label: 'Популярные'},
    {value: 'useful', label: 'Самые полезные'},
    {value: 'simple-first', label: 'Сначала простые'},
    {value: 'complex-first', label: 'Сначала сложные'},
  ]

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
