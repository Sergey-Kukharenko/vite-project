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
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-template-rows: repeat(8, auto);
  column-gap: 10px;

  max-width: 480px;
}

.item {
  cursor: pointer;

  font-family: var(--rotonda-c);
  font-size: 16px;
  line-height: 33px;
  color: black;

  &:hover,
  &.active {
    font-weight: 700;
  }
}
</style>
