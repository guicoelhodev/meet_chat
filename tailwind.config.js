/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#000517",
        "secondary-blue": "#0a1128",
        "terciary-blue": "#081236",
        "primary-gray": "#676767",
        "secondary-gray": "#ddd",
        "primary-cyan": "#00E0ff",
      },
    },
  },
  plugins: [],
};
