import ru from "./locales/ru.json";
import uz from "./locales/uz.json";
import en from "./locales/en.json";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "radix-vue/nuxt",
    "@element-plus/nuxt",
    "@nuxt/image",
    'nuxt-swiper'
  ],
  // i18n: {
  //   locales: ["ru", "uz", "en"],
  //   defaultLocale: "uz",
  //   vueI18n: {
  //     fallbackLocale: "uz",
  //     messages: {
  //       ru,
  //       uz,
  //       en
  //     },
  //   },
  //   // vueI18n: './i18n.config.ts', // if you are using custom path, default
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     redirectOn: "root", // recommended
  //     alwaysRedirect: true,
  //   },
  // },
  app: {
    head: {
      htmlAttrs: {
        lang: "uz",
      },
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1 , maximum-scale=1 , user-scalable=0",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
      ],
    },
  },
  css: ["~/assets/scss/index.scss"],
  components: [
    {
      path: "~/components/icons",
    },
    "~/components",
    "~/components/ui",
    "~/components/ui/modals",
    "~/components/layout",
    "~/components/containers",
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: "---",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  image: {
    inject: true,
    domains: ["https://pixum.photos"],
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
});
