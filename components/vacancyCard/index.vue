<template>
  <li class="vacancy">
    <div class="vacancy__box">
      <h3 class="vacancy__title">{{ item.title }}</h3>
      <span class="vacancy__category">{{ item.category }}</span>
      <span class="vacancy__salary">Salary: {{ item.salary }}</span>
    </div>

    <div class="vacancy__box">
      <img class="vacancy__logo" src="@/assets/images/logo.svg" alt="" />

      <div class="vacancy__inner-box">
        <div class="">
          <h4 class="vacancy__inner-title">Google Inc.</h4>
          <span class="vacancy__address">
            <img class src="@/assets/images/MapPin.svg" alt="" />
            Dhaka, Bangladesh
          </span>
        </div>

        <img
          class="vacancy__bookmark"
          src="@/assets/images/Bookmark.svg"
          alt=""
        />
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue'

interface Props {
  item: {
    title: string;
    category: string;
    salary: string;
    img: string;
  };
}

defineProps<Props>();
</script>

<style scoped>
@import url(./card.scss);
</style>
