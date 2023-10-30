<script setup>
import AppHeaderNav from '@/components/header/AppHeaderNav.vue';
import AppHeaderLocation from '@/components/header/header-location/AppHeaderLocation.vue';
</script>

<template>
  <div class="header-top-level">
    <app-header-location />
    <div class="vertical-line"></div>
    <app-header-nav />
  </div>
</template>

<style scoped lang="scss">
.header-top-level {
  display: flex;
  align-items: center;
  column-gap: 25px;
}

.vertical-line {
  width: 1px;
  height: 24px;
  background: var(--border-grey-color);
}

:deep(a) {
  cursor: pointer;
  font-size: 14px;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
}
</style>