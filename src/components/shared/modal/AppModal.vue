<script setup>
import AppModalAbstraction from '@/components/shared/modal/AppModalAbstraction.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },

  align: {
    type: String,
    default: 'center',
    validator(value) {
      return ['start', 'center'].includes(value);
    }
  },

  closeBtn: {
    type: Boolean,
    required: true
  },

  width: {
    type: String,
    default: ''
  },

  grow: {
    type: Boolean,
    default: false
  },

  cls: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);
const close = () => emit('close');
</script>

<template>
  <AppModalAbstraction
    v-if="props.visible"
    :align="props.align"
    :close-btn="props.closeBtn"
    :width="props.width"
    :grow="props.grow"
    :cls="props.cls"
    @close="close"
  >
    <slot />
  </AppModalAbstraction>
</template>
