<template>
  <div>
    <div @click="onOpen" class="cursor-pointer" tabindex="0">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <ul
      v-if="state && options?.length"
      class="bg-black/40 border border-white/30 backdrop-blur-lg rounded-xl p-2 absolute -translate-x-10 0 w-[100px] mt-4"
      :class="[optionsWrapperClass]"
    >
      <li
        v-for="(el, idx) in options"
        :key="idx"
        @click="onSelect(el)"
        :class="{ optionClass, 'bg-white/10': el.active }"
        class="rounded-lg transition-all gap-2 group cursor-pointer"
      >
        <slot :data="el" name="option">
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

interface Props {
  options: any[];
  title?: string;
  labelKey: string;
  valueKey: string;
  headerClass?: string;
  optionClass?: string;
  optionsWrapperClass?: string;
}
defineProps<Props>();

const emit = defineEmits<{
  (e: "on-click", value: any): void;
}>();
const state = ref(false);
const target = ref(null);

const onOpen = () => {
  state.value = !state.value;
};
const onSelect = (element: any) => {
  emit("on-click", element);
  state.value = false;
};
onClickOutside(target, (event) => (state.value = false));
</script>

<style scoped></style>
