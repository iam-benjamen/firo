module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "nav-bg": "#E5E5E5",
        'mygrey': "#8E99AF",
        'registerblack': "#1B1A3F",
        'background': "#F8FAFC",
      },
      backgroundImage: {
        'curlyedge': "url('../public/Vector.svg')",
        'curlycenter': "url('../public/Vector (1).svg')",
      },
    },
  },
  plugins: [],
};
