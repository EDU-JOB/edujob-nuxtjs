<template>
  <section class="">
    <div class="container px-12">
      <div class="title">
        <h2>Clients Testimonial</h2>
      </div>
      <div class="relative clients">
        <Swiper
          :slidesPerView="3"
          :centeredSlides="true"
          :grabCursor="true"
          :spaceBetween="20"
          :loop="true"
          :modules="modules"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
        >
          <SwiperSlide v-for="el in options" class="slide flex flex-col grow">
            <div class="flex gap-1">
              <img src="/icons/star 5.svg" alt="star" />
              <img src="/icons/star 5.svg" alt="star" />
              <img src="/icons/star 5.svg" alt="star" />
              <img src="/icons/star 5.svg" alt="star" />
              <img src="/icons/star 5.svg" alt="star" />
            </div>
            <p
              class="flex-grow py-2 min-h-[150px] max-h-[200px] overflow-y-auto"
            >
              {{ el.descr }}
            </p>
            <div class="flex gap-3 my-auto">
              <img :src="el.img" alt="" />
              <div class="flex flex-col">
                <h3 class="font-medium">{{ el.name }}</h3>
                <p class="text-sm opacity-50">{{ el.job }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <div
            class="swiper-button-next-custom absolute top-1/2 -right-12 translate-y-[-50%] z-40 bg-white rounded cursor-pointer p-2 inline-block transition-all"
          >
            <img
              src="/icons/fi_arrow-right (1).svg"
              alt=""
              class="rotate-180"
            />
          </div>

          <div
            class="swiper-button-prev-custom absolute top-1/2 -left-12 translate-y-[-50%] z-40 bg-white rounded cursor-pointer p-2 inline-block transition-all"
          >
            <img src="/icons/fi_arrow-right (1).svg" alt="" class="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mainSwiperData } from "~/constants";
interface Props {
  options: {
    name: string;
    job: string;
    descr: string;
    img: string;
  }[];
}
defineProps<Props>();
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
const modules = reactive([EffectCoverflow, Pagination, Navigation, Autoplay]);
</script>

<style scoped>
section {
  padding: 50px 0;
  background-color: #f1f2f4;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 600;
  }
}
.slide {
  padding: 24px;
  border-radius: 12px;
  background: var(--white, #fff);

  /* Testimonial Card */
  box-shadow: 0px 12px 80px 0px rgba(0, 44, 109, 0.05);
}
.clients{
  margin-top:20px;
}
.clients .swiper-pagination-bullet {
  background-color: black !important;
  width: 4px;
  height: 4px;
  transition: all 0.3s;
}

.clients .swiper-pagination-bullet-active {
  background: black !important;
  height: 4px;
  width: 4px;
  opacity: 1 !important;
  transition: all 0.3s;
}
</style>
