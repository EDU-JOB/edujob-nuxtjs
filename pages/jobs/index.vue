<template>
  <section id="jobs">
    <div class="container">

      <div class="jobs__tab">
        <div class=" mx-auto flex justify-between">
          <h2 class="jobs__title">Ish O’rinlari</h2>
          <Breadcrumb :menu="menu"/>
        </div>
      </div>

      <inputCard class="mb-6"/>
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
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
@import url(./index.scss);
</style>
