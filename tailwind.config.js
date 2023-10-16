/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        mygreen : '#008970',
        blueGray : '#334155'
      }
    },
  },
  plugins: [],
}

