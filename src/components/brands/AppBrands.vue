<script setup>
import AppSwiper from '@/components/ui/AppSwiper.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppBrandsCard from '@/components/brands/AppBrandsCard.vue';

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
  slidesPerView: 2.2,

  spaceBetween: 10,
  navigation: true,

  breakpoints: {
    999: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
};
</script>

<template>
  <section class="layout layout--desktop vertical-space custom brands">
    <h1 v-if="title">{{ title }}</h1>

    <app-swiper v-slot="slotProps" :options="options" :slides="slides">
      <app-brands-card :slide="{ ...slotProps }" />
    </app-swiper>

    <app-btn tag="a">Все бренды</app-btn>
  </section>
</template>

<style lang="scss" scoped>
.brands {
  text-align: center;
}
</style>
