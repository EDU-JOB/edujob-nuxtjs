<template>
  <section id="jobs">
    <div class="jobs__tab">
      <div class="container mx-auto flex justify-between">
        <h2 class="jobs__title">Ish O’rinlari</h2>
        <Breadcrumb :menu="menu"/>
      </div>
    </div>

    <inputCard/>
    <div class="container grid grid-cols-3 gap-3">
      <CardsVacancy v-for="(item, idx) in jobsCard" :item="item" :key="idx"/>
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
