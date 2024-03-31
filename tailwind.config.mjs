/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "text-gradient": "text-gradient 5s linear infinite",
        "fade-in-up": "0.6s ease-in-out 0s both fade-in-up",
      },

      "keyframes": {
        "text-gradient": {
          "to": {
            "backgroundPosition": "200% center",
          },
        },
        "fade-in-up": {
          "0%": {
            "opacity": "0",
            "transform": "translateY(20px)",
          },
          "100%": {
            "opacity": "1",
            "transform": "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
