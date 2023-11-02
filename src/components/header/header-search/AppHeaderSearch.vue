<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
import { useSearchStore } from '@/stores/useSearchStore.js';
import { computed } from 'vue';

defineEmits(['openModal']);

const store = useSearchStore();

const search = computed({
  get() {
    return store.query;
  },
  set(newValue) {
    store.setQuery(newValue);
  }
});

const onSubmit = () => {
  console.log(search.value);
  search.value = '';
};

const onPageChange = (event) => {
  event.target.blur();
};
</script>

<template>
  <div class="header-search-bar">
    <form class="header-search" @submit.prevent="onSubmit">
      <input
        v-model="search"
        type="text"
        placeholder="Поиск по сайту"
        @focus="$emit('openModal')"
        @keydown.esc="onPageChange"
      />
      <button>
        <app-icon name="magnifying-glass" />
      </button>
    </form>
  </div>
</template>

<style lang="scss" src="./AppHeaderSearch.scss" scoped />
