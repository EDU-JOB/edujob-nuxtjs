<template>
  <footer class="">
    <div class="container flex flex-col lg:flex-row gap-6">
      <div class="footer-content pt-8">
        <nuxt-link to="/">
          <img src="/footer-logo.svg" alt=""/>
        </nuxt-link>
        <p class="call">Call now: <span>+99875-555-01-78</span></p>
        <p>Chilonzor-7 Tashkent Uzbekistan 180600</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8">
        <div v-for="el in footerLink" class="">
          <h2 class="text-light sm:text-xl md:sm:text-2xl font-bold">{{ el.title }}</h2>
          <div class="text-gray flex flex-col gap-1 md:gap-2 mt-2 md:mt-4">
            <nuxt-link v-for="link in el.links" :to="link.path" class="flex-y-center group gap-2 text-sm md:text-base">
              <i class="icon-arrow-right text-light my-auto opacity-0 -translate-x-4 group-hover:-translate-x-0 group-hover:opacity-100 transition-200"></i>
              <span class="-translate-x-5 group-hover:-translate-x-0 transition-200">{{ link.title }}</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 border-t border-t-gray-100">
      <div class="container flex flex-col md:flex-row justify-center md:justify-between">
        <p class="text-sm md:text-base text-center md:text-start">@ 2024 EduJob - Job Portal. All rights Rserved from
          impria_agency</p>
        <div class="flex gap-4 justify-center mt-4">
          <a v-for="el in footerSocial" :href="el.path"
          ><i :class="el.icon" class="icon-facebook text-gray hover:text-blue md:text-lg"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {footerLink, footerSocial} from "@/constants/index";
</script>

<style scoped>
@import url("./style.scss");
</style>
