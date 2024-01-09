<template>
  <div class="work-card">
    <div class="work-card__icon">
      <img :src="option.icon" alt="" />
    </div>
    <h2 class="work-card__title">{{ option.title }}</h2>
    <p class="work-card__descr">
      {{ option.descr }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  option: {
    icon: string;
    title: string;
    descr: string;
  };
}
defineProps<Props>();
</script>

<style scoped>
.work-card {
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s all;
  &__icon {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-size: 18px;
    margin-top: 12px;
    text-align: center;
    font-weight: 600;
  }
  &__descr {
    font-size: 14px;
    text-align: center;
  }
}
.work-card:hover {
  background: #fff;
  transition: 0.3s ease-in-out;
}
</style>
