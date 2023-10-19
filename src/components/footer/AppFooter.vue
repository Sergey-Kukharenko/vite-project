<script setup>
import { ref } from 'vue';
import AppFooterSection from '@/components/footer/footer-section/AppFooterSection.vue';

import dataFooter from '@/data/footer.js';
import AppFooterTop from '@/components/footer/AppFooterTop.vue';

const footer = ref(dataFooter);
</script>

<template>
  <div class="footer">
    <div class="layout layout--desktop layout--mobile">
      <app-footer-top :button="footer.button" :time="footer.time" :media="footer.media" />
      <div class="footer-sections">
        <app-footer-section v-for="section in footer.sections" :key="section" :section="section" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #f1f1f1;
  min-height: 562px;
}
</style>
