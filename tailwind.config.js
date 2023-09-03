/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-grey': '#333333',
      'grey': '#737373',
      'purple': '#633CFF',
      'purple-hover': '#BEADFF',
      'light-purple': '#EFEBFF',
      'border': '#D9D9D9',
      'grey-85': '#D9D9D9',
      'light-grey': '#FAFAFA',
      'white': '#FFFFFF',
      'red': '#FF3939',
      'facebook': '#2442AC',
      'github': '#1A1A1A',
      'twitter': '#43B7E9',
      'youtube': '#EE3939',
      'light-grey': '#EEEEEE',
    },
    fontFamily: {
      sans: ['Instrument Sans', 'Sans']
    },
    extend: {
      borderRadius: {
        'small': '8px'
      },
      gridTemplateColumns: {
        '2-4': '2fr 4fr'
      }
    },
    boxShadow: {
      'light-purple': '0px 0px 32px 0px rgba(99, 60, 255, 0.25)',
      'light-shadow': '0px 0px 32px 0px rgba(0, 0, 0, 0.10)'
    }
  },

  plugins: [],
}
