<template>
  <div>
    <div class="bg-gray-50">
      <div class="container flex-center-between">
        <div class="flex-y-center gap-4 h-12">
          <a href="tel:+998755550178"
             class="hidden sm:flex sm:flex-y-center gap-1 group hover:text-blue transition-200 text-sm text-gray-900">
            <i class="icon-call text-xl text-black group-hover:text-blue transition-200"></i>
            <span>+99875-555-01-78</span>
          </a>
          <LanguageSwitcher switcher-class="!-translate-x-0 gap-1"/>
        </div>
        <div @click="state = !state" class="cursor-pointer">
          <i class="icon-menu text-gray-900 text-2xl"></i>
        </div>
      </div>
    </div>
    <div class="container flex-center-between py-5 border-b border-b-gray-100">
      <nuxt-link to="/">
        <img src="/Logo.svg" alt="">
      </nuxt-link>
      <div class="flex-y-center gap-4">
        <i class="icon-search text-xl text-gray-900"></i>
        <div class="hidden sm:block">
          <el-button type="primary" plain>Sign in</el-button>
        </div>
        <div>
          <el-button type="primary">Post a Jobs</el-button>
        </div>
      </div>
    </div>
    <Transition name="fade" mode="out-in">
      <div v-if="state" class="lg:hidden fixed top-0 lef-0 z-20 bg-white w-full max-h-screen overflow-y-auto">
        <div class="border-b border-gray-600 p-4 w-[95%] my-4 m-auto">
          <div @click="state = !state" class="cursor-pointer text-gray-900">
            <i class="icon-close"></i>
          </div>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            Asosiy
            <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            Yangiliklar <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            Kurslar <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            Kutuboxona <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            Bog'lanish <i class="icon-chevron-right text-2xl"></i>
          </p>
        </div>
        <div class="p-4 w-[95%] my-4 m-auto">
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            <span class="flex items-center">
              <i class="icon-notification text-2xl mr-2"></i> Xabarnomalar</span
            >
            <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            <span class="flex items-center">
              <i class="icon-shopping-cart text-2xl mr-2"></i> Savatcha</span
            >
            <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            <span class="flex items-center">
              <i class="icon-log-in text-2xl mr-2"></i> Kirish</span
            >
            <i class="icon-chevron-right text-2xl"></i>
          </p>
          <p
              class="py-3 px-4 flex items-center justify-between bg-dark-300 my-2 rounded-12 cursor-pointer"
          >
            <span class="flex items-center">
              <i class="icon-globe text-2xl mr-2"></i> O'zbekcha</span
            >
            <i class="icon-chevron-down text-2xl"></i>
          </p>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">

const search = ref("");
const state = ref(false)
watch(
    () => state.value,
    (val) => {
      state.value
          ? (document.body.style.overflowY = "hidden")
          : (document.body.style.overflowY = "auto");
    }
);
const options = [
  {
    value: "Option1",
    label: "Option1",
    img: "",
  },
  {
    value: "Option2",
    label: "Option2",
  },
];
</script>
<style>
@import url("./index.scss");


</style>
