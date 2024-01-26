<template>
  <div class="wrapper">
    <Header class="hidden md:block"/>
    <HeaderResponsiveHeader class="md:hidden"/>
    <div class="slot">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .slot {
    flex-grow: 1;
  }
}
</style>
