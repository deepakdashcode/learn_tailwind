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
        background: "var(--background)",
        foreground: "var(--foreground)",
        ownGreen: "#00FF00"
      },
    },
    screens:{
      sm: "480px",
      md: '768px',
      lg: "900px",
      xl: '1440px'
    }
  },
  plugins: [],
};
