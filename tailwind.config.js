/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        ultra: "0.25em",
        mega: "0.5em",
      },
    },
  },
  plugins: [],
};
