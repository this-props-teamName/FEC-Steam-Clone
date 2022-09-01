// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'wishlist': "url('https://store.akamai.steamstatic.com/public/images/v6/storemenu/background_wishlist.jpg')"
    }
  },
  plugins: [],
}
