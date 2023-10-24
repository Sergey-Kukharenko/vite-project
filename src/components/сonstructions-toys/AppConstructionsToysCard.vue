<script setup>
const { card } = defineProps({
  card: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <a :href="card.href" class="card">
    <div class="figure">
      <img :src="card.img" alt="" />
    </div>
    <div class="title">{{ card.title }}</div>
  </a>
</template>

<style scoped lang="scss">
.card {
  flex: 0 0 166px;
}

.figure {
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 146px;
  min-height: 158px;
  margin: 0 auto 14px;
}

img {
  display: block;
  max-width: 100%;
  mix-blend-mode: darken;
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: black;
}
</style>
