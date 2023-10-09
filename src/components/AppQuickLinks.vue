<script setup>
import { ref } from 'vue';
import dataQuickLinks from '@/data/quick-links';

const quickLinks = ref(dataQuickLinks);
</script>

<template>
  <div class="quick-links">
    <a v-for="(item, idx) in quickLinks" :key="idx" class="quick-link">
      <div class="quick-link__figure">
        <img :src="item.img" class="quick-link__figure-img" alt="" />
      </div>
      <div class="quick-link__figcaption">{{ item.text }}</div>
    </a>
  </div>
</template>

<style lang="css" scoped>
.quick-links,
.quick-link__figure {
  display: flex;
  justify-content: center;
}

.quick-links {
  gap: 32px;
}

.quick-link {
  max-width: 75px;
  text-align: center;
}

.quick-link__figure {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;
}

.quick-link__figure-img {
  max-width: 100%;
}

.quick-link__figcaption {
  margin-top: 7px;

  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: var(--black);
}
</style>
