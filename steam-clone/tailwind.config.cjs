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
      'cart': "url(https://store.akamai.steamstatic.com/public/images/v6/storemenu/background_cart.jpg)",
      'profile': "url(https://avatars.akamai.steamstatic.com/bb3ef3a7103423dbfe4947ad72c6a43a84b53fa9.jpg)"
    },
    colors: {
      'medium_blue': '#3d6695',
      'light_blue': '#3978b0',
      'dark_blue': '#0f216e'
    },

    extend: {},
  },
  plugins: [],
}
