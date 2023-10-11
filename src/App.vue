<script setup>
import AppCard from '@/components/card/AppCard.vue';

const card = {
  img: 'https://placehold.co/307X230.jpg',
  vendor_code: 'LEGO Star Wars™ 75350',
  title: 'Шлем командира Коди',
  price: {
    current: '10 999 ₽',
    old: '10 999 ₽'
  },
  view: {
    icon: 'eye',
    label: 'Просмотр'
  },
  availability: {
    icon: 'map-point',
    label: 'Проверить наличие'
  }
};
</script>

<template>
  <div class="layout layout--dm">
    <app-card :card="card" />
  </div>
</template>
