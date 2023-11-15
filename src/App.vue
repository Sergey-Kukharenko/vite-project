<script setup>
import AppHeader from '@/components/header/AppHeader.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
import { computed } from 'vue';
import { useMq } from 'vue3-mq';

const mq = useMq();
const isDesktop = computed(() => mq.current === 'xl');
console.log(isDesktop);
</script>

<template>
  <app-header />
  <app-menu />
</template>

<style lang="scss">
body {
  background: #fff;
}
</style>
