<script setup>
import AppImage from '@/components/shared/AppImage.vue';

defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <a class="brands-card">
    <app-image :img="slide.img" />
  </a>
</template>

<style lang="scss" scoped>
.brands-card {
  overflow: hidden;
  display: block;

  box-sizing: border-box;

  border: 1px solid #dcdcdc;
  border-radius: 10px;
}
</style>
