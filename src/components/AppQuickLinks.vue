<script setup>
import { ref } from 'vue';
import dataQuickLinks from '@/data/quick-links';

const quickLinks = ref(dataQuickLinks);
</script>

<template>
  <div class="layout layout--desktop layout--mobile quick-links">
    <a v-for="(item, idx) in quickLinks" :key="idx" class="card">
      <div class="figure">
        <img :src="item.img" class="img" alt="" />
      </div>
      <div class="figcaption">{{ item.text }}</div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.quick-links,
.figure {
  display: flex;
  justify-content: center;
}

.quick-links {
  @include gt-sm {
    gap: 32px;
    margin: 50px auto;
  }

  @include lt-md {
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: flex-start;

    margin: 30px auto;

    -webkit-overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
    @include lt-md {
      display: none;
    }
  }
}

.card {
  max-width: 75px;
  text-align: center;
}

.figure {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;
}

.figure-img {
  max-width: 100%;
}

.figcaption {
  margin-top: 7px;

  font-size: 12px;
  line-height: normal;
  color: black;
}

.link {
  @include lt-md {
    flex: 0 0 auto;
    margin: 0 12px;
  }
}
</style>
