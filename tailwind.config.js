/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  
  ],
  theme: {
    extend: {
      colors: {
        "background": "#f5f5f5",
        "text": "#333",
        "text-light": "#F4F4F4",
        "primary": "#00527D",
        "dark-blue": "#002347",
        "light-blue": "#EEF6FF",
        "button": "#0061E0",
      },
    },
  },
  plugins: [],
};
