/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf2',
          100: '#fbf5d5',
          200: '#f5e7a0',
          300: '#edd164',
          400: '#e3b432',
          500: '#d4af37', // Brand Luxury Gold
          600: '#b8860b',
          700: '#946608',
          800: '#754d0c',
          900: '#613e0e',
          950: '#382004',
        },
        navy: {
          50: '#f4f6fa',
          100: '#e8ecf4',
          200: '#cbd5e5',
          300: '#a1b4cd',
          400: '#718eb0',
          500: '#4e6d93',
          600: '#3c5476',
          700: '#31445f',
          800: '#1b2c44', // Dark brand navy
          900: '#1a2333',
          950: '#0f172a',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
