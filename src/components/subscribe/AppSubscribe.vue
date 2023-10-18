<script setup>
import AppSubscribeForm from '@/components/subscribe/subscribe-form/AppSubscribeForm.vue';
import { useMq } from 'vue3-mq';
import { computed } from 'vue';

const mq = useMq();

const getDevice = computed(() => (mq.current === 'xs' || mq.current === 'sm' ? 'mobile' : 'desktop'));
</script>

<template>
  <div class="layout layout--desktop subscribe">
    <div class="title">Подписывайтесь на рассылку</div>
    <app-subscribe-form />
    <img :src="`/images/subscribe/${getDevice}/envelope.png`" alt="" class="img envelope" />
    <img :src="`/images/subscribe/${getDevice}/bird.png`" alt="" class="img bird" />
  </div>
</template>

<style lang="scss" scoped src="./AppSubscribe.scss" />
