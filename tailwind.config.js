/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        cyan: {
          400: '#00FFFF',
          500: '#00CCCC',
          600: '#00A3A3',
        },
        gray: {
          950: '#030303',
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2C2C2C',
          400: '#9CA3AF',
          300: '#D1D5DB',
        }
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};