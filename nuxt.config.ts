import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  app: {
    head: {
      title: "Bandara Mutiara SIS Al-Jufri - Bandara Mutiara Palu",
      htmlAttrs: {
        lang: "id",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      script: [
        {
          src: "//www.instagram.com/embed.js",
          async: true,
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["vue3-carousel-nuxt", "@nuxt/icon"],
});
