<script setup>
import AppFooterTop from '@/components/footer/AppFooterTop.vue';
import AppFooterBottom from '@/components/footer/AppFooterBottom.vue';
import AppFooterSections from '@/components/footer/footer-sections/AppFooterSections.vue';
</script>

<template>
  <div class="footer">
    <div class="layout layout--desktop layout--mobile">
      <app-footer-top />
      <app-footer-sections />
      <app-footer-bottom />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #f1f1f1;
  min-height: 562px;
}
</style>
