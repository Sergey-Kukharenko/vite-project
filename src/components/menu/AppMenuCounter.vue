<script setup>
defineProps({
  count: {
    type: Number,
    default: null
  }
});
</script>

<template>
  <div class="menu-counter">{{ count }}</div>
</template>

<style lang="scss" scoped>
.menu-counter {
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
