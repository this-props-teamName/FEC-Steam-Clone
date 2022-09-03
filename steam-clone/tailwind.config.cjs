// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // use font-sans or font-serif to access
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'serif': ['Motiva Sans' , 'sans-serif']
    },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.4)',
        'blue-rgba': 'rgba(102, 193, 245, 0.2)',
        'black-gradient-r': 'rgba(0, 0, 0, 0.8)',
      },
      extend: {},
  },
  plugins: [],
}
