<template>
  <header>
    <div class="navbar bg-gray-50">
      <div class="container flex-center-between">
        <nav class="flex-y-center gap-6 ">
          <nuxt-link v-for="el in navLink" :to="el.link"
                     class="text-sm hover:text-blue py-3 border-b-2 border-b-transparent hover:border-b-blue transition-200">
            {{
              el.title
            }}
          </nuxt-link>
        </nav>
        <div class="flex-y-center gap-4">
          <a href="tel:+998755550178"
             class="hidden lg:flex lg:flex-y-center gap-1 group hover:text-blue transition-200 text-sm text-gray-900">
            <i class="icon-call text-xl text-black group-hover:text-blue transition-200"></i>
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
            <Select
                :options="options"
                class="!p-0 !m-0   !focus:border-none"
            />
          </div>
          <div class="lg:ml-5">
            <Input
                type="text"
                v-model="search"
                class="w-full"
                input-class="!p-0 m-0"
                placeholder="Job tittle, keyword, company"
                prefix-icon="/icons/PhoneCall.svg"
            >
              <template #prefix>
                <i class="icon-search text-blue mr-2"></i>
              </template>
            </Input>
          </div>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="primary" plain>Sign in</el-button>
        <el-button type="primary">Post a Jobs</el-button>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import {navLink} from "@/constants/index";

const search = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
    img: "",
  },
  {
    value: "Option2",
    label: "Option2",
  },
];
</script>
