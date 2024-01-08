<template>
    <section>
         <div class="container">
         <!-- Home page h1 replace content -->
         <h1>Home page</h1></div>
    </section>
</template>

<script setup lang="ts">
import type {NavLinkType} from "../types"

const data = ref<NavLinkType>({
    link: "/about",
    path: "/about",
    icon: "mana"
});

</script>

<style scoped>

</style>