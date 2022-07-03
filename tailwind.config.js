/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-primary-orange': 'hsl(26, 100%, 55%)',
        'app-primary-orange-pale': 'hsl(25, 100%, 94%)',
        'app-neutral-blue': 'hsl(220, 13%, 13%)',
        'app-neutral-blue-grayish': 'hsl(220, 14%, 75%)',
        'app-neutral-blue-grayish-dark': 'hsl(219, 9%, 45%)',
        'app-neutral-blue-grayish-light': 'hsl(223, 64%, 98%)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'translateY(16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        fadeDown: {
          '0%': {
            transform: 'translateY(-16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        fadeToLeft: {
          '0%': {
            transform: 'translateX(16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        fadeToRight: {
          '0%': {
            transform: 'translateX(-16%)',
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: 1,
            visibility: 'visible',
          },
        },
        appear: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
          },
          '100%': {
            opacity: 1,
            visibility: 'visible',
          },
        },
        scale: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: 1,
            visibility: 'visible',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
        fadeUp: 'fadeUp .6s ease-out forwards',
        fadeDown: 'fadeDown .6s ease-out forwards',
        fadeToLeft: 'fadeToLeft .6s ease-out forwards',
        fadeToRight: 'fadeToRight .6s ease-out forwards',
        appear: 'appear .6s ease-out forwards',
        scale: 'scale .6s ease-out forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-800': {
          'animation-delay': '800ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animate-hidden': {
          visibility: 'hidden',
          opacity: '0',
        },
      });
    }),
  ],
};
