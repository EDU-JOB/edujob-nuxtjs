<template>
  <section>
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div
          v-for="el in registerCard"
          class="card bg-center bg-cover bg-no-repeat p-6 md:p-8"
          :class="`bg-[url('${el.bg}')]`"
          :style="{ backgroundImage: el.bg }"
      >
        <h2 class="text-xl sm:text-2xl md:text-3xl">{{ el.title }}</h2>
        <p class="md:text-3/4 text-sm md:text-base text-gray my-2">
          {{ el.descr }}
        </p>
        <nuxt-link :to="el.link">
          <Button :text="$t('register_now')" variant="light" :adaptive="true"/>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {registerCard} from "~/constants";
</script>

<style scoped lang="scss">
section {
  padding: 50px 0;

  .cards {
    display: flex;
    gap: 24px;
  }

  .card {

    border-radius: 12px;
    background: url("/register-bg-man.png");
    background-position: center;
    background-size: cover;

  }
}
</style>
