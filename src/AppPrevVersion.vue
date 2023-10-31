<script setup>
import { ref } from 'vue';

import dataSeries from '@/data/series.js';
import dataBrands from '@/data/brands.js';
import dataListCards from '@/data/list-cards.js';

import AppQuickLinks from '@/components/AppQuickLinks.vue';
import AppSeries from '@/components/series/AppSeries.vue';
import AppBrands from '@/components/brands/AppBrands.vue';
import AppSectionCards from '@/components/section-cards/app-section-cards.vue';
import AppSelections from '@/components/selections/AppSelections.vue';
import dataSelections from '@/data/selections.js';
import AppBanner from '@/components/banner/AppBanner.vue';
import dataBanner from '@/data/banner.js';
import AppConstructionsToys from '@/components/сonstructions-toys/AppConstructionsToys.vue';
import AppSubscribe from '@/components/subscribe/AppSubscribe.vue';
import AppFooter from '@/components/footer/AppFooter.vue';

const series = ref(dataSeries);
const brands = ref(dataBrands);
const listCards = ref(dataListCards);
const selections = ref(dataSelections);
const banner = ref(dataBanner);
</script>

<template>
  <app-banner :banner="banner" />
  <app-quick-links />
  <app-series :title="series.title" :slides="series.slides" />
  <app-brands :title="brands.title" :slides="brands.slides" />
  <app-section-cards :title="listCards.title" :list="listCards.list" :button="listCards.button" />
  <app-selections :title="selections.title" :slides="selections.slides" />
  <app-constructions-toys />
  <app-subscribe />
  <app-footer />
</template>
