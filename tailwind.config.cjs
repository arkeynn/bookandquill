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
      }
    },
  },
  plugins: [],
}
