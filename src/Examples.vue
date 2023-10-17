<script setup>
import AppBannerCard from '@/components/banner/AppBannerCard.vue';
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppInput from '@/components/shared/input/AppInput.vue';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <AppBannerCard />
  <div class="row-example">
    <app-input v-model:value="value" placeholder="Label" />
    <app-input v-model:value="value" placeholder="Label" disabled />
    <app-input v-model:value="value" placeholder="Label" appearance="white" />
  </div>
  <div class="row-example">
    <app-btn tag="a">link</app-btn>
    <app-btn tag="a" href="/some" target="_blank">link</app-btn>
  </div>
  <div class="row-example">
    <app-btn :processing="true">button</app-btn>
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
    <div class="text-xxl">This is an example text.</div>
  </div>
  <div class="row-example">
    <div class="text-xl">This is an example text.</div>
  </div>
  <div class="row-example">
    <div class="text-lg">This is an example text.</div>
  </div>
  <div class="row-example">
    <p>This is an example text.</p>
  </div>
  <div class="row-example">
    <div class="text-sm">This is an example text.</div>
  </div>
  <div class="row-example">
    <div class="text-xs">This is an example text.</div>
  </div>
  <div class="row-example">
    <div class="text-xs text-error">This is an example text.</div>
  </div>
  <div class="row-example">
    <div class="text-xs text-grey">This is an example text.</div>
  </div>
  <div class="row-example">
    <a href="#">This is an example text.</a>
  </div>
</template>
<style lang="scss">
body {
  background: #fff;
}
</style>
