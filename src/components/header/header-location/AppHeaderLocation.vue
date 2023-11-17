<script setup>
import { computed, ref } from 'vue';
import AppHeaderLocationBtn from '@/components/header/header-location/AppHeaderLocationBtn.vue';
import AppHeaderCities from '@/components/header/header-cities/AppHeaderCities.vue';
import AppModal from '@/components/shared/modal/AppModal.vue';
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';
import { useMq } from 'vue3-mq';

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
  disableScroll();
};

const closeModal = () => {
  isModalVisible.value = false;
  enableScroll();
};

const mq = useMq();
const isMobile = computed(() => mq.current === 'xs' || mq.current === 'sm');
const changeableAlign = computed(() => (isMobile.value ? 'end' : 'start'));
</script>

<template>
  <app-header-location-btn @click="openModal" />
  <app-modal :visible="isModalVisible" :align="changeableAlign" width="628" @close="closeModal">
    <app-header-cities @close="closeModal" />
  </app-modal>
</template>
