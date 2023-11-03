<script setup>
import AppHeaderCitiesList from '@/components/header/header-cities/AppHeaderCitiesList.vue';
import AppHeaderCitiesSearch from '@/components/header/header-location/AppHeaderCitiesSearch.vue';
</script>

<template>
  <div class="header-cities">
    <div class="title">Выберите город</div>
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

.title {
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
}
</style>
