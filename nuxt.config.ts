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
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["vue3-carousel-nuxt"],
});
