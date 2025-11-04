/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
  'tib-blue': '#0033A0',
  'tib-red': '#E51937',
  'tib-gray': '#B7BDC6',
  'tib-dark': '#0B0C10',
  'tib-white': '#FFFFFF',
},
    },
  },
  plugins: [],
}
