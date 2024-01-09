<template>
  <section class="work">
    <div class="container">
      <h2 class="work__title">How EdeJob work</h2>
      <div class="work__cards">
        <CardsWork v-for="el in options" :option="el" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props{
  options: {
    icon: string;
    title: string;
    descr: string;
  }[];
}
defineProps<Props>();
</script>

<style scoped>
.work {
  background: var(--Gray-50, #f1f2f4);
  padding: 50px 0;
  &__title {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
}
</style>
