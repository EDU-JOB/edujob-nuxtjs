<template>
  <section class="vacancy">
    <div class="container vacancy-wrapper">
      <h2 class="vacancy-wrapper__title">Oma Bop Vakansiyalar</h2>
      <div class="vacancy-wrapper__content">
        <div v-for="el in options" :key="el.id" class="vacancy-card">
          <h3 class="vacancy-card__title">{{ el.title }}</h3>
          <p class="vacancy-card__descr">{{ el.descr }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  options: {
    id: number;
    title: String;
    descr: string;
  }[];
}
defineProps<Props>();
</script>

<style scoped lang="scss">
$light-gray: #e4e5e8;
$dark-gray: #5e6670;
$dark: #18191c;
.vacancy {
  padding: 50px 0;
  .vacancy-wrapper {
    &__title {
      font-weight: 600;
      font-size: 40px;
    }
    &__content {
      display: grid;
      grid-template-columns: repeat(4, 23%);
      justify-content: space-between;
      margin-top: 20px;
      row-gap: 20px;
    }
  }
}
.vacancy-card {
  &__title {
    font-size: 18px;
    color: $dark;
  }
  &__descr {
    font-size: 14px;
    color: #767f8c;
    margin-top: 4px;
  }
}
.vacancy-card:hover .vacancy-card__title {
  color: #0a65cc;
  text-decoration: underline;
  transition: 0.3s all;
}
</style>
