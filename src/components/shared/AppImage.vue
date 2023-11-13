<script setup>
defineProps({
  img: {
    type: Object,
    default: () => ({})
  }
});

const mediaQueries = {
  desktop: '(min-width: 1024px)',
  tablet: '(max-width: 1023px) and (min-width: 768px)',
  mobile: '(max-width: 767px)'
};
</script>

<template>
  <picture>
    <source v-for="(value, key) in img" :key="value" :media="mediaQueries[key]" :srcset="value" />
    <img :src="img.desktop" :alt="img.desktop" />
  </picture>
</template>

<style scoped lang="scss">
img {
  display: block;
  max-width: 100%;
}
</style>
