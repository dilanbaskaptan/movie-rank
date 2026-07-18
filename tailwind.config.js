/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        marquee: '#0F0E17',
        card: '#1A1825',
        gold: '#E3B23C',
        velvet: '#B33951',
        ink: '#FFFFFE',
        muted: '#A7A9BE',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
