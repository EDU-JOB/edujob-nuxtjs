<template>
  <section>
    <div class="container">
      <div class="title">
        <h2 class="job-title">Featured job</h2>
        <el-button type="primary" plain>Batafsil</el-button>
      </div>
      <div class="cards">
        <CardsVacancy v-for="el in 12" :key="el" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
