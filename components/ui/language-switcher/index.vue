<template>
  <div class="flex items-center relative">
    <div ref="list" @click="state = !state" :class="wrapperClass" class="cursor-pointer flex-y-center gap-3 ">
      <img :src="currentLanguage?.flag" class="h-4 aspect-video" :alt="currentLanguage?.name + 'flag'">
      <p

          class="flex-y-center"
      >
        {{ currentLanguage?.name }}
        <i class="icon-chevron-down  text-xl mx-2 transition-200"
           :class="{'rotate-180 transition-200':state}"></i>
      </p>
    </div>

    <ul

        v-if="state"
        :class="listClass"
        class="z-50 border border-gray-100 shadow-md absolute translate-y-20 rounded-lg  overflow-hidden right-0"
    >
      <li
          v-for="element in languagesList"
          @click="[changeLocale(element.code), state = false]"
          :class="{'!bg-primary-50':element.name == currentLanguage?.name}"
          class=" flex-y-center gap-2 border-b border-b-gray-100 last:border-b-0 text-sm cursor-pointer bg-white hover:bg-primary-100 p-2 "
      >
        <img :src="element?.flag" :alt="element?.name + 'flag'" class="h-4 aspect-video object-cover">
        <p>{{ element?.name }}</p>
      </li>
    </ul>
  </div>

</template>
<script setup lang="ts">
import {onClickOutside} from '@vueuse/core'
import {useLanguageSwitcher,} from "~/composables/useLanguageSwitcher";

const {changeLocale, currentLanguage, languagesList} = useLanguageSwitcher();

const state = ref(false);
const list = ref(null)
onClickOutside(list, () => state.value = false)

interface Props {
  wrapperClass?: string
  listClass?: string
}

defineProps<Props>()
</script>
