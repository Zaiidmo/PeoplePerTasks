/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
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
