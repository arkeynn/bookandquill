/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "minecraft-regular": ["Minecraft Regular"]
      },
      backgroundImage: {
        "book": "url('/src/assets/book.png')",
  
        "arrow-left-active": "url('/src/assets/arrowLeftActive.png')",
        "arrow-left-normal": "url('/src/assets/arrowLeftNormal.png')",

        "arrow-right-active": "url('/src/assets/arrowRightActive.png')",
        "arrow-right-normal": "url('/src/assets/arrowRightNormal.png')"
      }
    },
  },
  plugins: [],
}
