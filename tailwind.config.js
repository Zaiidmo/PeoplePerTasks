/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'tablet': '1360px',
        'smXl': '800px'
      },
      maxWidth: {
        '1/2': '50%',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },


  },
  darkMode: "class",
};
