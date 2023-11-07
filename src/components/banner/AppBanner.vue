<script setup>
import AppImage from '@/components/shared/AppImage.vue';

defineProps({
  banner: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <a :href="banner.href" class="layout layout--desktop banner-card">
    <app-image :img="banner.img" />
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
}
</style>
