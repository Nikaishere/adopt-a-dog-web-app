/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color": "red"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  "tailwindCSS.includeLanguages": { plaintext: "javascript" },
}