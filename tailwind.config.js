/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-grey': '#333333',
      'grey': '#737373',
      'purple': '#633CFF',
      'purple-hover': '#BEADFF',
      'light-purple': '#EFEBFF',
      'border': '#D9D9D9',
      'light-grey': '#FAFAFA',
      'white': '#FFFFFF',
      'red': '#FF3939'
    },
    fontFamily: {
      sans: ['Instrument Sans', 'Sans']
    },
    extend: {
      borderRadius: {
        'small': '8px'
      }
    },
    boxShadow: {
      'light-purple': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)'
    }
  },

  plugins: [],
}
