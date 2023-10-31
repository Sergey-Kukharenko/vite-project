<script setup>
defineProps({
  banner: {
    type: Object,
    default: () => ({})
  }
});

const mediaQueries = {
  desktop: '(min-width: 768px)',
  mobile: '(max-width: 767px)'
};
</script>

<template>
  <a :href="banner.href" class="layout layout--desktop banner-card">
    <picture>
      <source v-for="(value, key) in banner.img" :key="value" :media="mediaQueries[key]" :srcset="value" />
      <img :src="banner.img.desktop" :alt="banner.desktop" />
    </picture>
  </a>
</template>

<style lang="scss" scoped>
.banner-card {
  @include gt-sm {
    min-height: 403px;
  }

  @include lt-md {
    min-height: 384px;
  }

  display: block;

  & img {
    display: block;
    max-width: 100%;
  }
}
</style>
