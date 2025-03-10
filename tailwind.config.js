/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        brightColor: "#008B8B",
        backgroundColor: "#F0F8FF",
        lighText : "#959595"
      },
    },
  },
  plugins: [],
}

