<script setup>
import AppCitiesList from '@/components/header/cities/AppCitiesList.vue';
</script>

<template>
  <div class="cities">
    <div class="header">
      <div class="title">Выберите город</div>
      <div class="close">
        <img src="/images/icons/cross.png" alt="cross" />
        <img src="/images/icons/cross-hovered.png" alt="cross" />
      </div>
    </div>
    <app-cities-list />
  </div>
</template>

<style src="./AppCities.scss" lang="scss" scoped />
