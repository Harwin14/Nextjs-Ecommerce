/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      light:'#f9f9f9',
      biru:'#3c91e6',
      lightBlue:'#cfe8ff',
      grey:'#eee',
      darkGrey:'#aaaaaa',
      dark:'#342e37',
  
      lightOrange:'#ffe0d3',
      primary:'#3c91e6',
      highlight:'#eae8f8', 
      abu:'#F9F9F9',
      darkAbu:'#EEEEEE'
     },
     screens:{
      'xs':'400px',
      's':'500px',
      'tablet':'820px'
     },
     fontFamily: {
      custom: ['Lato', 'Nunito Sans', 'Poppins', 'sans'],
    },
    },
  },
  plugins: [],
}
