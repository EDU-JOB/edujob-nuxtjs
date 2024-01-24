<template>
  <footer>
    <div class="container footer-wrapper">
      <div class="footer-content">
        <nuxt-link to="/">
          <img src="/footer-logo.svg" alt="" />
        </nuxt-link>
        <p class="call">Call now: <span>+99875-555-01-78</span></p>
        <p>Chilonzor-7 Tashkent Uzbekistan 180600</p>
      </div>
      <div v-for="el in footerLink" class="footer-link">
        <h2>{{ el.title }}</h2>
        <div class="footer-link__wrapper">
          <nuxt-link v-for="link in el.links" :to="link.path">
            <img src="/icons/fi_arrow-right.svg" alt="" />
            <span>{{ link.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="socail">
      <div class="container">
        <p>@ 2024 EduJob - Job Portal. All rights Rserved from impria_agency</p>
        <div class="footer-social">
          <a v-for="el in footerSocial" :href="el.path"
            ><img :src="el.icon" alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerLink, footerSocial } from "@/constants/index";
</script>

<style scoped>
@import url("./style.scss");
</style>
