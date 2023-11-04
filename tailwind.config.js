/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        VeryDarkMagenta: "hsl(300, 43%, 22%)",
        SoftPink: "hsl(333, 80%, 67%)",
        DarkGrayishMagenta: "hsl(303, 10%, 53%)",
        LightGrayishMagenta: "hsl(300, 24%, 96%)",
        primary: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
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
};
