<template>
  <section class="p-0">
    <div class="pt-6 pb-6">
      <div class="container flex items-center justify-between mb-5">
        <h2 class="text-#18191c] leading-7 font-medium text-lg">Find Job</h2>
        <Breadcrumb :menu="menu"/>
      </div>

      <div class="container">
        <inputCard/>
      </div>
    </div>

    <div class="bg-white">
      <div class="container grid grid-cols-3 gap-4 pb-16 pt-5 md:grid-cols-2 sm:grid-cols-1" >
        <CardsVacancy v-for="(item, idx) in jobsCard" :item="item" :key="idx"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import {jobsCard} from "@/constants";

const menu = computed(() => [
  {link: '/jobs', title: 'Find job'}
])
</script>

<style scoped>
/* @import url(./index.scss);*/
</style>
