/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.75)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.50)' },
        },
      },
    },
  },
  plugins: [],
}
