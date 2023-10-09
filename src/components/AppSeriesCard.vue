<script setup>
const { slide } = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <div class="card">
    {{ slide.a }}
  </div>
</template>

<style scoped lang="css"></style>
