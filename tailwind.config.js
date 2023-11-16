/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#CE82FF",
        lemon: "#77C801",
        bluesky: "#1DB0F6",
        onion: "#43C6B4",
        onionDeep: "#24AF9B",
        chocolate: "#433636",
        yellow: "#FFC800",
        yellowDeep: "#FEB100",
      },
      fontFamily: {
        Itim: ["Itim", "sans-serif"],
        Questrial: ["Questrial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
