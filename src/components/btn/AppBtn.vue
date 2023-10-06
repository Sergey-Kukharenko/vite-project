<script setup>
import { computed } from 'vue';
import AppSpinner from '@/components/AppSpinner.vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'a'].includes(value);
    }
  },

  href: {
    type: String,
    default: null
  },

  target: {
    type: String,
    default: null,
    validator(value) {
      return ['_blank', '_self', '_parent', '_top'].includes(value);
    }
  },

  disabled: {
    type: Boolean,
    default: false
  },

  processing: {
    type: Boolean,
    default: false
  },

  appearance: {
    type: String,
    default: 'yellow',
    validator(value) {
      return ['yellow', 'ghost'].includes(value);
    }
  },

  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large'].includes(value);
    }
  }
});

const classNames = computed(() => ({
  btn: true,
  [`btn--${props.appearance}`]: props.appearance,
  [`btn--${props.size}`]: props.size,
  [`btn--processing`]: props.processing
}));

const componentProps = computed(() =>
  props.tag === 'button'
    ? { disabled: props.disabled || props.processing }
    : {
        href: props.href,
        target: props.target
      }
);
</script>

<template>
  <component :is="tag" :class="classNames" v-bind="componentProps">
    <span class="btn__content">
      <slot />
    </span>
    <app-spinner v-if="processing" />
  </component>
</template>

<style lang="css" scoped src="./AppBtn.css"></style>
