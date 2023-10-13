<script setup>
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppListCards from '@/components/section-cards/app-list-cards.vue';

const { title, list, button } = defineProps({
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
  <div class="section-cards">
    <h1 v-if="title">{{ title }}</h1>
    <app-list-cards :list="list" class="list" />
    <app-btn tag="a" :href="button.href">{{ button.label }}</app-btn>
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
