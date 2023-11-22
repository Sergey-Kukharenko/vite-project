<script setup>
import { reactive } from 'vue';
import AppInput from '@/components/shared/input/AppInput.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import { helpers, minLength, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);

const state = reactive({
  phone: ''
});

const rules = {
  phone: {
    required: helpers.withMessage('This field cannot be empty', required),
    minLength: minLength(2)
  }
};

const v$ = useVuelidate(rules, state);
const onSubmit = () => {
  v$.value.$touch();

  if (v$.value.$error) return;

  // Submit form here
  console.log(state.phone);
  state.phone = '';
  v$.value.$reset();
};
</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <app-input v-model="state.phone" grow placeholder="Мобильный телефон" phone :errors="v$.phone.$errors" />
    <app-btn grow font-size="small">Получить код</app-btn>
    <a class="link" @click="$emit('update:modelValue', 'email')">Войти по почте</a>
  </form>
</template>
