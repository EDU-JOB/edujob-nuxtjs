<template>
  <nuxt-link to="/job" class="vacancy">
    <div class="vacancy__box">
      <h3 class="vacancy__title">Senior UX Designer</h3>
      <span class="vacancy__category">PART-TIME</span>
      <span class="vacancy__salary">Salary: $20,000 - $25,000</span>
    </div>

    <div class="vacancy__box">
      <div class="logo-img">
        <img class="vacancy__logo" src="/icons/Employers Logo.svg" alt="" />
      </div>
      <div class="vacancy__inner-box">
        <div class="">
          <h4 class="vacancy__inner-title">Google Inc.</h4>
          <div class="vacancy__address">
            <img src="/icons/fi_map-pin.svg" alt="" class="w-[12px]" />
            <p class="ml-1">Dhaka, Bangladesh</p>
          </div>
        </div>

        <img class="vacancy__bookmark" src="/icons/BookmarkSimple.svg" alt="" />
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'

// interface Props {
//   title: string;
//   category: string;
//   salary: string;
//   img: string;
// }

// defineProps<Props>();
</script>

<style scoped>
@import url(./card.scss);

.logo-img {
  border-radius: 4px;
  background: var(--Gray-Scale-50, #edeff5);
  padding: 12px;
}
</style>
