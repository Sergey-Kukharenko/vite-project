<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';
import AppMenuCounter from '@/components/menu/AppMenuCounter.vue';
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },

  count: {
    type: Number,
    default: null
  }
});

const isCount = computed(() => !!props.count);
</script>

<template>
  <a class="menu-link">
    <div class="figure">
      <app-icon v-if="icon" :name="icon" />
      <app-menu-counter v-if="isCount" :count="count" />
    </div>
    <slot />
  </a>
</template>

<style scoped lang="scss">
.menu-link {
  cursor: pointer;

  position: relative;

  display: flex;
  column-gap: 10px;
  align-items: center;

  font-family: var(--lato-bold);
  font-size: 14px;
  color: inherit;

  &:hover {
    .menu-counter {
      background: black;
    }
  }
}

.figure {
  position: relative;
}

.menu-counter {
  position: absolute;
  top: -9px;
  right: -9px;
}
</style>
