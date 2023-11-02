<script setup>
import { ref } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import { disableScroll, enableScroll } from '@/helpers/scrollLock.js';
import AppModal from '@/components/shared/modal/AppModal.vue';
import AppHeaderSearchResults from '@/components/header/AppHeaderSearchResults.vue';

const search = ref('');

const onSubmit = () => {
  console.log(search.value);
  search.value = '';
};

const isModalVisible = ref(true);

const openModal = () => {
  isModalVisible.value = true;
  disableScroll();
};

const closeModal = () => {
  isModalVisible.value = false;
  enableScroll();
};

const onPageChange = (event) => {
  event.target.blur();
};
</script>

<template>
  <div class="header-search-bar">
    <div v-show="isModalVisible" class="header-search-overlay-bg" @click="closeModal" />
    <form class="header-search" @submit.prevent="onSubmit">
      <input v-model="search" type="text" placeholder="Поиск по сайту" @focus="openModal" @keydown.esc="onPageChange" />
      <button>
        <app-icon name="magnifying-glass" />
      </button>
    </form>

    <app-modal :visible="isModalVisible" align="start" :close-btn="false" grow cls="search" @close="closeModal">
      <app-header-search-results :search="search.trim()" />
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

.header-search {
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;

  width: 390px;
  height: 40px;

  background-color: var(--grey-bg-search);
  border-radius: 2px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);
}

input {
  flex: 1;

  box-sizing: border-box;
  height: 100%;
  padding: 0 15px;

  font-size: 14px;
  line-height: normal;
  color: black;

  background: none;
}

.icon {
  fill: #777777;
  transition: fill 0.25s;
}

button {
  background: none;
  border: none;
  outline: none;

  &:hover {
    & .icon {
      fill: black;
    }
  }
}

.modal-search {
  top: 130px;
  border: none;
}
</style>
