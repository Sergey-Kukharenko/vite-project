<script setup>
import { ref } from 'vue';
import AppModal from '@/components/shared/modal/AppModal.vue';
import AppHeaderSearchResults from '@/components/header/AppHeaderSearchResults.vue';
import AppHeaderSearch from '@/components/header/header-search/AppHeaderSearch.vue';
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
  disableScroll();
};

const closeModal = () => {
  isModalVisible.value = false;
  enableScroll();
};
</script>

<template>
  <div class="header-search-bar">
    <div v-show="isModalVisible" class="header-search-overlay-bg" @click="closeModal" />
    <app-header-search @open-modal="openModal" />
    <app-modal :visible="isModalVisible" align="start" :close-btn="false" grow cls="search" @close="closeModal">
      <app-header-search-results />
    </app-modal>
  </div>
</template>

<style scoped lang="scss">
.header-search-overlay-bg {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;

  height: 130px;

  opacity: 0.8;
  background: white;
}
</style>
