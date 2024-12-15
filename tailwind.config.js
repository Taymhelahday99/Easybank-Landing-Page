/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'first-pattern': "url('/easybank-landing-page-master/images/bg-intro-desktop.svg')"
    },
  },
  plugins: [],
  }
}