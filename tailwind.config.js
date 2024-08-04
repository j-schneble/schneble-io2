import {nextui} from '@nextui-org/react'
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

const sans = [
  'Inter',
  '-apple-system',
  'system-ui',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'sans-serif',
]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Inter', ...fontFamily.sans],
    serif: ['Domine', ...fontFamily.serif],
    sfprodisplayrounded: ['SF-Pro-Display-Rounded', ...fontFamily.sans],
    sfprodisplayregular: ['SF-Pro-Display-Regular', ...fontFamily.sans],
    sfprodisplaybold: ['SF-Pro-Display-Bold', ...fontFamily.sans],
    sfprodisplaylight: ['SF-Pro-Display-Light', ...fontFamily.sans],
    sfprodisplayheavy: ['SF-Pro-Display-Heavy', ...fontFamily.sans],

  },
  darkMode: "class",
  plugins: [nextui()],
}
