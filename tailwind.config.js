/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EAF3FB',
        card: '#FFFFFF',
        blue: '#1D4ED8',
        green: '#16A34A',
        ink: '#0F172A',
        muted: '#64748B',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
