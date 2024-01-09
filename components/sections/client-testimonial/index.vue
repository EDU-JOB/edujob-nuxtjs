<template>
  <section class="">
    <div class="container">
      <div class="title">
        <h2>Clients Testimonial</h2>
      </div>
      <div class="mt-4 px-12">
        <CardsTestimonial :options="mainSwiperData" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mainSwiperData } from "~/constants";
</script>

<style scoped>
section {
  padding: 50px 0;
  background-color: #f1f2f4;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }
}
</style>
