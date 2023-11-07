<script setup>
import { computed, reactive } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, required } from '@vuelidate/validators';

import AppInput from '@/components/shared/input/AppInput.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';

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
  <form class="subscribe-form" @submit.prevent="onSubmit">
    <app-input
      v-model="state.contact.email"
      placeholder="E-mail"
      appearance="white"
      :errors="v$.contact.email.$errors"
    />
    <app-btn font-size="small" cls="subscribe" :disabled="isError">Подписаться</app-btn>
    <div class="description">
      Нажимая кнопку «Подписаться», вы соглашаетесь с <a href="">политикой конфиденциальности</a> и
      <a href="">условиями оферты</a>
    </div>
  </form>
</template>

<style lang="scss" scoped src="./AppSubscribeForm.scss" />
