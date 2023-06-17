const green = '#cbfb45'
const black = '#0c0c0c'
const lightBlack = '#1a1a1a'

export const selectStyles = {
  control: (styles, {isFocused}) => ({
    ...styles,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    width: 'fit-content',
    fontSize: window.innerWidth >= 645 ? '1.35rem' : window.innerWidth >= 355 ? '1.15rem' : '0.95rem',
    fontWeight: '400',
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
      fontSize: '1.25rem',
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
