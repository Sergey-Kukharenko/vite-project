<script setup>
import { ref } from 'vue';
import AppHeaderLocationBtn from '@/components/header/header-location/AppHeaderLocationBtn.vue';
import AppHeaderCities from '@/components/header/header-cities/AppHeaderCities.vue';
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
  <app-header-location-btn @click="openModal" />
  <app-modal :visible="isModalVisible" align="start" :close-btn="false" width="645" @close="closeModal">
    <app-header-cities />
  </app-modal>
</template>

<style scoped lang="scss"></style>
