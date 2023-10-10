<script setup>
const { slide } = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <a class="series-card">
    <img :src="slide.img" alt="" />
  </a>
</template>

<style scoped lang="css">
img {
  display: block;
  max-width: 100%;
}
</style>
