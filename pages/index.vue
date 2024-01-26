<template>
  <section id="intro">
    <div class="container flex flex-col-reverse lg:flex-row flex-center-between  gap-6 lg:gap-8 ">
      <div>
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold ">
          Qobiliyatlaringizga mos keladigan ish toping.
        </h1>
        <p class="text-sm md:text-base my-4">
          EduJob: Ma'naviy va Texnologik Rivojlanishga Qiziqarli O'qitishga
          Mo'ljallangan Dastur
        </p>
        <div class="md:inline-block">
          <div class="form flex flex-col md:flex-row gap-4 p-3 bg-white rounded-lg border border-gray-100">
            <Input
                v-model="jobTitle"
                placeholder="Job tittle, Keyword..."
                type="text"
            >
              <template #prefix>

                <i class="icon-search text-blue mr-2 text-xl"></i>
              </template>
            </Input>
            <Input
                placeholder="Manzilni Kiriting"
                v-model="address"
                type="text"
            >
              <template #prefix>
                <i class="icon-location text-blue mr-2 text-xl"></i>
              </template>
            </Input>
            <el-button type="primary" size="large">Qidirsh</el-button>
          </div>
        </div>
        <p class="text-sm md:text-base mt-4">
          <span class="text-gray-300">Yo’nalishlar</span> : Designer, Programing,
          <span class="text-blue">Digital Marketing</span>, Video,
          Animation.
        </p>
      </div>
      <img src="/Illustration.svg" alt="" class="intro-img"/>
    </div>
    <div class="container grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 my-6">
      <CardsDirections v-for="el in directionsCard" :options="el"/>
    </div>
  </section>
  <SectionsVacancy :options="vacansyList"/>
  <SectionsWork :options="workCardList"/>
  <SectionsDirections/>
  <SectionsJob/>
  <SectionsCompany/>
  <SectionsClientTestimonial :options="mainSwiperData"/>
  <SectionsRegisterCard/>
</template>

<script setup lang="ts">
import type {NavLinkType} from "../types";
import {directionsCard, mainSwiperData, vacansyList, workCardList,} from "@/constants/index";

const jobTitle = ref("");
const address = ref("");

const data = ref<NavLinkType>({
  link: "/about",
  path: "/about",
  icon: "mana",
});
</script>

<style scoped lang="scss">
//$light-gray: #e4e5e8;
//$dark-gray: #5e6670;
//$dark: #18191c;
//#intro {
//  background: rgba(241, 242, 244, 0.6);
//  padding: 60px 0;
//  .cards {
//    padding-top: 50px;
//    display: grid;
//    grid-template-columns: repeat(4, 24%);
//    justify-content: space-between;
//  }
//}
//.intro {
//  display: flex;
//  align-items: center;
//  gap: 50px;
//  .intro-img {
//    width: 550px;
//  }
//  &__directions {
//    font-size: 14px;
//  }
//  &__title {
//    font-size: 56px;
//    text-transform: capitalize;
//    font-weight: 600;
//  }
//  &__descr {
//    font-size: 18px;
//    color: $dark-gray;
//  }
//}
//.form {
//  margin-top: 20px;
//  display: flex;
//  align-items: center;
//  padding: 12px;
//  gap: 12px;
//  border: 1px solid $light-gray;
//  border-radius: 8px;
//  box-shadow: 0px 12px 40px 0px rgba(0, 44, 109, 0.04);
//  margin: 24px 0;
//  &__address-input {
//    padding-left: 18px;
//  }
//  &__job-input {
//    padding-right: 18px;
//    border-right: 1px solid $light-gray;
//  }
//}
</style>
