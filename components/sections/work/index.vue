<template>
  <section class="work">
    <div class="container">

      <ui-title :title="$t('work_section_title')" wrapper-class=" !justify-center"/>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md: mt-6">
        <CardsWork v-for="el in options" :option="el"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Props {
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
  padding: 50px 0;

  &__title {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }


}
</style>
