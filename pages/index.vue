<template>
  <section id="intro">
    <div class="container intro">
      <div>
        <h1 class="intro__title">
          qobiliyatlaringizga mos keladigan ish toping.
        </h1>
        <p class="intro__descr">
          EduJob: Ma'naviy va Texnologik Rivojlanishga Qiziqarli O'qitishga
          Mo'ljallangan Dastur
        </p>
        <div class="inline-block">
          <div class="form">
            <Input
              v-model="jobTitle"
              placeholder="Job tittle, Keyword..."
              type="text"
              class="form__job-input"
            >
              <template #prefix>
                <img src="/icons/fi_search.svg" alt="" class="mr-3 w-6 h-6" />
              </template>
            </Input>
            <Input
              placeholder="Manzilni Kiriting"
              v-model="address"
              type="text"
              class="form__address-input"
            >
              <template #prefix>
                <img src="/icons/fi_map-pin.svg" alt="" class="mr-3" />
              </template>
            </Input>
            <el-button type="primary" size="large">Qidirsh</el-button>
          </div>
        </div>
        <p class="intro__directions">
          <span class="opacity-50">Yo’nalishlar</span> : Designer, Programing,
          <span class="text-blue-700">Digital Marketing</span>, Video,
          Animation.
        </p>
      </div>
      <img src="/Illustration.svg" alt="" class="intro-img" />
    </div>
    <div class="container cards">
      <CardsDirections v-for="el in directionsCard" :options="el" />
    </div>
  </section>
  <SectionsVacancy :options="vacansyList" />
  <SectionsWork :options="workCardList" />
  <SectionsDirections />
  <SectionsJob />
  <SectionsCompany />
  <SectionsClientTestimonial :options="mainSwiperData" />
  <SectionsRegisterCard />
</template>

<script setup lang="ts">
import type { NavLinkType } from "../types";
import {
  directionsCard,
  vacansyList,
  workCardList,
  mainSwiperData,
} from "@/constants/index";

const jobTitle = ref("");
const address = ref("");

const data = ref<NavLinkType>({
  link: "/about",
  path: "/about",
  icon: "mana",
});
</script>

<style scoped lang="scss">
$light-gray: #e4e5e8;
$dark-gray: #5e6670;
$dark: #18191c;
#intro {
  background: rgba(241, 242, 244, 0.6);
  padding: 60px 0;
  .cards {
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 24%);
    justify-content: space-between;
  }
}
.intro {
  display: flex;
  align-items: center;
  gap: 50px;
  .intro-img {
    width: 550px;
  }
  &__directions {
    font-size: 14px;
  }
  &__title {
    font-size: 56px;
    text-transform: capitalize;
    font-weight: 600;
  }
  &__descr {
    font-size: 18px;
    color: $dark-gray;
  }
}
.form {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border: 1px solid $light-gray;
  border-radius: 8px;
  box-shadow: 0px 12px 40px 0px rgba(0, 44, 109, 0.04);
  margin: 24px 0;
  &__address-input {
    padding-left: 18px;
  }
  &__job-input {
    padding-right: 18px;
    border-right: 1px solid $light-gray;
  }
}
</style>
