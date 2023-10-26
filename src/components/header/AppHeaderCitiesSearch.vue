<script setup>
import { ref } from 'vue';
import AppInput from '@/components/shared/input/AppInput.vue';

const city = ref('');
const onSubmit = () => {
  console.log('submit here');
  console.log(city.value);
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <app-input v-model="city" />
  </form>
</template>

<style scoped lang="scss"></style>
