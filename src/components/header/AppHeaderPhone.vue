<script setup>
import { ref } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import headerData from '@/data/header.js';

const { link, time } = ref(headerData).value;
</script>

<template>
  <div class="header-phone">
    <a :href="link.href" class="link">
      <app-icon :name="link.icon" class="phone-icon" />
      {{ link.phone }}
    </a>
    <div class="time">{{ time }}</div>
  </div>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  column-gap: 5px;
  align-items: center;

  font-family: var(--lato-bold);
  font-size: 18px;
  color: black;
}

.time {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1;
  color: black;
}

.icon {
  width: 20px;
  height: 20px;
}
</style>
