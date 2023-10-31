<script setup>
import { ref } from 'vue';
import AppHeaderSearchCategory from '@/components/header/header-categories/AppHeaderSearchCategory.vue';
import dateSearch from '@/data/search.js';

const { categories } = ref(dateSearch).value;
</script>

<template>
  <div class="header-search-categories">
    <app-header-search-category v-for="category in categories" :key="category.title" :category="category" />
  </div>
</template>

<style scoped lang="scss">
.header-search-categories {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
