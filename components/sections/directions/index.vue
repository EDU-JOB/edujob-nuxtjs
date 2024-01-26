<template>
  <section class="direction">
    <div class="container">
      <div class="direction-title">
        <h2>Oma Bop Yo’nalishlar</h2>
        <el-button type="primary" plain
        >Batafsil <img src="/icons/fi_arrow-right.svg" alt=""
        /></el-button>
      </div>
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <CardsDirections
            v-for="el in directionList"
            :options="el"
            title-class="!text-lg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {directionList} from "~/constants";
</script>

<style scoped lang="scss">
.direction {
  padding: 50px 0;

  .direction-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 40px;
      font-weight: 600;
    }
  }

  .direction-cards {
    display: grid;
    grid-template-columns: repeat(4, 24%);
    justify-content: space-between;
    row-gap: 20px;
    margin-top: 20px;
  }
}
</style>
