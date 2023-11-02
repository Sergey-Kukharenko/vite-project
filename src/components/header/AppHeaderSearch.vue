<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
import { useSearchStore } from '@/stores/useSearchStore.js';
// import axios from 'axios';

defineEmits(['openModal']);

const store = useSearchStore();

const onSubmit = () => {
  console.log(store.query);
  store.query = '';
};

const onPageChange = (event) => {
  event.target.blur();
};

const onInput = async (event) => {
  store.setQuery(event.target.value);
  // const result = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search.value}`);
  //
  // console.log(result);
};
</script>

<template>
  <div class="header-search-bar">
    <form class="header-search" @submit.prevent="onSubmit">
      <input
        v-model="store.query"
        type="text"
        placeholder="Поиск по сайту"
        @input="onInput"
        @focus="$emit('openModal')"
        @keydown.esc="onPageChange"
      />
      <button>
        <app-icon name="magnifying-glass" />
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
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
</style>
