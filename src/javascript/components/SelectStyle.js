export const green = '#cbfb45'
export const black = '#0c0c0c'
export const lightBlack = '#1a1a1a'

export const colorStyles = {
  control: (styles, {isFocused}) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    width: 'fit-content',
    fontSize: '1.15vw',
    outline: `1px solid ${isFocused ? green : 'transparent'}`,
  }),

  option: (styles, {isFocused, isSelected}) => {
    let backgroundColor = black
    if (isFocused) {
      backgroundColor = lightBlack
    }
    if (isSelected) {
      backgroundColor = lightBlack
    }
    return {
      ...styles,
      backgroundColor,
      color: `${isSelected ? green : 'white'}`,
      ':active': {
        ...styles[':active'],
        backgroundColor: lightBlack,
        color: green,
      },
    }
  },
  indicatorSeparator: (styles) => ({...styles, display: 'none'}),
  menu: (styles) => ({...styles, backgroundColor: 'transparent', border: '1.5px solid #595959', boxShadow: '0px 5px 95px rgba(0, 0, 0, 0.4)', borderRadius: '5px'}),
  menuList: (styles) => ({...styles, margin: '0px', padding: '0px'}),
  placeholder: (styles) => ({...styles, color: 'white'}),
  input: (styles) => ({...styles, color: 'white'}),
  singleValue: (styles) => ({...styles, color: 'white'}),
}
