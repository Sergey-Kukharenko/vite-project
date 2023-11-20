<script setup>
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppListCards from '@/components/section-cards/app-list-cards.vue';

defineProps({
  title: {
    type: String,
    default: ''
  },

  list: {
    type: Array,
    default: () => []
  },

  button: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <div class="layout layout--desktop section-cards">
    <h1 v-if="title">{{ title }}</h1>
    <app-list-cards :list="list" class="list" />
    <app-btn tag="a" :href="button.href" font-size="small">{{ button.label }}</app-btn>
  </div>
</template>

<style lang="scss" scoped>
.section-cards {
  text-align: center;

  & .list {
    margin: 50px 0 30px;
  }
}
</style>
