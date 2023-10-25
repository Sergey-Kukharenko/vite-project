<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
</script>

<template>
  <div class="header-location">
    <app-icon name="location" />
    <a>Москва и область</a>
  </div>
</template>

<style scoped lang="scss">
.header-location {
  display: flex;
  column-gap: 22px;
  align-items: center;
}

a {
  cursor: pointer;
  font-size: 14px;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}
</style>
