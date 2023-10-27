<script setup>
import { computed, ref } from 'vue';
import { Collapse } from 'vue-collapsed';
import AppIcon from '@/components/shared/AppIcon.vue';
import { useMq } from 'vue3-mq';

defineProps({
  section: {
    type: Object,
    default: () => ({})
  }
});

const classNames = computed(() => ({
  'footer-section': true,
  active: isVisible.value
}));

const mq = useMq();
const isMobile = computed(() => mq.current === 'xs' || mq.current === 'sm');

const isVisible = ref(false);
const isExpand = computed(() => (isMobile.value ? isVisible.value : true));
const onVisibility = () => isMobile.value && (isVisible.value = !isVisible.value);
</script>

<template>
  <div :class="classNames">
    <div class="title" @click="onVisibility">
      {{ section.title }}
      <app-icon name="footer-plus" />
    </div>

    <Collapse :when="isExpand" class="expand">
      <div class="list">
        <a v-for="item in section.list" :key="item" class="item">
          {{ item.name }}
        </a>
      </div>
    </Collapse>
  </div>
</template>

<style scoped lang="scss" src="./AppFooterSection.scss" />
