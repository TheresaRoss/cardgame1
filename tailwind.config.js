/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'animation': {
        'text': 'text 5s ease infinite',
      },
      'keyframes': {
        'text': {
          '0%, 100%': {
            'background': 'linear-gradient(90deg, #a855f7 0%,#ef4444  50%, #eab308 100%);'
          },
          '50%': {
            
            'background': 'linear-gradient(90deg, #eab308  0%,  50%,#a855f7 100%);'
          }
        },
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('postcss-apply')
  ],
}
