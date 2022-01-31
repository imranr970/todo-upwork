const darkGreenColor = '#1AB394'
const purpleColor = '#9B9BC5'
const lightGrayColor = '#333333'

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'dark-green': darkGreenColor,
        'light-gray': '#FCFCFC',
        'dark-gray': '#D6D6D6',
        'app-purple': '#9B9BC5',
        'app-purple-transparent': '#A5A5CB',
        'dark-mode-gray': '#1E1E1E'
      },
      boxShadow: {
        'card': '0px 0px 10px 4px rgba(0, 0, 0, 0.25)',
        'color-box': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      borderColor: {
        'light-green': '#1AB394',
        'dark-green': darkGreenColor,
        'light-gray': '#EBEBEB',
        'dark-gray': '#D6D6D6',
      },
      textColor: {
        'dark-green': darkGreenColor,
        'app-purple': purpleColor,
        'light-gray': lightGrayColor,
        'off-white': 'rgba(255, 255, 255, .87)'
      },
      margin: {
        top: {
          'tiny': '2px'
        }
      },
      fontFamily: {
        body: ['Roboto'],
        nunito: ['Nunito']
      },
      gridTemplateColumns: {
        'home': '420px max-content',
        'home-xl': '20% 80%',
        'home-lg': '30% 70%',
        'home-md': '40% 60%',
        'home-sm': '50% 50%',  
        'home-xl': '50% 50%',  
      },
      screens: {
        xs: '550px'
      }
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus'],
      textColor: ['active', 'focus'],
      fontWeight: ['hover', 'focus']
    },
  },
  plugins: [],
}
