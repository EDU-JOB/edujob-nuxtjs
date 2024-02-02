<template>
  <div class="container bg-white p-3 rounded-8">
    <div class="flex-center-between md:flex-column">

      <FormInput class="border-r border-r-solid " placeholder="Job tittle, Keyword...">
        <template #prefix>
          <i class="icon-search mr-1 text-primary"></i>
        </template>
      </FormInput>
      <FormInput class="border-r border-r-solid " placeholder="Job tittle, Keyword...">
        <template #prefix>
          <i class="icon-location mr-1 text-primary"></i>
        </template>
      </FormInput>
      <div class="flex-shrink-0 flex items-center pl-3">

          <i class="icon-category text-primary"></i>

        <FormSelect
            :list="selectObj"
            label-key="title"
            label="title"
            value-key="id"
            placeholder="Select Category"
            class="border-r border-r-solid"
        ></FormSelect>
      </div>
      <div class="flex-shrink-0">

        <FormSelect
            :list="selectObj"
            label-key="title"
            label="title"
            value-key="id"
            placeholder="Advance Filter"
            class="mr-3"
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