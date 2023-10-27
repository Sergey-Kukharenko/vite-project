<script setup>
import AppSeriesCard from '@/components/series/AppSeriesCard.vue';
import AppSwiper from '@/components/ui/AppSwiper.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';

defineProps({
  title: {
    type: String,
    default: ''
  },

  slides: {
    type: Array,
    default: () => []
  }
});

const options = {
  slidesPerView: 2.2,
  spaceBetween: 10,
  navigation: true,

  breakpoints: {
    999: {
      slidesPerView: 6
    }
  }
};
</script>

<template>
  <section class="layout layout--desktop custom series">
    <h1 v-if="title">{{ title }}</h1>

    <app-swiper v-slot="slotProps" :options="options" :slides="slides">
      <app-series-card :slide="{ ...slotProps }" />
    </app-swiper>

    <app-btn tag="a">Все серии</app-btn>
  </section>
</template>

<style lang="scss" scoped>
.series {
  text-align: center;
}
</style>
