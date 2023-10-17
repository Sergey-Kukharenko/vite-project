<script setup>
import { ref } from 'vue';

import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppInput from '@/components/shared/input/AppInput.vue';

const value = ref('');
</script>

<template>
  <div class="layout layout--desktop subscribe">
    <div class="title">Подписывайтесь на рассылку</div>

    <div class="subscribe-form">
      <app-input v-model:value="value" placeholder="E-mail" />
      <app-btn font-size="small" cls="subscribe">Подписаться</app-btn>
      <div class="description">
        Нажимая кнопку «Подписаться», вы соглашаетесь с <a href="">политикой конфиденциальности</a> и
        <a href="">условиями оферты</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./AppSubscribe.scss"></style>
