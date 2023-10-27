<script setup>
import { ref } from 'vue';
import AppInput from '@/components/shared/input/AppInput.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';

const city = ref('');
const onSubmit = () => {
  console.log('submit here');
  console.log(city.value);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <app-input v-model="city" grow placeholder="Или укажите другой город" />
    <app-btn grow>Выбрать город</app-btn>
  </form>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
</style>
