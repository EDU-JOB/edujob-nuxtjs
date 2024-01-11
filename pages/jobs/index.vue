<template>
  <section id="jobs">
    <div class="jobs__tab">
      <div class="container mx-auto flex justify-between">
        <h2 class="jobs__title">Ish O’rinlari</h2>
        <div class="jobs__navi">
          <span class="jobs__navi-link">home</span>
          <span class="jobs__navi-link active">/ Jobs</span>
        </div>
      </div>
    </div>

    <inputCard />

    <ul class="container mx-auto jobs__list">
      <nuxt-link
        v-for="item in obj"
        :key="item.title"
        :to="{ params: { slug: item.title } }"
      >
        <VacancyCard :item="item" />
      </nuxt-link>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { obj } from "@/constants";
</script>

<style scoped>
@import url(./index.scss);
</style>
