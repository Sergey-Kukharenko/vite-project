<script setup>
import { computed } from 'vue';
import { useMq } from 'vue3-mq';

const { slide } = defineProps({
  slide: {
    type: Object,
    default: () => ({})
  }
});

const mq = useMq();

const getDevice = computed(() => (mq.current === 'xs' || mq.current === 'sm' ? 'mobile' : 'desktop'));
</script>

<template>
  <a class="brands-card">
    <img :src="slide.img[getDevice]" alt="" />
  </a>
</template>

<style lang="scss" scoped>
.brands-card {
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
