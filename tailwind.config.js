/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./static/tags.json"],
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#161616",
        backgroundLight: "#161616",
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
        secondary: {
          DEFAULT: "#00F6FF",
          50: "#B8FCFF",
          100: "#A3FCFF",
          200: "#7AFAFF",
          300: "#52F9FF",
          400: "#29F7FF",
          500: "#00F6FF",
          600: "#00C0C7",
          700: "#008A8F",
          800: "#005457",
          900: "#001E1F",
        },
        gray: {
          DEFAULT: "#73777A",
          50: "#ededee",
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
      fontFamily: {
        ps2p: ['"Press Start 2P"', "cursive"],
      },
      dropShadow: {
        strong: "0 1px 1px rgba(0, 0, 0, 0.8)",
        logo: "0 1px 3px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        blink: "blink 5s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
