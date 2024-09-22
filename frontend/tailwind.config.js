/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            'animation-timing-function': 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0)', 
            'animation-timing-function': 'ease-in-out',
          },
        },
      },
    },
  },
  plugins: [],
}

