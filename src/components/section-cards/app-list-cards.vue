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

<style lang="css"></style>
