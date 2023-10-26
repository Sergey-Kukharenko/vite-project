<script setup>
import AppHeaderCitiesHead from '@/components/header/header-cities/AppHeaderCitiesHead.vue';
import AppHeaderCitiesList from '@/components/header/header-cities/AppHeaderCitiesList.vue';
import AppHeaderCitiesSearch from '@/components/header/AppHeaderCitiesSearch.vue';
</script>

<template>
  <div class="header-cities">
    <app-header-cities-head />
    <app-header-cities-list />
    <app-header-cities-search />
  </div>
</template>
