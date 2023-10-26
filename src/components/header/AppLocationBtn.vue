<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
</script>

<template>
  <a class="location-btn">
    <app-icon name="location" />
    <span>Москва и область</span>
  </a>
</template>

<style scoped lang="scss">
.location-btn {
  display: flex;
  column-gap: 22px;
  align-items: center;
}
</style>
