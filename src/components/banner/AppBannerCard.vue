<script setup>
import { computed } from 'vue';
import { useMq } from 'vue3-mq';

const mq = useMq();

const mapImagesDevices = {
  xs: 'https://placehold.co/375X375.jpg',
  sm: 'https://placehold.co/480X480.jpg',
  md: 'https://placehold.co/768X768.jpg',
  lg: 'https://placehold.co/1024X360.jpg',
  xl: 'https://placehold.co/1280X402.jpg'
};

const getImg = computed(() => mapImagesDevices[mq.current]);
</script>

<template>
  <div class="banner-card">
    <img :src="getImg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.banner-card {
  @include gt-sm {
    min-height: 403px;
  }

  @include lt-md {
    min-height: 384px;
  }

  & img {
    display: block;
    max-width: 100%;
  }
}
</style>
