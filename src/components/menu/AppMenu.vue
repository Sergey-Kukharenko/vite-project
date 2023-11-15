<script setup>
import AppMenuCompare from '@/components/menu/menu-compare/AppMenuCompare.vue';
import AppMenuFavorite from '@/components/menu/menu-favorite/AppMenuFavorite.vue';
import AppMenuProfile from '@/components/menu/menu-profile/AppMenuProfile.vue';
import AppMenuCart from '@/components/menu/menu-cart/AppMenuCart.vue';

import { useMq } from 'vue3-mq';
import { computed, defineAsyncComponent } from 'vue';

const AppMenuSearch = defineAsyncComponent(() => import('@/components/menu/menu-search/AppMenuSearch.vue'));
const mq = useMq();
const isNotDesktop = computed(() => mq.current !== 'xl');
</script>

<template>
  <div class="menu">
    <div class="layout layout--desktop layout--mobile container">
      <div></div>
      <div class="menu-items">
        <app-menu-search v-if="isNotDesktop" />
        <app-menu-compare />
        <app-menu-favorite />
        <app-menu-profile />
        <app-menu-cart />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  position: sticky;
  z-index: 2;
  top: 0;

  width: 100%;
  height: 50px;

  background: #ffc42e;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.menu-items {
  display: flex;
  column-gap: 10px;
}
</style>
