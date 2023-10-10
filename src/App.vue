<script setup>
import { ref } from 'vue';

import AppSeries from '@/components/series/AppSeries.vue';

import dataSeries from '@/data/series.js';

const series = ref(dataSeries);
</script>

<template>
  <div class="layout">
    <app-series :title="series.title" :slides="series.slides" />
  </div>
</template>
