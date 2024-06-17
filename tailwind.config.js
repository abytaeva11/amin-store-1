/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode:false,
  theme: {
      colors: {
          transparent: "transparent",
          current: "currentColor",
          black: "#000",
          white: "#fff",
          gray: {
              100: "#f7fafc",
              200: "#edf2f7",
              300: "rgba(253,33,59,0.86)",
              400: "#cbd5e0",
              500: "#a0aec0",
              600: "#718096",
              700: "#4a5568",
              800: "#2d3748",
              900: "#1a202c",
          },
          blue:{
              100:"rgba(73, 220, 255, 1)"
          }
      },

      extend: {},
  },

  plugins: [
      require (
          "daisyui"
      )

  ],
    daisyui: {
        styled: true,
        themes: [false],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
}


