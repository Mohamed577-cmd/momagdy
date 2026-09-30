/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        background: '#0C0C0C',
        foreground: '#D7E2EA',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}