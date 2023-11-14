<script setup>
import AppMenuFavorite from '@/components/menu/menu-favorite/AppMenuFavorite.vue';
import AppMenuCart from '@/components/menu/menu-cart/AppMenuCart.vue';
</script>

<template>
  <div class="menu">
    <div class="layout layout--desktop layout--mobile container">
      <div></div>
      <div class="menu-items">
        <app-menu-favorite />
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
