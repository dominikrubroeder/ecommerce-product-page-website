/** @type {import('tailwindcss').Config} */
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
        'app-neutral-blue-grayish': 'hsl(219, 9%, 45%)',
        'app-neutral-blue-grayish-dark': 'hsl(220, 14%, 75%)',
        'app-neutral-blue-grayish-light': 'hsl(223, 64%, 98%)',
      },
    },
  },
  plugins: [],
};
