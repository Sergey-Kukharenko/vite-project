<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
    default: ''
  },

  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'email'].includes(value);
    }
  },

  placeholder: {
    type: String,
    default: null
  },

  disabled: {
    type: Boolean,
    default: false
  },

  appearance: {
    type: String,
    default: 'grey',
    validator(value) {
      return ['grey', 'white'].includes(value);
    }
  },

  cls: {
    type: String,
    default: null
  }
});

defineEmits(['update:modelValue']);

const classNames = computed(() => ({
  input: true,
  [`input--${props.appearance}`]: props.appearance,
  [`input--${props.cls}`]: props.cls
}));
</script>

<template>
  <input
    :value="modelValue"
    :type="props.type"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
    :class="classNames"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped lang="scss">
.input {
  @include gt-sm {
    width: 290px;
  }

  @include lt-md {
    width: 100%;
  }

  box-sizing: border-box;
  padding: 10px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--black);

  background: var(--grey-extralight);
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25) inset;

  &:disabled {
    color: var(--grey);
    background: #f1f1f1;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.25) inset;

    &::placeholder {
      color: inherit;
    }
  }

  &--grey {
    background: var(--grey-extralight);
  }

  &--white {
    background: var(--white);
  }
}
</style>
