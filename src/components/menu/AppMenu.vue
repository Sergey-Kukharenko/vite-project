<script setup>
import AppHeaderCart from '@/components/header/header-cart/AppHeaderCart.vue';
</script>

<template>
  <div class="menu">
    <div class="layout layout--desktop layout--mobile container">
      <div></div>
      <div>
        <app-header-cart />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  position: sticky;
  z-index: 1;
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
</style>
