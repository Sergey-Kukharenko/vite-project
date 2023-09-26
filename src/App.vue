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
  <div class="row-example">
    <h3>This is h3 tag</h3>
  </div>
  <div class="row-example">
    <h4>This is h4 tag</h4>
  </div>
  <div class="row-example">
    <div class="text-xxl">
      Лид. Цифры и факты о том, как все начиналось и что стоит за всемирно известным брендом. А также увлекательные
      истории и яркие события из жизни нашей компании ждут вас. Итак, начнем!
    </div>
  </div>
  <div class="row-example">
    <div class="text-xl">
      Лид. Цифры и факты о том, как все начиналось и что стоит за всемирно известным брендом. А также увлекательные
      истории и яркие события из жизни нашей компании ждут вас. Итак, начнем!
    </div>
  </div>
</template>
