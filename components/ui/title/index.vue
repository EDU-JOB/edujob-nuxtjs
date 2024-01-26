<template>
  <div class="flex-center-between">
    <h2 class=" text-xl md:text-2xl lg:text-4xl" :class="titleClass">
      {{ title }}
    </h2>
    <slot>
      <nuxtLink
          v-if="linkText"
          :to="link"
          class="text-gray flex-y-center gap-1 hover:text-blue transition-all cursor-pointer"
      >
        <span class="font-normal">{{ linkText }}</span
        ><i class="icon-chevron-right"></i>
      </nuxtLink>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  link?: string;
  linkText?: string;
  title: string;
  titleClass?: string;
}

defineProps<Props>();
</script>
