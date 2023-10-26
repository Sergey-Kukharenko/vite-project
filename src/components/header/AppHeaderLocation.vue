<script setup>
import { ref } from 'vue';
import AppModal from '@/components/shared/modal/AppModal.vue';
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';
import AppCities from '@/components/header/cities/AppCities.vue';
import AppLocationBtn from '@/components/header/AppLocationBtn.vue';

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
  <app-location-btn @click="openModal" />
  <app-modal :visible="isModalVisible" align="start" :close-btn="false" width="645" @close="closeModal">
    <app-cities />
  </app-modal>
</template>

<style scoped lang="scss"></style>
