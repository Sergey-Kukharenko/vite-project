<script setup>
import { computed } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },

  appearance: {
    type: String,
    default: 'yellow',
    validator(value) {
      return ['yellow', 'ghost'].includes(value);
    },
  },

  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value);
    },
  },
});

const classNames = computed(() => ({
  btn: true,
  [`btn--${props.appearance}`]: props.appearance,
  [`btn--${props.size}`]: props.size,
}));
</script>

<template>
  <button :class="classNames" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped></style>
