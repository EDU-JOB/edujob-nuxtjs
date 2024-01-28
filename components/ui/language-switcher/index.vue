<template>
  <div class="flex items-center relative">
    <div @click="state = !state" class="cursor-pointer flex-y-center gap-3 ">
      <img :src="currentLanguage?.flag" class="h-4" :alt="currentLanguage?.name + 'flag'">
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
        class="border border-dark-350  absolute translate-y-20 rounded-lg  overflow-hidden right-0"
    >
      <li
          v-for="element in languagesList"
          @click="[changeLocale(element.code), state = false]"
          :class="{'bg-gray-300':element.name == currentLanguage.name}"
          class=" flex-y-center gap-2 border-b border-b-gray-400 last:border-b-0 text-sm cursor-pointer bg-gray-200 hover:bg-gray-300 p-2 "
      >
        <img :src="element?.flag" :alt="element?.name + 'flag'" height="16px" class="h-4">
        <p>{{ element?.name }}</p>
      </li>
    </ul>
  </div>

</template>
<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {useLanguageSwitcher,} from "~/composables/useLanguageSwitcher";

const {changeLocale, currentLanguage, languagesList} = useLanguageSwitcher();


const {t, locale} = useI18n();

const state = ref(false);
// const currentLocale = computed(
//     () => language.value.find((element) => element?.code === locale.value)?.label
// );
// const open = ref(false);
// const openTags = () => {
//   open.value = !open.value;
// };
</script>
<!--<script lang="ts" setup>-->
<!--import {ref} from "vue";-->
<!--import {useI18n} from "vue-i18n";-->
<!--import {useMediaQuery} from "@vueuse/core";-->

<!--const {locale} = useI18n();-->
<!--console.log(locale)-->

<!--interface ILanguage {-->
<!--  value: string;-->
<!--  name: string;-->
<!--}-->

<!--interface Props {-->
<!--  showIcon?: boolean;-->
<!--  headerClass?: string;-->
<!--  buttonClass?: string;-->
<!--  withIcon?: boolean;-->
<!--}-->

<!--defineProps<Props>();-->

<!--const _locale = useCookie("locale")-->

<!--const languageList = ref<ILanguage[]>([-->
<!--  {value: "uz", name: "O'zbekcha"},-->
<!--  {value: "uzc", name: "Ўзбекча"},-->
<!--  {value: "ru", name: "Русский"},-->
<!--]);-->

<!--const activeLanguage = ref<ILanguage | undefined>({-->
<!--  value: "uz",-->
<!--  name: "O'zbekcha",-->
<!--});-->
<!--const dropDownActive = ref(false);-->

<!--const changeLanguage = (item: { value: string; name: string }) => {-->
<!--  console.log('cange locale')-->
<!--  _locale.value = item.value;-->

<!--  dropDownActive.value = false;-->
<!--  if (activeLanguage.value?.value !== item.value) {-->
<!--    window.location.reload();-->
<!--  }-->
<!--};-->

<!--// locale.value = _locale.value-->
<!--activeLanguage.value =-->
<!--    languageList.value.find((language) => language.value === locale.value) ||-->
<!--    languageList.value[0];-->
<!--console.log(locale.value)-->
<!--const isMobile = useMediaQuery("(max-width: 600px)");-->
<!--</script>-->
