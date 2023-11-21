<script setup>
import { defineAsyncComponent, ref, shallowReactive } from 'vue';

const AppAuthEmail = defineAsyncComponent(() => import('@/components/auth/AppAuthEmail.vue'));
const AppAuthPhone = defineAsyncComponent(() => import('@/components/auth/AppAuthPhone.vue'));

const components = shallowReactive({
  email: AppAuthEmail,
  phone: AppAuthPhone
});

const name = ref('phone');
</script>

<template>
  <component :is="components[name]" v-model="name" />
</template>

<style scoped lang="scss">
.auth-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

:deep(.link) {
  cursor: pointer;
  user-select: none;

  font-size: 14px;
  color: var(--blue);
  text-align: center;
}
</style>
