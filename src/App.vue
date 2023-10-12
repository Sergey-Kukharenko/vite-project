<script setup>
import { ref } from 'vue';

import AppSectionCards from '@/components/section-cards/app-section-cards.vue';
import dataListCards from '@/data/list-cards.js';

const listCards = ref(dataListCards);
</script>

<template>
  <div class="layout layout--dm">
    <app-section-cards :title="listCards.title" :list="listCards.list" :button="listCards.button" />
  </div>
</template>
