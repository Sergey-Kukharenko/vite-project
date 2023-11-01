<script setup>
import AppHeaderProductsItem from '@/components/header/header-products/AppHeaderProductsItem.vue';

defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="header-products-list">
    <app-header-products-item v-for="item in list" :key="item.title" :item="item" />
  </div>
</template>

<style scoped lang="scss">
.header-products-list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 10px;
  justify-content: space-between;
}
</style>
