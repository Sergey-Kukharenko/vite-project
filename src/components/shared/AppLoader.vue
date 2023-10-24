<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '#fff'
  },

  size: {
    type: String,
    default: '10px'
  },

  margin: {
    type: String,
    default: '2px'
  }
});

const styles = computed(() => ({
  style: {
    backgroundColor: props.color,
    width: props.size,
    height: props.size,
    margin: props.margin
  }
}));
</script>

<template>
  <div class="loader">
    <div v-for="item in Array.from({ length: 3 })" :key="item" v-bind="styles" class="circle" />
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
}

.circle {
  display: inline-block;

  width: 10px;
  height: 10px;
  margin: 2px;

  background-color: white;
  border-radius: 100%;

  -webkit-animation: circleStretchDelay 0.7s infinite linear;
  animation: circleStretchDelay 0.7s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  &:nth-child(odd) {
    animation-delay: 0s;
  }

  &:nth-child(even) {
    animation-delay: 0.35s;
  }
}

@-webkit-keyframes circleStretchDelay {
  50% {
    transform: scale(0.75);
    opacity: 0.2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes circleStretchDelay {
  50% {
    transform: scale(0.75);
    opacity: 0.2;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
