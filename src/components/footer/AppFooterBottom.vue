<script setup>
import { ref } from 'vue';
import dataFooter from '@/data/footer.js';
import AppIcon from '@/components/shared/AppIcon.vue';

const { copyright, logo } = ref(dataFooter).value;
</script>

<template>
  <div class="footer-bottom">
    <div class="section">
      <div>{{ copyright }}</div>
      <app-icon :name="logo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon {
  width: 150px;
}
</style>
