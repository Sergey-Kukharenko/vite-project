<script setup>
import AppHeaderCitiesHead from '@/components/header/header-cities/AppHeaderCitiesHead.vue';
import AppHeaderCitiesList from '@/components/header/header-cities/AppHeaderCitiesList.vue';
import AppHeaderCitiesSearch from '@/components/header/header-location/AppHeaderCitiesSearch.vue';

const emit = defineEmits(['close']);
const close = () => emit('close');
</script>

<template>
  <div class="header-cities">
    <app-header-cities-head @close="close" />
    <app-header-cities-list />
    <app-header-cities-search />
  </div>
</template>
<style lang="scss" scoped>
.header-cities {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
