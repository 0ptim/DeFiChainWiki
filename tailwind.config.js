/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#161616",
        backgroundLight: "#161616",
        elementDark: "#242526",
        elementLight: "#f7f7f7",
        main: {
          DEFAULT: "#FB40C1",
          50: "#FFF4FB",
          100: "#FEE0F5",
          200: "#FEB8E8",
          300: "#FD90DB",
          400: "#FC68CE",
          500: "#FB40C1",
          600: "#FA09AF",
          700: "#C7048A",
          800: "#900364",
          900: "#59023E",
        },
        gray: {
          DEFAULT: "#73777A",
          50: "#D1D2D4",
          100: "#C6C8CA",
          200: "#B1B4B6",
          300: "#9CA0A2",
          400: "#878B8E",
          500: "#73777A",
          600: "#585B5D",
          700: "#3D3F40",
          800: "#212223",
          900: "#060606",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
