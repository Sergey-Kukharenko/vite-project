<script setup>
import { useCartStore } from '@/stores/useCartStore.js';
import { storeToRefs } from 'pinia';
import AppMenuLink from '@/components/menu/AppMenuLink.vue';

const store = useCartStore();
const { count } = storeToRefs(store);
</script>

<template>
  <div class="menu-cart">
    <app-menu-link icon="menu-basket" :count="count">Корзина</app-menu-link>
  </div>
</template>

<style scoped lang="scss">
.menu-cart {
}
</style>
