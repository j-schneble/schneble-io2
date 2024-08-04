import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
// import fonts from '@/components/fonts'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// export const fonts: {
//   sans: ['Inter', ...fontFamily.sans],
//   serif: ['Domine', ...fontFamily.serif],
//   sfprodisplayrounded: ['SF-Pro-Display-Rounded', ...fontFamily.sans],
//   sfprodisplayregular: ['SF-Pro-Display-Regular', ...fontFamily.sans],
//   sfprodisplaybold: ['SF-Pro-Display-Bold', ...fontFamily.sans],
//   sfprodisplaylight: ['SF-Pro-Display-Light', ...fontFamily.sans],
//   sfprodisplayheavy: ['SF-Pro-Display-Heavy', ...fontFamily.sans],

// },
