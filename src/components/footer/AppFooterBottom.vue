<script setup>
import { ref } from 'vue';
import dataFooter from '@/data/footer.js';
import AppFooterFiles from '@/components/footer/AppFooterFiles.vue';
import AppFooterPayments from '@/components/footer/AppFooterPayments.vue';
import AppFooterBrands from '@/components/footer/AppFooterBrands.vue';
import AppIcon from '@/components/shared/AppIcon.vue';

const { copyright, files, logo, payments, brands } = ref(dataFooter).value;
</script>

<template>
  <div class="footer-bottom">
    <div class="container">
      <div class="copyright">{{ copyright }}</div>
      <div class="section">
        <app-footer-files :files="files" />
        <app-footer-payments :payments="payments" />
      </div>
      <div class="section">
        <app-icon :name="logo" />
        <app-footer-brands :brands="brands" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-bottom {
  @include gt-sm {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @include lt-md {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container,
.section {
  @include lt-md {
    gap: 20px;
  }
}

.container {
  @include gt-sm {
    gap: 5px;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
}

.section {
  @include lt-md {
    flex-direction: column;
  }

  display: flex;
  justify-content: space-between;
}

.copyright {
  font-size: 11px;
  line-height: 15px;
  color: var(--grey-dark);
}
</style>
