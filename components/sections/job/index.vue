<template>
  <section>
    <div class="container">
      <UiTitle :title="$t('featured_job')" :linkText="$t('view_all')" link="/jobs"/>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
        <CardsVacancy v-for="el in cards" :key="el.id" :item="el"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {jobsCard} from '~/constants';

const cards = jobsCard.filter((el, idx) => idx <= 5)
</script>

<style scoped lang="scss">
section {
  padding: 50px 0;

  .cards {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    justify-content: space-between;
    gap: 20px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 600;
    }
  }
}
</style>
