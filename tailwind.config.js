/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'darkgrey': '#333333',
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
      sans: ['Instrument', 'Sans']
    },
    extend: {
      borderRadius: {
        'small': '8px'
      }
    }
  },

  plugins: [],
}
