<script setup>
import { ref } from 'vue';
import AppBanner from '@/components/banner/AppBanner.vue';
import dataBanner from '@/data/banner.js';

const banner = ref(dataBanner);
</script>

<template>
  <app-banner :banner="banner" />
</template>

<style lang="scss">
body {
  background: #fff;
}
</style>
