<script setup>
import AppFooterMediaList from '@/components/footer/footer-media/AppFooterMediaList.vue';

const { media } = defineProps({
  media: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="footer-media">
    <div v-for="item in media" :key="item.title" class="item">
      <div class="title">{{ item.title }}</div>
      <app-footer-media-list :list="item.list" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-media {
  @include lt-md {
    gap: 20px;
  }

  display: flex;
  width: 100%;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:first-child {
    @include gt-sm {
      width: 34.2%;
    }
  }
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  color: var(--black);
}
</style>
