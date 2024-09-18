/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // Custom extra small breakpoint
        'sm': '375px',
        "sml": '500px',   // Small screen / mobile
        'md': '667px',
        "mdl": "768px",// Medium screen / tablet
        'lg': '960px',  // Large screen / desktop
        'lgl': '1024px',  // Extra large screen / large desktop
        '2xl': '1280px', // Extra extra large screen
      },
    },
  },
  plugins: [require('daisyui'),],
}