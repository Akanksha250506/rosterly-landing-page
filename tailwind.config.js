/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12302f',
        paper: '#fbfaf6',
        mint: '#e3eee9',
        line: '#d3dfd9',
        accent: '#f2a33a',
        danger: '#b3261e',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1120px',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(18, 48, 47, 0.10)',
      },
    },
  },
  plugins: [],
}
