/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/routes/**/*.{ts,js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

