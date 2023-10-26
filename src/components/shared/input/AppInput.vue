<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
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
  },

  errors: {
    type: Array,
    default: () => []
  }
});

defineEmits(['update:modelValue']);

const classNames = computed(() => ({
  'app-input': true,
  [`app-input--${props.appearance}`]: props.appearance,
  [`app-input--${props.cls}`]: props.cls,
  [`app-input--error`]: props.errors.length
}));
</script>

<template>
  <div :class="classNames">
    <input
      :value="modelValue"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div v-for="error of errors" :key="error.$uid" class="errors">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./AppInput.scss" />
