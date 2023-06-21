const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", defaultTheme.fontFamily.sans],
        ramaraja: ["'Ramaraja'", defaultTheme.fontFamily.sans],
        sixcaps: ["'SixCaps'", defaultTheme.fontFamily.sans],
        windsong: ["'WindSong'", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
