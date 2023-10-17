<script setup>
import { ref } from 'vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppInput from '@/components/shared/input/AppInput.vue';

const value = ref('');
</script>

<template>
  <div class="subscribe-form">
    <app-input v-model:value="value" placeholder="E-mail" />
    <app-btn cls="subscribe" font-size="small">Подписаться</app-btn>
  </div>
</template>

<style scoped lang="scss">
.subscribe-form {
  display: flex;
  gap: 20px;
}
</style>
