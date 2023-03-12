/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    typography: (theme) => ({
      DEFAULT: {
        css: {
          h1: {
            color: theme('colors.blue.500'),
            fontWeight: theme('fontWeight.black'),
            letterSpacing: theme('letterSpacing.tighter'),
          },
          h2: {
            color: theme('colors.blue.500'),
            fontWeight: theme('fontWeight.black'),
            letterSpacing: theme('letterSpacing.tighter'),
          },
          'h2 a': {
            textDecoration: 'none',
            color: theme('colors.blue.500'),
            fontWeight: theme('fontWeight.black'),
            letterSpacing: theme('letterSpacing.tighter'),
            display: 'block',
            '&:hover': {
              backgroundColor: theme('colors.blue.500'),
              color: theme('colors.white'),
            },
          },
          h3: {
            color: theme('colors.blue.500'),
            fontWeight: theme('fontWeight.black'),
            letterSpacing: theme('letterSpacing.tighter'),
          },
          'code::before': false,
          code: false,
          'code::after': false,
          'ul > li::before': { backgroundColor: theme('colors.blue.500') },
          'ol > li::before': { color: theme('colors.blue.500') },
          hr: { borderColor: theme('colors.blue.500') },
          pre: { padding: false },
          'a:hover': {
            backgroundColor: theme('colors.blue.500'),
            color: 'white',
            textDecoration: 'none',
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.blue.50'),
          a: { color: theme('colors.blue.100') },
          strong: { color: theme('colors.blue.50') },
          blockquote: {
            color: theme('colors.blue.50'),
            borderLeftColor: theme('colors.blue.500'),
          },
        },
      },
    }),
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
