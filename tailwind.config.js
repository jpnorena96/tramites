/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefine 'ajp' to be the US Blue palette so existing classes work but look Blue
        ajp: {
          50: '#f2f4fa',
          100: '#e1e6f5',
          200: '#c8d1ec',
          300: '#a3b4e1',
          400: '#758fd1',
          500: '#536dbf',
          600: '#3C3B6E', // Old Glory Blue - Primary Brand Color
          700: '#32315b',
          800: '#2a2949',
          900: '#25243d',
          950: '#171626',
        },
        // Add specific US Red palette for accents
        'us-red': {
          50: '#fdf2f3',
          100: '#fce7e9',
          200: '#f8d2d6',
          300: '#f2abb3',
          400: '#ea7c89',
          500: '#de5466',
          600: '#B22234', // Old Glory Red - Accent Color
          700: '#961d2c',
          800: '#7d1b27',
          900: '#681c25',
          950: '#390b11',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
