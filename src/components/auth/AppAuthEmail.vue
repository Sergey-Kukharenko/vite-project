<script setup>
import { computed, reactive } from 'vue';
import AppInput from '@/components/shared/input/AppInput.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import { email, helpers, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);

const state = reactive({
  contact: {
    email: ''
  }
});

const rules = {
  contact: {
    email: {
      required: helpers.withMessage('This field cannot be empty', required),
      email: helpers.withMessage('Email Is Not Valid', email)
    }
  }
};

const v$ = useVuelidate(rules, state);

const isError = computed(() => !!v$.value.contact.email.$errors.length);
const onSubmit = () => {
  v$.value.$touch();

  if (v$.value.$error) return;

  // Submit form here
  console.log(state.contact.email);
  state.contact.email = '';
  v$.value.$reset();
};
</script>

<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <app-input v-model="state.contact.email" placeholder="E-mail" :errors="v$.contact.email.$errors" />
    <app-btn grow font-size="small" :disabled="isError">Получить код</app-btn>
    <a class="link" @click="$emit('update:modelValue', 'phone')">Войти по телефону</a>
  </form>
</template>
