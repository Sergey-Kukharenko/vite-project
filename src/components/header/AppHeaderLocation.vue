<script setup>
import { ref } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import AppModal from '@/components/shared/modal/AppModal.vue';
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';

const isModalVisible = ref(true);

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
  <div class="header-location" @click="openModal">
    <app-icon name="location" />
    <a>Москва и область</a>
  </div>
  <app-modal :visible="isModalVisible" align="center" @close="closeModal" />
</template>

<style scoped lang="scss">
.header-location {
  display: flex;
  column-gap: 22px;
  align-items: center;
}
</style>
