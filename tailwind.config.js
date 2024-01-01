/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:"#7D0A0A",
        secondarycolor:"#11235A",
        thirtycolor:"#FF9800",
        foutycolor:"B80000"

      }
    },
  },
  plugins: [],
}

