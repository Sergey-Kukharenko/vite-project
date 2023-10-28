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
  row-gap: 3px;
}

.item {
  cursor: pointer;

  padding: 0 15px;

  font-family: var(--rotonda-c);
  font-size: 16px;
  line-height: 30px;
  color: #000000;

  border-radius: 15px;

  &:hover,
  &.active {
    background-color: var(--yellow);
    box-shadow: 0 2px 3px #d0d0d0;
  }
}
</style>
