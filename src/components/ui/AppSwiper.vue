<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

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

<style lang="scss">
.custom {
  & .swiper {
    @include gt-sm {
      margin: 38px 0 50px;
    }

    @include lt-md {
      margin: 34px 0;
      padding: 0 10px;
    }
  }

  & .swiper-button-prev,
  & .swiper-button-next {
    width: 46px;
    height: 46px;
    background: white;
    border-radius: 100%;

    &:after {
      font-size: 20px;
      font-weight: bold;
      color: black;
    }

    @include lt-md {
      display: none;
    }
  }

  & .swiper-button-prev {
    &:after {
      margin-left: -4px;
    }
  }

  & .swiper-button-next {
    &:after {
      margin-right: -4px;
    }
  }
}
</style>
