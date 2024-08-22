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
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

