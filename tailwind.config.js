/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backblack': '#181C2A',
        'cardblack': '#121520',
        'textblack': '#EFF0F2',
        'textgray': '#797F92',
        'textyellow': '#C2FF27'
      },
    },
  },
  plugins: [],
}