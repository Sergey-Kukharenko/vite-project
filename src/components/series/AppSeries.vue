<script setup>
import AppSeriesCard from '@/components/series/AppSeriesCard.vue';
import AppSwiper from '@/components/ui/AppSwiper.vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },

  slides: {
    type: Array,
    default: () => []
  }
});

const { title, slides } = props;

const options = {
  slidesPerView: 1.5,
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
  <section class="series">
    <h1 v-if="title" class="title">{{ title }}</h1>

    <app-swiper v-slot="slotProps" :options="options" :slides="slides">
      <app-series-card :slide="{ ...slotProps }" />
    </app-swiper>
  </section>
</template>

<style scoped lang="css">
.series {
  margin: 0;
}

.title {
  margin-bottom: 38px;
}
</style>
