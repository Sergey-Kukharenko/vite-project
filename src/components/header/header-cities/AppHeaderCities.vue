<script setup>
import AppHeaderCitiesList from '@/components/header/header-cities/AppHeaderCitiesList.vue';
import AppInput from '@/components/shared/input/AppInput.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import { ref } from 'vue';
import { location } from '@/states/location.js';

const city = ref('');
const onSubmit = () => {
  location.setCity(city.value);
  city.value = '';
};
</script>

<template>
  <div class="header-cities">
    <div class="title">Выберите город</div>
    <form id="city-search-form" @submit.prevent="onSubmit">
      <app-input v-model="city" grow placeholder="Поиск города" />
    </form>
    <app-header-cities-list />
    <app-btn grow form="city-search-form">Выбрать город</app-btn>
  </div>
</template>
<style lang="scss" scoped>
.header-cities {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.title {
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
}
</style>
