/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- THIS IS CRITICAL FOR YOUR REACT FILES
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}