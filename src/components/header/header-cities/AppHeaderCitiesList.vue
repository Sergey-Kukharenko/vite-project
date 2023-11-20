<script setup>
import { ref } from 'vue';
import dataCities from '@/data/cities.js';
import { location } from '@/states/location.js';

const cities = ref(dataCities);
const selected = ref(0);
const onCLick = (item) => {
  selected.value = item.id;
  location.setCity(item.name);
};
</script>

<template>
  <div class="header-cities-list">
    <div
      v-for="item in cities"
      :key="item"
      class="item"
      :class="{ active: selected === item.id }"
      @click="onCLick(item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-cities-list {
  @include gt-sm {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-template-rows: repeat(8, auto);
    column-gap: 10px;

    max-width: 470px;
  }

  @include lt-md {
    overflow: -moz-scrollbars-none;
    overflow-y: auto;
    height: calc(100vh - 304px);

    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.item {
  @include gt-sm {
    width: 182px;
  }

  cursor: pointer;
  font-size: 16px;
  line-height: 32px;
  color: black;

  &:hover,
  &.active {
    font-family: var(--lato-bold);
  }
}
</style>
