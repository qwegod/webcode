/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
        modalUp: 'modalUp 0.5s ease-in-out',
        modalDown: 'modalDown 0.5s ease-in-out'
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0)', 
            'animation-timing-function': 'ease-in-out',
          },
        },
        modalUp: {
          "0%": {
            opacity: "100"
          },
          "100%": {
            opacity: "0"
          },
        },
        modalDown: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
      },
    },
  },
  plugins: [],
}

