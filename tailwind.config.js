module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins:{
  // preflight: false
  },
  theme: {
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
