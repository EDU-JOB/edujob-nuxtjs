<template>
  <section id="intro">
    <div class="container flex flex-col-reverse lg:flex-row flex-center-between  gap-6 lg:gap-8 ">
      <div>
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold ">
          {{ t('intro_title') }}
        </h1>
        <p class="text-sm md:text-base my-4">
          {{ t('intro_descr') }}
        </p>
        <div class="md:inline-block">
          <div class="form flex flex-col md:flex-row gap-4 p-3 bg-white rounded-lg border border-gray-100">
            <FormInput
                v-model="jobTitle"
                :placeholder="$t('search_job_placeholder')"
                type="text"
            >
              <template #prefix>

                <i class="icon-search text-primary mr-2 text-xl"></i>
              </template>
            </FormInput>
            <FormInput
                :placeholder="$t('search_location')"
                v-model="address"
                type="text"
            >
              <template #prefix>
                <i class="icon-location text-primary mr-2 text-xl"></i>
              </template>
            </FormInput>
            <Button :text="$t('search')"/>
          </div>
        </div>
        <p class="text-sm md:text-base mt-4">
          <span class="text-gray-300">{{ t('directions') }}</span> : Design, Programing,
          <span class="text-primary">Digital Marketing</span>, Video,
          Animation.
        </p>
      </div>
      <img src="/Illustration.svg" alt="intro-illustration" class="intro-img"/>
    </div>
    <div class="container grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-6">
      <CardsDirections v-for="el in directionsCard" :key="el.id" :options="el"/>
    </div>
  </section>
</template>
<script setup lang="ts">
import {directionsCard} from "~/constants";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const jobTitle = ref("");
const address = ref("");
</script>