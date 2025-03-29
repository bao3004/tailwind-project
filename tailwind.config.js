/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out',
      },
      colors: {
        'coffee': {
          100: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        } 
      }
    },
    plugins: [],
  },
}
