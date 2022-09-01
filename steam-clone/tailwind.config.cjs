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
    extend: {},
  },
  plugins: [],
}
