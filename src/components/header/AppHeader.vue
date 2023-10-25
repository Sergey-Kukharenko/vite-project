<script setup>
import AppHeaderNav from '@/components/header/AppHeaderNav.vue';
import AppHeaderLocation from '@/components/header/AppHeaderLocation.vue';
</script>

<template>
  <header class="layout layout--desktop layout--mobile header">
    <app-header-location />
    <div class="vertical-line"></div>
    <app-header-nav />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  column-gap: 25px;
}

.vertical-line {
  width: 1px;
  height: 24px;
  background: var(--border-grey-color);
}
</style>
