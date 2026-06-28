/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // font-display -> titoli (Playfair Display, serif classico e "serio")
        display: ['Playfair Display', 'serif'],
        // font-sans -> testo (Inter), sovrascrive il sans-serif di default
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
