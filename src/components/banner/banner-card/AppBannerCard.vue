<script setup>
import { computed } from 'vue';
import { useMq } from 'vue3-mq';

const mq = useMq();
const getImg = computed(() => mq.current);
</script>

<template>
  <div class="banner-card">
    <pre>{{ getImg }}</pre>
    <img src="https://placehold.co/1222X403.jpg" class="banner-card__img" alt="" />
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
