<script setup>
import AppConstructionsToysCard from '@/components/сonstructions-toys/AppConstructionsToysCard.vue';

const { list } = defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="layout layout--desktop layout--mobile constructions-toys-list">
    <app-constructions-toys-card v-for="card in list" :key="card.label" :card="card" />
  </div>
</template>

<style scoped lang="scss">
.constructions-toys-list {
  display: flex;
  align-items: center;

  @include gt-sm {
    gap: 54px;
    justify-content: center;
  }

  @include lt-md {
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 34px;
    justify-content: flex-start;

    -webkit-overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
    @include lt-md {
      display: none;
    }
  }
}
</style>
