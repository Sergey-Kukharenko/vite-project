<script setup>
import AppHeader from '@/components/header/AppHeader.vue';
import { useSearchStore } from '@/stores/useSearchStore.js';
import { ref } from 'vue';

const store = useSearchStore();

// const payload = 'so';
// const { data } = useFetch(`https://hn.algolia.com/api/v1/search?query=${payload}`);

// const ok = ref({ name: 'se' });
//
// console.log(ok.value.name);
</script>

<template>
  <app-header />
  <div style="position: fixed; bottom: 0">
    <!--    <h1 v-if="store.loading">{{ store.loading }}</h1>-->
    <!--    <h1 v-if="store.error">{{ store.error }}</h1>-->
    <!--      <div v-if="store.data">{{ store.data }}</div>-->
    <!--    <div>-->
    <!--      <div v-for="item in store.data.hits" :key="item">{{ item.title }}</div>-->
    <!--    </div>-->

    <h3>{{ store.data.length }}</h3>
    <!--    <h1 v-if="store.error">{{ store.error }}</h1>-->
  </div>
</template>

<style lang="scss">
body {
  background: #fff;
}
</style>
