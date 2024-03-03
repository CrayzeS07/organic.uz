/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yashil: "#7EB693",
        DarkSlateGray: "#274C5B",
        yellows: "#EFD372",
        kulrang: "#D4D4D4",
        DoctorColor: "#F9F8F8",
        HeavySugar: "#EFF6F1",
        CityColor: "#525C60",
      },
      fontFamily: {
        Yellowtail: ["Yellowtail", "cursive"],
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
