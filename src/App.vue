<script setup>
import AppHeader from '@/components/header/AppHeader.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
import AppSectionCards from '@/components/section-cards/app-section-cards.vue';
import { ref } from 'vue';
import dataListCards from '@/data/list-cards.js';

const listCards = ref(dataListCards);
</script>

<template>
  <app-header />
  <app-menu />
  <app-section-cards :title="listCards.title" :list="listCards.list" :button="listCards.button" />
</template>

<style lang="scss">
body {
  background: #fff;
}
</style>
