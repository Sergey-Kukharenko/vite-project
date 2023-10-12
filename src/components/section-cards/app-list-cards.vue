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

<style lang="css" scoped>
.list-cards {
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 24px;
  align-items: center;
  justify-content: space-between;
}

.item {
  flex: 1 1 23%;
}
</style>
