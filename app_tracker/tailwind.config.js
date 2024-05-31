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
        C3: '#9370DB', //submit button color
        C4: '#BFA6BF', //div bg color
        C5: '#9400D3', //close button color
        C6: '#000000', //black
        C7: '#FFFFFF', //white
        C8: '#663399', //select
        //modify the colors in main css as well
      },
    },
  },
  plugins: [],
}

