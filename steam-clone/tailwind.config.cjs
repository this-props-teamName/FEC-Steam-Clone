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
    backgroundImage: {
      'wishlist': "url('https://store.akamai.steamstatic.com/public/images/v6/storemenu/background_wishlist.jpg')",
      'cart': "url(https://store.akamai.steamstatic.com/public/images/v6/storemenu/background_cart.jpg)"
    },
    
    extend: {},
  },
  plugins: [],
}
