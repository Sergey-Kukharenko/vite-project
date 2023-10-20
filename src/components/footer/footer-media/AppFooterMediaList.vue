<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="footer-media-list">
    <div v-for="item in props.list" :key="item.title" class="item">
      <app-icon :name="item.icon" :class="[item.icon, { colored: item.colored }]" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-media-list {
  display: flex;
  gap: 10px;
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: var(--black);
}

.item {
  cursor: pointer;
}

.icon {
  fill: black;
}

.telegram {
  &:hover {
    fill: var(--telegram-colored);
  }
}

.vk {
  &:hover {
    fill: var(--vk);
  }
}

.youtube {
  &:hover {
    fill: var(--youtube);
  }
}

.dzen {
  &:hover {
    fill: var(--dzen);
  }
}

.colored {
  &.telegram {
    fill: var(--telegram-colored);

    &:hover {
      fill: var(--telegram-colored-hover);
    }
  }

  &.whatsapp {
    fill: var(--whatsapp-colored);

    &:hover {
      fill: var(--whatsapp-colored-hover);
    }
  }
}
</style>
