<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
import { store } from '@/hooks/location.js';
</script>

<template>
  <a class="header-location-btn">
    <app-icon name="location" />
    <span>{{ store.location }}</span>
  </a>
</template>

<style scoped lang="scss">
.header-location-btn {
  display: flex;
  column-gap: 22px;
  align-items: center;
}
</style>
