<script setup>
import AppBtn from './components/app-btn.vue';
</script>

<template>
  <div class="row-example">
    <app-btn disabled>button</app-btn>
    <app-btn size="small">button</app-btn>
    <app-btn>button</app-btn>
    <app-btn size="large">button</app-btn>
  </div>
  <div class="row-example">
    <app-btn disabled appearance="ghost">button</app-btn>
    <app-btn appearance="ghost" size="small">button</app-btn>
    <app-btn appearance="ghost"> button</app-btn>
    <app-btn appearance="ghost" size="large">button</app-btn>
  </div>
  <div class="row-example">
    <h1>This is h1 tag</h1>
  </div>
  <div class="row-example">
    <h2>This is h2 tag</h2>
  </div>
</template>
