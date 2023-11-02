<script setup>
defineProps({
  tags: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="header-tags">
    <div v-for="item in tags" :key="item" class="tag">
      {{ item }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-tags {
  display: flex;
  column-gap: 7px;
  align-items: center;
  width: 100%;
}

.tag {
  cursor: pointer;

  padding: 0 8px;

  font-size: 14px;
  line-height: 30px;
  color: black;

  background: var(--grey-bg-tags);
  border-radius: 3px;
}
</style>
