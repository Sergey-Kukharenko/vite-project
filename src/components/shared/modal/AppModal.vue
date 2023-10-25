<script setup>
import AppModalAbstraction from '@/components/shared/modal/AppModalAbstraction.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },

  align: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);
const close = () => emit('close');
</script>

<template>
  <AppModalAbstraction v-if="props.visible" :align="props.align" @close="close">
    <slot />
  </AppModalAbstraction>
</template>
