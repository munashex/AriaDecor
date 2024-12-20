/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Inter Placeholder', 'sans-serif'],
        inter: ['Inter', 'Inter Placeholder', 'sans-serif'],
        'shantell': ['"Shantell Sans"', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
