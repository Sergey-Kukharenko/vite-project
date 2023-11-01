<script setup>
import AppIcon from '@/components/shared/AppIcon.vue';

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <a :href="item.href" class="header-products-item">
    <img :src="item.img" :alt="item.title" />
    <div class="figcaption">
      <div class="title">{{ item.title }}</div>
      <div class="name">{{ item.name }}</div>
      <div class="price">{{ item.price }}</div>
    </div>
    <button>
      <app-icon name="basket" />
    </button>
  </a>
</template>

<style scoped lang="scss">
.header-products-item {
  display: flex;
  flex-basis: 469px;
  column-gap: 10px;
  align-items: flex-start;

  color: inherit;

  outline: 1px solid;
}

img {
  width: 96px;
  height: 70px;
}

.figcaption {
  flex: 1;
}

.title {
  font-size: 13px;
  line-height: 20px;
  color: var(--grey-color-categories);
}

.name {
  overflow: hidden;

  max-width: 278px;

  font-size: 14px;
  line-height: 20px;
  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  margin-top: 10px;

  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: black;
}

button {
  padding: 0;

  background: none;
  background: var(--yellow);
  border: none;
  border-radius: 50%;

  transition: background 0.2s;

  &:hover {
    background: black;

    & .icon {
      fill: white;
    }
  }
}

.icon {
  fill: black;
  transition: fill 0.2s;
}
</style>
