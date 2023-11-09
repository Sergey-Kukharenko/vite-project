<script setup>
import AppCard from '@/components/card/AppCard.vue';

defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="list-cards">
    <app-card v-for="(card, idx) in list" :key="idx" :card="card" />
  </div>
</template>

<style lang="scss" scoped>
.list-cards {
  display: flex;
  justify-content: center;

  @include gt-sm {
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 24px;
  }

  @include lt-md {
    overflow-x: auto;
    flex-wrap: nowrap;
    column-gap: 10px;
    justify-content: flex-start;

    margin: 30px auto;
    padding: 0 10px;

    -webkit-overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
    @include lt-md {
      display: none;
    }
  }
}
</style>
