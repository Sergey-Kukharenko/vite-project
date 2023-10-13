<script setup>
import { ref } from 'vue';

import dataListCards from '@/data/list-cards.js';

import AppSectionCards from '@/components/section-cards/app-section-cards.vue';

const listCards = ref(dataListCards);
</script>

<template>
  <div class="layout layout--desktop layout--mobile">
    <app-section-cards :title="listCards.title" :list="listCards.list" :button="listCards.button" />
  </div>
</template>

<style lang="scss">
body {
  background: #fff;
}
</style>
