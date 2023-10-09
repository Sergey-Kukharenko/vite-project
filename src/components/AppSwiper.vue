<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FreeMode, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  slides: {
    type: Array,
    default: () => []
  }
});

const modules = [FreeMode, Pagination, Navigation, Mousewheel, Keyboard];
</script>

<template>
  <swiper
    :slides-per-view="4"
    :space-between="16"
    :free-mode="true"
    :navigation="false"
    :pagination="false"
    :modules="modules"
    v-bind="{ ...options }"
    class="swiper"
  >
    <swiper-slide v-for="(slide, idx) in props.slides" :key="idx">
      <slot v-bind="{ ...slide }"></slot>
    </swiper-slide>
  </swiper>
</template>

<style lang="css"></style>
