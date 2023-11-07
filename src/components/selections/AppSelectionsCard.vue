<script setup>
const { slide } = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <a class="selections-card">
    <img :src="slide.img" alt="" />
  </a>
</template>

<style lang="scss" scoped>
.selections-card {
  overflow: hidden;
  display: block;

  box-sizing: border-box;

  border: 1px solid #dcdcdc;
  border-radius: 10px;

  & img {
    display: block;
    max-width: 100%;
  }
}
</style>
