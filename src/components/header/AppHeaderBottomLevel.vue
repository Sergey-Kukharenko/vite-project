<script setup>
import { ref } from 'vue';
import AppHeaderPhone from '@/components/header/AppHeaderPhone.vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import AppMessengers from '@/components/shared/AppMessengers.vue';

import dataHeader from '@/data/header.js';
import AppHeaderSearchBar from '@/components/header/AppHeaderSearchBar.vue';

const { messengers } = ref(dataHeader).value;
</script>

<template>
  <div class="header-bottom-level">
    <app-icon name="logo" />
    <app-header-search-bar />
    <app-header-phone />
    <app-messengers :list="messengers" />
  </div>
</template>

<style scoped lang="scss">
.header-bottom-level {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon {
  width: 256px;
}
</style>
