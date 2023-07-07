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
      primary:'#5542f6',
      highlight:'#eae8f8', 
      abu:'#F9F9F9',
      darkAbu:'#EEEEEE'
     },
     screens:{
      'xs':'300px',
      'tablet':'600px'
     }
    },
  },
  plugins: [],
}
