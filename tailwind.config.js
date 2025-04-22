/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D00',
          hover: '#E04400',
          light: '#FFF0EB'
        },
        secondary: {
          DEFAULT: '#12141D',
          light: '#2A2D3A'
        },
        accent: '#F5F5F5',
        background: {
          light: '#FFFFFF',
          dark: '#12141D'
        },
        text: {
          primary: '#12141D',
          secondary: '#6E7079',
          inverted: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
      },
      boxShadow: {
        'card': '0px 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
} 