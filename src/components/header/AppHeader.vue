<script setup>
import AppHeaderTopLevel from '@/components/header/AppHeaderTopLevel.vue';
import AppHeaderBottomLevel from '@/components/header/AppHeaderBottomLevel.vue';
</script>

<template>
  <header class="layout layout--desktop layout--mobile header">
    <app-header-top-level />
    <app-header-bottom-level />
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  padding-top: 15px;
  padding-bottom: 30px;
}
</style>
