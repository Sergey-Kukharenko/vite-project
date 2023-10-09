<script setup>
import AppSwiper from '@/components/AppSwiper.vue';
import AppSeriesCard from '@/components/AppSeriesCard.vue';
</script>

<template>
  <div class="layout">
    <app-swiper v-slot="slotProps" :slides="[{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }]">
      <app-series-card :slide="{ ...slotProps }" />
    </app-swiper>
  </div>
</template>
