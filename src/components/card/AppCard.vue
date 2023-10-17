<script setup>
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppIcon from '@/components/shared/AppIcon.vue';

const { card } = defineProps({
  card: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <div class="card">
    <div class="figure">
      <img :src="card.img" alt="" class="img" />
    </div>
    <div class="figcaption">
      <div class="group-text">
        <div class="vendor-code">{{ card.vendor_code }}</div>
        <div class="title">{{ card.title }}</div>
        <div class="price">{{ card.price.current }}</div>
      </div>
      <app-btn class="card__btn" font-size="small">Купить</app-btn>
      <div class="controls">
        <div class="view">
          <app-icon :name="card.view.icon" />
          <div class="controls__label">{{ card.view.label }}</div>
        </div>
        <div class="availability">
          <app-icon :name="card.availability.icon" />
          <div class="controls__label">{{ card.availability.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./AppCard.scss" scoped></style>
