<script setup>
import { computed, ref } from 'vue';
import AppHeaderSearchCategory from '@/components/header/header-categories/AppHeaderSearchCategory.vue';
import dateSearch from '@/data/search.js';

const props = defineProps({
  search: {
    type: String,
    default: ''
  }
});

const { categories } = ref(dateSearch).value;

const classNames = computed(() => ({
  'header-search-categories': true,
  updated: props.search
}));
</script>

<template>
  <div :class="classNames">
    <app-header-search-category v-for="category in categories" :key="category.title" :category="category" />
  </div>
</template>

<style scoped lang="scss">
.header-search-categories {
  display: flex;
  flex-basis: 181px;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 20px;

  &:not(.updated) {
    margin-top: 49px;
  }
}
</style>
