import { createBox, createText, createTheme } from '@shopify/restyle'




const theme = createTheme({
  colors: {
  
    blueDark: '#0c0d34',
    gray: '#ccc',
    darkGray: '#8a8d90',
    light: 'rgba(0,0,0,0.75)',
    greenPrimary: '#0ECD9D',
    primary: '#3EAC91',
    danger: '#FF0058',
  
    black: '#0B0B0B',
    white: '#F0F2F3',
  },
  
  spacing: {
    p: 4,
    s: 8,
    m: 20,
    l: 40,
    xl: 40,
  },
  borderRadii:{
    s: 8,
    m: 10,
    l: 24,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero:{
      fontFamily: 'CormorantMedium',
      fontSize: 18,
      color:  'white',
      textAlign: 'center'
    },
    primary:{
      fontFamily: 'CormorantMedium',
      fontSize: 18,
      color:  'primary',
      textAlign: 'center'
    },

    title:{
        fontFamily: 'CormorantBold',
        fontSize: 75,
        color:  'white',
        textAlign: 'center'
    },
    subtitle:{
      fontFamily: 'CormorantBold',
      fontSize: 35,
      color:  'black',
      textAlign: 'center'
    },
    title2:{
        fontFamily: 'CormorantSemiBold',
        fontSize: 30,
        color:  'black',
        textAlign: 'center'
    },
    description:{
        fontFamily: 'CormorantMedium',
        fontSize: 20,
        color:  'black',
        textAlign: 'center'
    },
    text:{
      fontFamily: 'CormorantMedium',
      fontSize: 20,
      color:  'black',
      textAlign: 'center'
    },

    descriptionLight:{
      fontFamily: 'CormorantMedium',
      fontSize: 20,
      color:  'light',
      textAlign: 'center'
    },
    
  },


});

export type Theme = typeof theme;
export const Text = createText<Theme>();
// Text.defaultProps.variant = "text"
export const Box = createBox<Theme>();
export default theme;