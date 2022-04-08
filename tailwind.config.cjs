const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'mauve': "#6F73D2"
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    }
  },
  daisyui: {
    themes: false
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
};

module.exports = config;
