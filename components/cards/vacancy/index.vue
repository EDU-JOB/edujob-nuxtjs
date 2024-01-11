<template>
  <nuxt-link
    to="/jobs"
    class="vacancy"
    :style="{
      background: item.recommend
        ? 'linear-gradient(90deg, #fff6e6 0%, #fff 100%), #fff'
        : '',
    }"
  >
    <div class="vacancy__box-title">
      <h3 class="vacancy__title">{{ item.title }}</h3>
      <span class="vacancy__category">{{ item.category }}</span>
      <span class="vacancy__salary">Salary: {{ item.salary }}</span>
    </div>

    <div class="vacancy__box">
      <div class="vacancy__inner-box">
        <div class="logo-img">
          <img class="vacancy__logo" src="/icons/Employers Logo.svg" alt="" />
        </div>
        <div class="">
          <h4 class="vacancy__inner-title">Google Inc.</h4>
          <div class="vacancy__address">
            <img src="/icons/fi_map-pin.svg" alt="" class="w-[12px]" />
            <p class="ml-1">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <img class="vacancy__bookmark" src="/icons/BookmarkSimple.svg" alt="" />
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'
const recommend = ref(false);
interface Props {
  item: {
    title: string;
    category: string;
    salary: string;
    img: string;
    recommend: boolean;
  };
}

defineProps<Props>();
</script>

<style scoped>
@import url(./card.scss);

.logo-img {
  border-radius: 4px;
  background: var(--Gray-Scale-50, #edeff5);
  padding: 12px;
}
</style>
