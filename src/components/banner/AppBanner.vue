<script setup>
import { useMq } from 'vue3-mq';
import { computed } from 'vue';

const { banner } = defineProps({
  banner: {
    type: Object,
    default: () => ({})
  }
});

const mq = useMq();
const getDevice = computed(() => (mq.current === 'xs' || mq.current === 'sm' ? 'mobile' : 'desktop'));
</script>

<template>
  <div class="banner-card">
    <img :src="banner.img[getDevice]" alt="" />
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
