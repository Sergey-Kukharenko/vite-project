<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';

defineProps({
  payments: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <div class="footer-payments">
    <div class="title">{{ payments.title }}</div>
    <div class="list">
      <app-icon v-for="icon in payments.list" :key="icon" :name="icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-payments,
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.title {
  font-size: 13px;
  line-height: 1;
  color: var(--grey-dark);
}
</style>
