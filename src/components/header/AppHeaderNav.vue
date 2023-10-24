<script setup>
import { ref } from 'vue';

import headerNav from '@/data/header-nav.js';
import AppIcon from '@/components/shared/AppIcon.vue';

const nav = ref(headerNav);
</script>

<template>
  <div class="header-nav">
    <a v-for="item in nav" :key="item.text" :href="item.href" class="item">
      <app-icon v-if="item.icon" :name="item.icon" />
      {{ item.text }}
    </a>
  </div>
</template>

<style scoped lang="scss">
.header-nav {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.item {
  display: flex;
  align-items: center;
  column-gap: 4px;
  color: inherit;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
}
</style>
