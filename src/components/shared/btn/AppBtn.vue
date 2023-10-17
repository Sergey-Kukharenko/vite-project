<script setup>
import { computed } from 'vue';
import AppLoader from '@/components/shared/AppLoader.vue';

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

  cls: {
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
  },

  fontSize: {
    type: String,
    default: null,
    validator(value) {
      return ['small', 'medium', 'large'].includes(value);
    }
  }
});

const classNames = computed(() => ({
  btn: true,
  [`btn--${props.appearance}`]: props.appearance,
  [`btn--${props.size}`]: props.size,
  [`btn--font-size-${props.fontSize}`]: props.fontSize,
  [`btn--processing`]: props.processing,
  [`btn--${props.cls}`]: props.cls
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
    <span>
      <slot />
    </span>
    <app-loader v-if="processing" />
  </component>
</template>

<style lang="scss" scoped src="./AppBtn.scss"></style>
