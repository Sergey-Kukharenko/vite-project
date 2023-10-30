<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';

defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="messengers">
    <a v-for="item in list" :key="item.title" class="item">
      <app-icon :name="item.icon" :class="[item.icon, { colored: item.colored }]" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.messengers {
  display: flex;
  gap: 10px;
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
