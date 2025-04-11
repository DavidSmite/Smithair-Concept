/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Active le mode sombre basé sur la classe "dark"
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
