<script setup>
import { useEventListener } from '@/composables/useEventListener.js';
import { computed } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';

const props = defineProps({
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
    default: '300'
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
const handleKeyup = (event) => {
  if (event.keyCode !== 27) {
    return;
  }

  close();
};

useEventListener(window, 'keyup', handleKeyup);

const classNames = computed(() => ({
  modal: true,
  [`modal--${props.align}`]: props.align,
  ['modal--grow']: props.grow,
  [`modal--${props.cls}`]: props.cls
}));

const styles = computed(() => ({
  style: {
    'flex-basis': `${props.width}px`
  }
}));
</script>

<template>
  <Teleport to="body">
    <div :class="classNames">
      <div class="overlay" @click="close" />
      <div class="content" v-bind="styles">
        <slot />
        <button v-if="props.closeBtn" type="button" class="button" @click="close">
          <app-icon name="close" />
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style src="./AppModal.scss" lang="scss" scoped />
