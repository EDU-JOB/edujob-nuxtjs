<template>
  <label
      class="text-sm font-semibold text-gray-100"
      :class="labelClass"
      :for="forText"
  >
    {{ label }}
  </label>
</template>
<script setup lang="ts">
interface Props {
  label: string
  labelClass?: string
  forText?: string
}
const props = withDefaults(defineProps<Props>(), {})
</script>
