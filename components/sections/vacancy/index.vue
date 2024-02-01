<template>
  <section class="vacancy">
    <div class="container vacancy-wrapper">
      <ui-title :title="$t('popular_vacancies')"/>

      <div class="vacancy-wrapper__content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 my-6">
        <div v-for="el in options" :key="el.id" class="vacancy-card">
          <h3 class="md:text-xl">{{ el.title }}</h3>
          <p class="vacancy-card__descr">{{ el.descr }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UiTitle from "~/components/ui/UiTitle.vue";

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
    //&__title {
    //  font-weight: 600;
    //  font-size: 40px;
    //}

    //&__content {
    //  display: grid;
    //  grid-template-columns: repeat(4, 23%);
    //  justify-content: space-between;
    //  margin-top: 20px;
    //  row-gap: 20px;
    //}
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
