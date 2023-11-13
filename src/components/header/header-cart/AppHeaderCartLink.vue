<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
import { useCartStore } from '@/stores/useCartStore.js';

const store = useCartStore();
</script>

<template>
  <a class="header-cart-link">
    <div class="figure">
      <app-icon name="header-basket" />
      <div v-if="store.isCart" class="header-cart-counter">{{ store.count }}</div>
    </div>
    Корзина
  </a>
</template>

<style scoped lang="scss">
.header-cart-link {
  cursor: pointer;

  position: relative;

  display: flex;
  column-gap: 10px;
  align-items: center;

  font-size: 14px;
  font-weight: 700;
  color: inherit;

  &:hover {
    .header-cart-counter {
      background: black;
    }
  }
}

.figure {
  position: relative;
}

.header-cart-counter {
  position: absolute;
  top: 1px;
  right: 1px;
  transform: translate(50%, -50%);

  width: 20px;
  height: 20px;

  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: white;
  text-align: center;

  background: var(--red);
  border-radius: 50%;

  transition: background 0.3s linear;
}
</style>
