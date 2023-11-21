<script setup>
import { ref } from 'vue';
import AppInput from '@/components/shared/input/AppInput.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);

const phone = ref();
const onSubmit = () => {
  console.log('onSubmit');
};
</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <app-input v-model="phone" grow placeholder="Мобильный телефон" tel />
    <app-btn grow font-size="small">Получить код</app-btn>
    <a class="link" @click="$emit('update:modelValue', 'email')">Войти по почте</a>
  </form>
</template>
