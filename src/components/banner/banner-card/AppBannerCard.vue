<script setup></script>

<template>
  <div class="banner-card">
    <img src="https://placehold.co/1222X403.jpg" class="banner-card__img" alt="" />
  </div>
</template>

<style scoped lang="css">
.banner-card {
  background: #005be4;

  @media screen and (min-width: 768px) {
    min-height: 403px;
  }

  @media screen and (max-width: 767px) {
    min-height: 384px;
  }
}

.banner-card__img {
  display: block;
  max-width: 100%;
}
</style>
