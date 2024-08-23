/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    screens:{
      'xs': '576px',
      'sm': '640px',
      'md': {'min': '768px', 'max': '992px'},
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(11) forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      keyframes:{
        typewriter:{
          to:{
            left: '100%',
          },
        },
        blink:{
          '0%':{
            opacity: '0',
          },
          '0.1%':{
            opacity: '1',
          },
          '50%':{
            opacity: '1',
          },
          '50.1%':{
            opacity: '0',
          },
          '100%':{
            opacity: '0',
          }
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

