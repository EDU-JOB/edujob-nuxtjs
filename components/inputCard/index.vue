<template>
    <form class="input container mx-auto">
        <div class="input__box">
            <img src="@/assets/images/search.svg" alt="" class="input__search-icon">
            <input type="search" class="input__search focus:ring-0 active:ring-0" placeholder="Search by: Job tittle, Position, Keyword...">
        </div>

        <div class="input__box">
            <img class="input__search-location" src="@/assets/images/MapPinIcon.svg" alt="">
            <input type="search" class="input__search" placeholder="Manzilni Kiriting">
            <img src="@/assets/images/crosshair.svg" alt="" class="input__crosshair">
            <div class="input__btn-group">
                <button class="input__btn0">
                    <img src="@/assets/images/filter.svg" alt="" class="input__btn-icon">
                    Filters
                </button>
                <button class="input__btn1">Qidirish</button>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import url(./input.scss);
</style>