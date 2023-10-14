<script setup>
import AppCard from '@/components/card/AppCard.vue';

const { list } = defineProps({
  list: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="list-cards">
    <div v-for="(card, idx) in list" :key="idx" class="item">
      <app-card :card="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-cards {
  display: flex;
  align-items: center;
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

  & .item {
    flex: 0 0 288px;
  }
}
</style>
