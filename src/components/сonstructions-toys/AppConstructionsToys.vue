<script setup>
import { ref } from 'vue';
import dataConstructionsToys from '@/data/constructions-toys.js';
import AppConstructionsToysList from '@/components/сonstructions-toys/AppConstructionsToysList.vue';

const { title, description, list } = ref(dataConstructionsToys).value;
</script>

<template>
  <div class="constructions-toys">
    <div class="layout layout--desktop layout--mobile">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>

    <app-constructions-toys-list :list="list" />
  </div>
</template>

<style scoped lang="scss">
.constructions-toys {
  padding: 40px 0;
  text-align: center;
  background: #f1f1f1;
}

.title {
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
}

.description {
  margin: 20px auto;
  font-size: 15px;
  line-height: 21px;
  white-space: pre-wrap;

  @include lt-md {
    text-align: left;
  }
}
</style>
