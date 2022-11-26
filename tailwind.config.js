/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["Manrope"],
      },
      colors: {
        "bright-orange": "#FF4820",
        "shocking-purple": "#AE67FA",
        "light-orange": "#F49867",
        "light-blue": "#81AFDD",
        "dark-blue": "#052D56",
      },
    },
  },
  plugins: [],
};
