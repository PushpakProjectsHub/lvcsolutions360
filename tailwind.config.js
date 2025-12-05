/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // include src/ if you're using a src folder
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // keep root app/components if you don't use src/
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // optional: include pages/api or other folders if you store classes there
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-soft": "#F1E4B3",
        "gold-royal": "#B88A1D",
        "bg-deep": "#050509",
        "bg-card": "#0C0E16",
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "gold-soft": "0 0 40px rgba(212,175,55,0.35)",
      },
    },
  },
  plugins: [],
};
