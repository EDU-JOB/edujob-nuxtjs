<template>
  <div class="flex-center-between mb-6" :class="wrapperClass">
    <h2 class="font-semibold text-gray-900 text-2xl md:text-3xl lg:text-4xl" :class="titleClass">
      {{ title }}
    </h2>
    <slot>
      <nuxtLink
          v-if="linkText"
          :to="link"
          class="text-gray flex-y-center gap-2 hover:text-blue transition-all cursor-pointer"
      >
        <Button :text="linkText" variant="outline" :adaptive="true" size="sm">
          <template #suffix><i class="icon-arrow-right text-sm"></i></template>
        </Button>
      </nuxtLink>
    </slot>
  </div>
</template>

<script setup lang="ts">
import {useI18n} from "vue-i18n";

const {t} = useI18n()

interface Props {
  link?: string;
  linkText?: string;
  title: string;
  titleClass?: string;
  wrapperClass?: string;
}

defineProps<Props>();
</script>
