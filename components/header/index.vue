<template>
  <header>
    <div class="navbar">
      <div class="container wrapper">
        <nav>
          <nuxt-link v-for="el in navLink" :to="el.link">{{
            el.title
          }}</nuxt-link>
        </nav>
        <div class="">
          <a href="tel:+998755550178">
            <!-- <img src="/icons/PhoneCall.svg" alt="" /> -->
            <i class="icon-database-duotone-1 text-xl text-black"></i>
            <span>+99875-555-01-78</span>
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
    <div class="container main-header">
      <div class="logo-wrapper">
        <nuxt-link to="/" class="logo">
          <img src="/Logo.svg" alt="logo"
        /></nuxt-link>
        <div class="search-wrapper">
          <Select
            :options="options"
            class="!p-0 !m-0 !pr-5 border-r !focus:border-none"
          />
          <div class="search">
            <Input
              type="text"
              v-model="search"
              class="ml-5 w-[400px]"
              input-class="!p-0 m-0"
              placeholder="Job tittle, keyword, company"
              prefix-icon="/icons/PhoneCall.svg"
            >
              <template #prefix>
                <img
                  src="/icons/fi_search.svg"
                  alt="search-icon"
                  class="mr-3"
                />
              </template>
            </Input>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="primary" plain>Sign in</el-button>
        <el-button type="primary">Post a Jobs</el-button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { navLink, languageSwitcherData } from "@/constants/index";

const search = ref("");
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
<style scoped>
@import url("./index.scss");
</style>
