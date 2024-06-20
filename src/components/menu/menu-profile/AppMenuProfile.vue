<script setup>
import AppMenuLink from '@/components/menu/AppMenuLink.vue';
import AppModal from '@/components/shared/modal/AppModal.vue';
import { computed, ref } from 'vue';
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';
import { useMq } from 'vue3-mq';
import AppAuth from '@/components/auth/AppAuth.vue';

const isModalVisible = ref(true);

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
    <app-menu-link icon="menu-profile" @click="openModal">Войти</app-menu-link>
    <app-modal
      :visible="isModalVisible"
      :align="changeableAlign"
      width="360"
      title="Войти или зарегистрироваться"
      @close="closeModal"
    >
      <app-auth />
    </app-modal>
  </div>
</template>
