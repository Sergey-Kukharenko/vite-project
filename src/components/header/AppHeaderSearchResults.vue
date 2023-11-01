<script setup>
import AppHeaderSearchCategories from '@/components/header/header-categories/AppHeaderSearchCategories.vue';
import AppHeaderProducts from '@/components/header/header-products/AppHeaderProducts.vue';
</script>

<template>
  <div class="layout layout--desktop layout--mobile header-search-results">
    <app-header-search-categories />
    <app-header-products />
  </div>
</template>

<style scoped lang="scss">
.header-search-results {
  display: flex;
  column-gap: 25px;
}
</style>
