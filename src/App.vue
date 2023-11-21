<script setup>
import { computed } from 'vue';
import { useMq } from 'vue3-mq';
import AppMenuProfile from '@/components/menu/menu-profile/AppMenuProfile.vue';

const mq = useMq();
const isDesktop = computed(() => mq.current === 'xl');
</script>

<template>
  <!--  <app-header v-if="isDesktop" />-->
  <!--  <app-menu />-->
  <app-menu-profile />
</template>

<style lang="scss">
body {
  background: #fff;
}
</style>
