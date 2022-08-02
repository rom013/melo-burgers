/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-menu": "url('src/img/background-1.png')",
        "bg-main": "url('src/img/background-image-main.png')",
        "bg-menu-282": "url('src/img/background-1-282.png')",
        "bg-blur": "url('src/img/blur.png')"
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
      animation:{
        "spin-x": 'spin_x 2s linear infinite'
      },
      keyframes:{
        spin_x : {
          '0%': {transform: 'rotatey(360deg)'},
          '100%': {transform: 'rotatey(0deg)'}
        }
      }
    }
  },
  plugins: [],
}
