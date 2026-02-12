/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'fire-orange': '#f59e0b',
        'fire-blue': '#3b82f6',
        'fire-dark': '#1e293b',
      },
    },
  },
  plugins: [],
}
