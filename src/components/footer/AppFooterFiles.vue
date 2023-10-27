<script setup>
defineProps({
  files: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="footer-files">
    <a v-for="item in files" :key="item.text" :href="item.href">
      {{ item.text }}
    </a>
  </div>
</template>

<style scoped lang="scss">
.footer-files {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 20px;
  align-items: center;
}

a {
  font-size: 13px;
  line-height: 1;
  color: var(--grey-dark);

  &:hover {
    text-decoration: underline;
  }
}
</style>
