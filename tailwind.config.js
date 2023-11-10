/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkGreen: '#00474B',
        mediumGreen: '#26C2AE',
        lightGreen: '#9FE8DF',
        darkGray: '#5E7A7D',
        lightGray: '#7F9D9F',
        lighterGray: '#F3F9FA',
        error: '#E17457',
      },
      fontFamily: {
        spaceMono: ['"Space Mono"', 'mono'],
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
