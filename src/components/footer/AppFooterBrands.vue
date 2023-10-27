<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';

defineProps({
  brands: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="footer-brands">
    <a v-for="item in brands" :key="item.icon" :href="item.href" class="item">
      <app-icon :name="item.icon" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.footer-brands {
  @include lt-md {
    row-gap: 15px;
    margin-top: 3px;
  }

  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  align-items: center;
  justify-content: flex-start;
}

.icon {
  fill: var(--grey-brand);

  &:hover {
    fill: black;
  }
}
</style>
