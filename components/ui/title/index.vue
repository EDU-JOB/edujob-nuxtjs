<template>
  <div class="flex-center-between" :class="wrapperClass">
    <h2 class="text-light text-lg" :class="titleClass">
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
  wrapperClass?: string;
}
defineProps<Props>();
</script>
