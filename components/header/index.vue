<template>
  <header>
    <div class="navbar bg-gray-50">
      <div class="container flex-center-between">
        <nav class="flex-y-center gap-6 ">
          <nuxt-link v-for="el in navLink" :to="el.link"
                     class="text-sm hover:text-primary py-3 border-b-2 border-b-transparent hover:border-b-primary transition-200">
            {{
              el.title
            }}
          </nuxt-link>
        </nav>
        <div class="flex-y-center gap-4">
          <a href="tel:+998755550178"
             class="hidden lg:flex lg:flex-y-center gap-1 group hover:text-primary transition-200 text-sm text-gray-900">
            <i class="icon-call text-xl text-black group-hover:text-primary transition-200"></i>
            <span>+99875-555-01-78</span>
          </a>
          <LanguageSwitcher/>
        </div>
      </div>
    </div>
    <div class="container flex-center-between py-5">
      <div class="flex-y-center gap-8">
        <nuxt-link to="/" class="logo">
          <img src="/Logo.svg" alt="logo"
          /></nuxt-link>
        <div class="flex-y-center border border-gray-100 rounded-md py-2 px-6">
          <div class="hidden lg:block pr-5 border-r border-r-gray-100">
            <FormSelect
                :list="selectObj"
                label-key="title"
                label="title"
                value-key="id"
                placeholder="tanlash"
                class=""
            ></FormSelect>
          </div>
          <div class="lg:ml-5">
            <FormInput
                type="text"
                v-model="search"
                class="w-full"
                FormInput-class="!p-0 m-0"
                placeholder="Job tittle, keyword, company"
                prefix-icon="/icons/PhoneCall.svg"
            >
              <template #prefix>
                <i class="icon-search text-primary mr-2"></i>
              </template>
            </FormInput>
          </div>
        </div>
      </div>
      <div class="btn-group flex-y-center gap-3">
        <Button text="Sign in" variant="outline"/>
        <Button text="Post a Jobs"/>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import {navLink} from "@/constants/index";

const search = ref("");
const selectObj = ref([
  {title: "andijon", id: 1},
  {title: "fargona", id: 2},
  {title: "namangan", id: 3},
]);

// import { useAuthStore } from "~/stores/auth";
// const authStore = useAuthStore();
// const show = computed(() => authStore.modalShow);

const {t, locale} = useI18n();
const language = ref([
  {
    label: "O'zbekcha",
    code: "uz",
  },
  {
    label: "Ўзбекча",
    code: "uzc",
  },
  {
    label: "Русский",
    code: "ru",
  },
]);

const state = ref(false);
const currentLocale = computed(
    () => language.value.find((element) => element?.code === locale.value)?.label
);
const open = ref(false);
const openTags = () => {
  open.value = !open.value;
};
</script>
