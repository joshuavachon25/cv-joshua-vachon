const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    }
  },
  daisyui: {
    themes: false
  },
  plugins: [require("daisyui")],
};

module.exports = config;
