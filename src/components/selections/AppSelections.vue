<script setup>
import AppSwiper from '@/components/ui/AppSwiper.vue';
import AppSelectionsCard from '@/components/selections/AppSelectionsCard.vue';

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
      slidesPerView: 8,
      spaceBetween: 26
    }
  }
};
</script>

<template>
  <section class="layout layout--desktop vertical-space custom selections">
    <h1 v-if="title">{{ title }}</h1>

    <app-swiper v-slot="slotProps" :options="options" :slides="slides">
      <app-selections-card :slide="{ ...slotProps }" />
    </app-swiper>
  </section>
</template>

<style lang="scss" scoped>
.selections {
  text-align: center;
}
</style>
