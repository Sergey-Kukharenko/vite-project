<script setup>
import { ref } from 'vue';
import AppHeaderSearchCategories from '@/components/header/header-categories/AppHeaderSearchCategories.vue';
import AppHeaderProducts from '@/components/header/header-products/AppHeaderProducts.vue';
import AppHeaderTags from '@/components/header/AppHeaderTags.vue';
import dataSearch from '@/data/search.js';
import { useSearchStore } from '@/stores/useSearchStore.js';

const { tags } = ref(dataSearch).value;
const store = useSearchStore();
</script>

<template>
  <div class="layout layout--desktop layout--mobile header-search-results">
    <app-header-tags v-if="store.query" :tags="tags" />
    <app-header-search-categories :search="store.query" />
    <app-header-products :search="store.query" />
  </div>
</template>

<style scoped lang="scss">
.header-search-results {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
