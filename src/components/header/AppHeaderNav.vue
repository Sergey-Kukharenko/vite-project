<script setup>
import { ref } from 'vue';

import headerNav from '@/data/header-nav.js';
import AppIcon from '@/components/shared/AppIcon.vue';

const nav = ref(headerNav);
</script>

<template>
  <div class="header-nav">
    <a v-for="item in nav" :key="item.text" :href="item.href">
      <app-icon v-if="item.icon" :name="item.icon" />
      {{ item.text }}
    </a>
  </div>
</template>

<style scoped lang="scss">
.header-nav {
  display: flex;
  column-gap: 10px;
  align-items: center;
}

a {
  display: flex;
  column-gap: 4px;
  align-items: center;
}
</style>
