/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 24.9px 15px rgba(22, 119, 37, 0.25)', // Custom shadow
      },
    },
  },
  plugins: [],
}