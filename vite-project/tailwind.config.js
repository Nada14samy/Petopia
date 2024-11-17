/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#73b9d7",
      darkBlue: "#295793",
      lightYellow: "#ffd79a9c",
      secondary: "#F6E5C9",
      binkColor: "#FFE6C1",
      light: "#fff",
      err: "#f00",
    },
    fontFamily:{
      roboto: ["Roboto", "sans-serif"],
      montaguSlab: ["Montagu Slab","serif"],
      sansitaSwashed: ["Sansita Swashed"],
    }
  },
  plugins: [],
}

