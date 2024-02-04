<template>
  <SectionsIntro/>
  <SectionsVacancy :options="vacansyList"/>
  <SectionsWork :options="workCardList"/>
  <SectionsDirections/>
  <SectionsJob/>
  <SectionsCompany/>
  <SectionsClientTestimonial :options="mainSwiperData"/>
  <SectionsRegisterCard/>
</template>

<script setup lang="ts">
import {mainSwiperData, vacansyList, workCardList} from "@/constants";
</script>

