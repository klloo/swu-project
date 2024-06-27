/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [scrollbarHide],
};
