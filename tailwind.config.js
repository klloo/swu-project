/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fill: {
        'cls-1': '#bbbdbf',
      },
      strokeWidth: {
        'cls-1': '0px',
      },
    },
  },
  plugins: [scrollbarHide],
};
