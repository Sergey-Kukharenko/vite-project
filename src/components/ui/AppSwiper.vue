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

<style lang="css">
@media screen and (min-width: 768px) {
  .custom .swiper {
    margin: 38px 0 50px;
  }
}

@media screen and (max-width: 767px) {
  .custom .swiper {
    margin: 34px 0;
    padding: 0 10px;
  }
}

.custom .swiper-button-prev,
.custom .swiper-button-next {
  width: 46px;
  height: 46px;
  background: var(--white);
  border-radius: 100%;
}

.custom .swiper-button-prev:after,
.custom .swiper-button-next:after {
  font-size: 20px;
  font-weight: bold;
  color: var(--black);
}

.custom .swiper-button-prev:after {
  margin-left: -4px;
}

.custom .swiper-button-next:after {
  margin-right: -4px;
}

@media screen and (max-width: 767px) {
  .custom .swiper-button-prev,
  .custom .swiper-button-next {
    display: none;
  }
}
</style>
