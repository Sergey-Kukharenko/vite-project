<script setup>
import { ref } from 'vue';
import dataFooter from '@/data/footer.js';
import AppFooterFiles from '@/components/footer/AppFooterFiles.vue';

const { copyright, files, logo } = ref(dataFooter).value;
</script>

<template>
  <div class="footer-bottom">
    <div class="section">
      <div class="copyright">{{ copyright }}</div>
      <app-footer-files :files="files" />
      <img :src="`/icons/${logo}.svg`" alt="" class="logo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include gt-sm {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @include lt-md {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.copyright {
  font-size: 11px;
  line-height: 15px;
  color: var(--grey-dark);
}

.logo {
  display: block;
  width: 150px;
}
</style>
