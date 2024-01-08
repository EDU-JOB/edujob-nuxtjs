<template>
  <div>
    <div @click="onOpen" class="cursor-pointer" tabindex="0">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <ul
      v-if="state && options?.length"
      class="bg-white/20 border border-white/30 backdrop-blur-lg rounded-xl p-2 absolute w-auto mt-4"
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
          <div
            class="rounded-lg transition-all flex items-center gap-2 p-2 hover:bg-white/10"
          >
            <img :src="el.img" alt="" class="" />
            <div class="text-white">
              <h3 class="text-base group-hover:text-red-500 transition-all">
                {{ el[labelKey] }}
              </h3>
              <p class="text-sm opacity-60">{{ el[valueKey] }} destinations</p>
            </div>
          </div>
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
const onSelect = (element) => {
  emit("on-click", element);
  state.value = false;
};
onClickOutside(target, (event) => (state.value = false));
</script>

<style scoped></style>
