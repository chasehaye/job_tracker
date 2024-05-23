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
        C1: '#69626D',
        C2: '#BCAF9C',
        C3: '#CBBEB3',
        C4: '#D9BDC5',
        C5: '#E8C7DE',
        C6: '#000000',
        C7: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

