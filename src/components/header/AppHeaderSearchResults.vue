<script setup>
import AppHeaderSearchCategories from '@/components/header/header-categories/AppHeaderSearchCategories.vue';
import AppHeaderProducts from '@/components/header/header-products/AppHeaderProducts.vue';
import AppHeaderTags from '@/components/header/AppHeaderTags.vue';

import { ref } from 'vue';
import dataSearch from '@/data/search.js';

const { tags } = ref(dataSearch).value;

defineProps({
  search: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="layout layout--desktop layout--mobile header-search-results">
    <app-header-tags v-if="search" :tags="tags" />
    <app-header-search-categories :search="search" />
    <app-header-products :search="search" />
  </div>
</template>

<style scoped lang="scss">
.header-search-results {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
</style>
