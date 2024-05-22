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
        C1: '#585123',
        C2: '#EEC170',
        C3: '#F2A65A',
        C4: '#F58549',
        C5: '#772F1A',
        C6: '#000000',
        C7: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

