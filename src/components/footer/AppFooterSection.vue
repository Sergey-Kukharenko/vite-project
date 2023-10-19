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

<style scoped lang="scss">
.footer-section {
  @include gt-sm {
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  @include lt-md {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  border-bottom: 1px solid #e5e5e5;

  &:first-child {
    @include lt-md {
      border-top: 1px solid #e5e5e5;
    }
  }

  &.active {
    & .icon {
      @include lt-md {
        transform: rotate(45deg);
      }
    }

    & .list {
      @include lt-md {
        display: block;
        padding: 0 16px;
      }
    }
  }
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
}

.list {
  @include gt-sm {
    column-count: 5;
  }

  @include lt-md {
    display: none;
    padding: 0 16px;
  }
}

.item {
  @include gt-sm {
    line-height: 18px;
    color: var(--grey-dark);
  }

  @include lt-md {
    line-height: 25px;
    color: var(--black);
  }

  display: block;
  font-size: 13px;
}

.icon {
  @include gt-sm {
    display: none;
  }

  @include lt-md {
    display: block;
  }

  transition: 0.2s;
}
</style>
