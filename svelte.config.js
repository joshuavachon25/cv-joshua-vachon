import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

const config = {
  extensions: [".svelte"],

  kit: {
    vite: {
      ssr: {
        noExternal: ["three"]
      }
    },
    adapter: adapter(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
