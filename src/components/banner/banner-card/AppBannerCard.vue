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
    <img :src="getImg" class="banner-card__img" alt="" />
  </div>
</template>

<style scoped lang="css">
.banner-card {
  @media screen and (min-width: 768px) {
    min-height: 403px;
  }

  @media screen and (max-width: 767px) {
    min-height: 384px;
  }
}

.banner-card__img {
  display: block;
  max-width: 100%;
}
</style>
