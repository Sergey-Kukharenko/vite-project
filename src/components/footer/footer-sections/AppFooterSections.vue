<script setup>
import { ref } from 'vue';

import AppFooterSection from '@/components/footer/footer-sections/AppFooterSection.vue';
import dataFooter from '@/data/footer.js';

const { sections } = ref(dataFooter).value;
</script>

<template>
  <div class="footer-sections">
    <app-footer-section v-for="section in sections" :key="section" :section="section" />
  </div>
</template>

<style scoped lang="scss"></style>
