<template>
  <div :class="switcherClass" class="reltive">
    <Dropdown
      :options="languageSwitcherData"
      value-key="descr"
      label-key="title"
      class-name="right-0"
      optionsWrapperClass="grid grid-cols-1 gap-1  right-0 left-auto bg-black/40"
    >
      <template #header>
        <div class="flex items-center">
          <img
            :src="currentLocale?.img"
            alt="uk-icon"
            class="cursor-pointer w-[40px]"
          />
          <span class="text-sm font-medium md:hidden ml-2">
            {{ currentLocale?.title }}
          </span>
        </div>
      </template>
      <template v-slot:option="slotData">
        <div
          @click="$i18n.locale = slotData.data.locale"
          class="text-white flex items-center justify-between gap-x-2 p-2 rounded-lg hover:bg-white/10 group transition-all"
          :class="{ 'bg-white/10 ': $i18n.locale == slotData.data.locale }"
        >
          <div class="flex items-center gap-1">
            <img
              :src="slotData.data.img"
              :alt="slotData.data.title"
              class="w-[50px]"
            />
            <h2>
              {{ slotData.data.title }}
            </h2>
          </div>
          <div
            class="opacity-0"
            :class="{ 'opacity-100': $i18n.locale == slotData.data.locale }"
          >
            <i class="fas fa-check"></i>
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { languageSwitcherData } from "@/constants/index";

import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale } = useI18n();
interface Props {
  switcherClass?: string;
}
defineProps<Props>();

// const currentLocale = languageSwitcherData[0]

const currentLocale = computed(() =>
  languageSwitcherData.find((element) => element?.locale === locale.value)
);
</script>

<style scoped></style>
