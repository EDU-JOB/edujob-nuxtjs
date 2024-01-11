<template>
  <section>
    <div class="container cards">
      <div
        v-for="el in registerCard"
        class="card bg-center bg-cover bg-no-repeat"
        :class="`bg-[url('${el.bg}')]`"
        :style="{ backgroundImage: el.bg }"
      >
        <h2>{{ el.title }}</h2>
        <p>
          {{ el.descr }}
        </p>
        <nuxt-link :to="el.link">
          <el-button>Register now</el-button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { registerCard } from "~/constants";
</script>

<style scoped lang="scss">
section {
  padding: 50px 0;
  .cards {
    display: flex;
    gap: 24px;
  }
  .card {
    padding: 50px;
    border-radius: 12px;
    h2 {
      font-size: 32px;
      font-weight: 600;
    }
    p {
      width: 50%;
      font-size: 14px;
      color: #636a80;
      padding: 16px 0;
    }
  }
}
</style>
