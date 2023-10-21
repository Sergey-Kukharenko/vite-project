<script setup>
import { ref } from 'vue';
import dataFooter from '@/data/footer.js';
import AppFooterFiles from '@/components/footer/AppFooterFiles.vue';
import AppFooterPayments from '@/components/footer/AppFooterPayments.vue';

const { copyright, files, logo, payments } = ref(dataFooter).value;
</script>

<template>
  <div class="footer-bottom">
    <div class="container">
      <div class="copyright">{{ copyright }}</div>
      <div class="section">
        <app-footer-files :files="files" />
      </div>
      <div class="section">
        <img :src="`/icons/${logo}.svg`" alt="" class="logo" />
        <app-footer-payments :payments="payments" />
      </div>
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

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section {
  display: flex;
  justify-content: space-between;
  outline: 1px solid #000;

  @include lt-md {
    flex-direction: column;
    gap: 10px;
  }
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
