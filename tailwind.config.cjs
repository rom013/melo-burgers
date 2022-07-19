/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-main': "url('src/img/background-image-main.png')"
      },
      colors:{
        "black-500": "#131313",

        "orange-100": "#FEAC4D",
        "orange-500": "#FF6C00",
        "orange-900": "#A74600",

        "yellow-500": "#FFC600",

        "green-500": "#12C945"
        
      },
      fontFamily:{
        "sora": "Sora , sans-serif",
        "lato": "Lato, sans-serif"
      },
    },
  },
  plugins: [],
}
