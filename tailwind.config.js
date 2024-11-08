/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgSidebar': '#475569',
        'iconColor': '#08edef',
        'bgColor': '#fff',
        'textColor': '#000',
        'bgButton': '#2563eb',
      },
    },
  },
  plugins: [],
}

