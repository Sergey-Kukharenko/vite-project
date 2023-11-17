<script setup>
import { computed, ref } from 'vue';

import dataSeries from '@/data/series.js';
import dataBrands from '@/data/brands.js';
import dataListCards from '@/data/list-cards.js';
import dataSelections from '@/data/selections.js';
import dataBanner from '@/data/banner.js';

import AppQuickLinks from '@/components/AppQuickLinks.vue';
import AppSeries from '@/components/series/AppSeries.vue';
import AppBrands from '@/components/brands/AppBrands.vue';
import AppSectionCards from '@/components/section-cards/app-section-cards.vue';
import AppSelections from '@/components/selections/AppSelections.vue';
import AppBannerCard from '@/components/banner/AppBannerCard.vue';
import AppConstructionsToys from '@/components/сonstructions-toys/AppConstructionsToys.vue';
import AppSubscribe from '@/components/subscribe/AppSubscribe.vue';
import AppFooter from '@/components/footer/AppFooter.vue';
import AppHeader from '@/components/header/AppHeader.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
import { useMq } from 'vue3-mq';

const series = ref(dataSeries);
const brands = ref(dataBrands);
const listCards = ref(dataListCards);
const selections = ref(dataSelections);
const banner = ref(dataBanner);

const mq = useMq();
const isDesktop = computed(() => mq.current === 'xl');
</script>

<template>
  <app-header v-if="isDesktop" />
  <app-menu />
  <app-banner-card :banner="banner" />
  <app-quick-links />
  <app-series :title="series.title" :slides="series.slides" />
  <app-brands :title="brands.title" :slides="brands.slides" />
  <app-section-cards :title="listCards.title" :list="listCards.list" :button="listCards.button" />
  <app-selections :title="selections.title" :slides="selections.slides" />
  <app-constructions-toys />
  <app-subscribe />
  <app-footer />
</template>
