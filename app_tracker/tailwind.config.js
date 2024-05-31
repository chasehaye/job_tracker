/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        C1: '#69626D', //navbar
        C2: '#BCAF9C',
        C3: 'green', //submit button color
        C4: 'maroon', //div bg color
        C5: 'red', //close button color
        C6: '#000000', //black
        C7: '#FFFFFF', //white
        C8: 'blue', //select
        //modify the colors in main css as well
      },
    },
  },
  plugins: [],
}

