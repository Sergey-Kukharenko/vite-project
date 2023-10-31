<script setup>
defineProps({
  category: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <div class="header-search-category">
    <div class="title">{{ category.title }}</div>
    <div class="list">
      <a v-for="item in category.list" :key="item" :href="item.href" class="link">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-search-category {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.title {
  font-size: 14px;
  color: var(--grey-color-categories);
}

.list {
  display: block;
}

.link {
  cursor: pointer;

  display: block;

  margin-top: 6px;

  font-size: 14px;
  line-height: 1;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
