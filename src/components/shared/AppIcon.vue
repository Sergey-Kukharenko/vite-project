<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const icon = defineAsyncComponent(() => import(`/src/assets/icons/${props.name}.svg`));
</script>

<template>
  <component :is="icon" class="icon" />
</template>
<style scoped lang="scss">
.icon {
  display: block;
}
</style>
