<template>
  <div>
    <div class="bg-gray-50">
      <div class="container flex-center-between">
        <div class="flex-y-center gap-4 h-12">
          <a href="tel:+998755550178"
             class="hidden sm:flex sm:flex-y-center gap-1 group hover:text-blue transition-200 text-sm text-gray-900">
            <i class="icon-call text-xl text-black group-hover:text-blue transition-200"></i>
            <span>+99875-555-01-78</span>
          </a>
          <LanguageSwitcher list-class="!left-0"/>
        </div>
        <div @click="state = !state" class="cursor-pointer">
          <i class="icon-menu text-gray-900 text-2xl"></i>
          <!--          <i v-else class="icon-close text-gray-900 text-2xl"></i>-->
        </div>
      </div>
    </div>
    <div class="container flex-center-between py-5 border-b border-b-gray-100">
      <nuxt-link to="/">
        <img src="/Logo.svg" alt="">
      </nuxt-link>
      <div class="flex-y-center gap-4">
        <i class="icon-search text-xl text-gray-900"></i>
        <div class="btn-group flex-y-center gap-3">
          <Button :text="$t('sign')" size="sm" variant="outline" class="max-sm:hidden"/>
          <Button :text="$t('post_job')" size="sm"/>
        </div>
      </div>
    </div>
    <Transition name="fade" mode="out-in">
      <div :class="{'!left-0  transition-200 bg-red opacity-100 ':state}"
           class="lg:hidden fixed container  -left-full opacity  transition-200 z-40 bg-white w-full h-full rounded-b-6 overflow-y-auto">
        <div class="flex flex-col ">
          <router-link v-for="(el, idx) in navLink" :key="idx" :to="el.link"
                       class="py-2 border-b border-b-gray-100 last:border-b-0">
            {{ el.title }}
          </router-link>
        </div>
        <div class="flex-y-center gap-4 mt-5">
          <Button variant="primary" :text="t('register_now')" size="sm"/>
          <Button variant="outline" :text="t('sign')" size="sm"/>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import {navLink} from "~/constants";
import {useI18n} from "vue-i18n";

const route = useRoute()
const {t} = useI18n()
const search = ref("");
const state = ref(false)
watch(
    () => state.value,
    (val) => {
      state.value
          ? (document.body.style.overflowY = "hidden")
          : (document.body.style.overflowY = "auto");
    }
);
watch(
    () => route.path,
    () => {
      state.value = false
      
    }
)
</script>
<style lang="scss">
@import url("./index.scss");

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  filter: grayscale(1);
}

.router-link-exact-active {
  color: var(--el-color-primary);
}
</style>
