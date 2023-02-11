const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'd-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
      },
    },
  },
  safelist: [
    'd-bg-primary-50',
    'd-bg-primary-100',
    'd-bg-primary-200',
    'd-bg-primary-300',
    'd-bg-primary-400',
    'd-bg-primary-500',
    'd-bg-primary-600',
    'd-bg-primary-700',
    'd-bg-primary-800',
    'd-bg-primary-900',
  ],
  plugins: [require('@tailwindcss/forms')],
}
