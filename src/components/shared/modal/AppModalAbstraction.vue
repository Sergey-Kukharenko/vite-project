<script setup>
import { useEventListener } from '@/composables/useEventListener.js';
import { computed } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';

const props = defineProps({
  align: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close']);
const close = () => emit('close');
const handleKeyup = (event) => {
  if (event.keyCode !== 27) {
    return;
  }

  close();
};

useEventListener(window, 'keyup', handleKeyup);

const classNames = computed(() => ({
  modal: true,
  [`modal--${props.align}`]: props.align
}));
</script>

<template>
  <Teleport to="body">
    <div :class="classNames">
      <div class="overlay" @click="close" />
      <div class="content">
        <div class="layout">
          <slot />
          <button type="button" class="button" @click="close">
            <app-icon name="close" />
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style src="./AppModal.scss" lang="scss" scoped />
