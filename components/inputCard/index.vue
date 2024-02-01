<template>
  <div class="container bg-white p-2">
    <div class="flex-center-between">

      <FormInput placeholder="Job tittle, Keyword...">
        <template #prefix>
          <i class="icon-search"></i>
        </template>
      </FormInput>
      <FormInput placeholder="Job tittle, Keyword...">
        <template #prefix>
          <i class="icon-search"></i>
        </template>
      </FormInput>
      <div class="flex-shrink-0">

        <FormSelect
            :list="selectObj"
            label-key="title"
            label="title"
            value-key="id"
            placeholder="tanlash"
            class=""
        ></FormSelect>
      </div>
      <div class="flex-shrink-0">

        <FormSelect
            :list="selectObj"
            label-key="title"
            label="title"
            value-key="id"
            placeholder="tanlash"
            class=""
        ></FormSelect>
      </div>
      <div class="flex-shrink-0">

        <Button text="Find Job"/>
      </div>
    </div>
  </div>

  <!--    <form class="input container mx-auto">-->
  <!--        <div class="input__box">-->
  <!--            <img src="/icons/search.svg" alt="" class="input__search-icon">-->
  <!--            <input type="search" class="input__search focus:ring-0 active:ring-0" placeholder="Search by: Job tittle, Position, Keyword...">-->
  <!--        </div>-->

  <!--        <div class="input__box">-->
  <!--            <img class="input__search-location" src="/icons/MapPinIcon.svg" alt="">-->
  <!--            <input type="search" class="input__search" placeholder="Manzilni Kiriting">-->
  <!--            <img src="/icons/BellRinging.svg" alt="" class="input__crosshair">-->
  <!--            <div class="input__btn-group">-->
  <!--                <button class="input__btn0">-->
  <!--                    <img src="/icons/filter.svg" alt="" class="input__btn-icon">-->
  <!--                    Filters-->
  <!--                </button>-->
  <!--                <button class="input__btn1">Qidirish</button>-->
  <!--            </div>-->
  <!--        </div>-->
  <!--    </form>-->
</template>

<script setup lang="ts">
const selectObj = ref([
  {title: "andijon", id: 1},
  {title: "fargona", id: 2},
  {title: "namangan", id: 3},
]);
</script>

<style scoped>
@import url(./input.scss);
</style>