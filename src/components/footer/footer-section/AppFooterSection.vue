<script setup>
import { computed, ref } from 'vue';
import AppIcon from '@/components/shared/AppIcon.vue';

const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  }
});

const isVisible = ref(false);

const classNames = computed(() => ({
  'footer-section': true,
  active: isVisible.value
}));
</script>

<template>
  <div :class="classNames">
    <div class="title" @click="isVisible = !isVisible">
      {{ props.section.title }}
      <app-icon name="footer-plus" />
    </div>
    <div class="list">
      <a v-for="item in props.section.list" :key="item" class="item">
        {{ item.name }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./AppFooterSection.scss" />
