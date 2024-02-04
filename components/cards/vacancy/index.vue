<template>
  <nuxt-link
      to="/jobs"
      class="vacancy"

  >
    <div class="vacancy__box-title">
      <h3 class="vacancy__title">{{ item.title }}</h3>
      <span class="vacancy__salary">Salary: {{ item.min }}$-{{ item.max }}$</span>

    </div>

    <div class="vacancy__box">
      <div class="vacancy__inner-box">
        <div class="logo-img">
          <img class="vacancy__logo" src="/icons/Employers Logo.svg" alt=""/>
        </div>
        <div class="">
          <h4 class="vacancy__inner-title">Google Inc.</h4>
          <div class="vacancy__address">
            <img src="/icons/fi_map-pin.svg" alt="" class="w-[12px]"/>
            <p class="ml-1">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <img class="vacancy__bookmark" src="/icons/BookmarkSimple.svg" alt=""/>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'
const recommend = ref(false);
import type {jobsCardType} from "~/types";

interface Props {
  item: jobsCardType
}

defineProps<Props>();
</script>

<style scoped lang="scss">
@import url(./card.scss);

.logo-img {
  border-radius: 4px;
  background: #edeff5;
  padding: 12px;
}
</style>
