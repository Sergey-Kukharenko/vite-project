<script setup>
import { ref } from 'vue';
import dataSearch from '@/data/search.js';
import AppHeaderProductsList from '@/components/header/header-products/AppHeaderProductsList.vue';

defineProps({
  search: {
    type: String,
    default: ''
  }
});

const { popular } = ref(dataSearch).value;
</script>

<template>
  <div class="header-products">
    <div v-if="!search" class="title">{{ popular.title }}</div>
    <app-header-products-list :list="popular.list" />
  </div>
</template>

<style scoped lang="scss">
.header-products {
  display: flex;
  flex: 1;
  flex-direction: column;
  row-gap: 30px;
}

.title {
  font-family: var(--lato-bold);
  font-size: 22px;
  color: black;
}
</style>
