<script setup>
import { ref } from 'vue';

import dataSeries from '@/data/series.js';
import dataBrands from '@/data/brands.js';

import AppQuickLinks from '@/components/AppQuickLinks.vue';
import AppSeries from '@/components/series/AppSeries.vue';
import AppBrands from '@/components/brands/AppBrands.vue';

const series = ref(dataSeries);
const brands = ref(dataBrands);
</script>

<template>
  <div>
    <app-quick-links />
    <app-series :title="series.title" :slides="series.slides" />
    <app-brands :title="brands.title" :slides="brands.slides" />
  </div>
</template>
