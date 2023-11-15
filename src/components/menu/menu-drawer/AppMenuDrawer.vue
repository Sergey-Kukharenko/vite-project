<script setup>
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';
import { computed, ref } from 'vue';

const isVisible = ref(false);

const open = () => {
  isVisible.value = true;
  disableScroll();
};

const close = () => {
  isVisible.value = false;
  enableScroll();
};

const toggle = () => (isVisible.value ? close() : open());

const classNames = computed(() => ({
  drawer: true,
  active: isVisible.value
}));
</script>

<template>
  <div :class="classNames">
    <button class="burger" @click="toggle"><span /></button>
    <div class="overlay" @click="close" />
    <div class="container">
      <div class="inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./AppMenuDrawer.scss" />
