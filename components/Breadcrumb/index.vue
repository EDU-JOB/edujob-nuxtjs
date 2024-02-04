<template>
  <div class="bg-transparent py-3 hidden-on-print overflow-x-hidden">
    <div
        class="mx-auto container md:!px-11 flex items-center md:overflow-hidden"
    >
      <NuxtLink
          to="/"
          class="flex items-center mr-2 text-[#6D7274] font-semibold leading-130 text-sm hover:text-gray-900 transition duration-300"
      >
        <p>{{ $t("main") }}</p>
      </NuxtLink>
      <div
          v-for="(item, index) in menu"
          :key="index"
          class="flex items-center mr-2"
      >
        <span class="mr-2">/</span>
        <NuxtLink
            :to="item?.link"
            :class="{
            'pointer-events-none': index === menu.length - 1,
            '!text-[#6D7274]': index < menu.length - 1,
          }"
            class="transition-200 flex cursor-pointer items-center text-text-gray-900 font-semibold hover:text-gray-900 leading-130 min-w-max text-sm  breadcrumb-menu"
        >
          {{ item?.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { TMenu } from "~/types/common";

interface Props {
  menu: any[];
}

defineProps<Props>();
</script>
<style scoped>
.icon-union {
  box-shadow: inset -1.5px 0 0 rgba(0, 0, 0, 0.18);
}
</style>
