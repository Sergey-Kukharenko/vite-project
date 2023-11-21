<script setup>
import AppMenuLink from '@/components/menu/AppMenuLink.vue';
import AppModal from '@/components/shared/modal/AppModal.vue';
import { computed, ref } from 'vue';
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
  <div class="menu-profile">
    <app-menu-link icon="menu-profile" :count="1" @click="openModal">Войти</app-menu-link>
    <app-modal :visible="isModalVisible" :align="changeableAlign" width="628" @close="closeModal"> HI</app-modal>
  </div>
</template>
