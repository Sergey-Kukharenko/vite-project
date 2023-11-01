<script setup>
import { ref } from 'vue';
import dataSearch from '@/data/search.js';
import AppHeaderProductsList from '@/components/header/header-products/AppHeaderProductsList.vue';

const { popular } = ref(dataSearch).value;
</script>

<template>
  <div class="header-products">
    <div class="title">{{ popular.title }}</div>
    <app-header-products-list :list="popular.list" />
  </div>
</template>

<style scoped lang="scss">
.header-products {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.title {
  font-size: 22px;
  font-weight: 700;
  color: black;
}
</style>
