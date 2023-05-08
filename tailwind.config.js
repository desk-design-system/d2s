module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins:{
  // preflight: false
  },
  theme: {
    screens: {
      xs: "321px",
      sm: "426px",
      md: "769px",
      lg: "1024px",
      xl: "1440px"
  },

    extend: {
      colors: {
       primary: '#d12026',
       secondary: '#ecc94b',
    },
    },
     
  },
  variants: {
    extend: {},
  },

  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
  prefix: 'dd-',
};
