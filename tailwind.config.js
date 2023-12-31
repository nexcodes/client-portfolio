/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0c2340",
        "light-gray": "#e8e8e8"
      },
    },
  },
  plugins: [],
};
