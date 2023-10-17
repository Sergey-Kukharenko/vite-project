<script setup>
import AppSubscribeForm from '@/components/subscribe/AppSubscribeForm.vue';
</script>

<template>
  <div class="layout layout--desktop layout--mobile subscribe">
    <div class="title">Подписывайтесь на рассылку</div>
    <app-subscribe-form />
    <div class="description">
      Нажимая кнопку «Подписаться», вы соглашаетесь с <a href="">политикой конфиденциальности</a> и
      <a href="">условиями оферты</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.subscribe {
  padding: 34px 78px 48px;
  background: var(--black);
  border-radius: 12px;
}

.title {
  max-width: 293px;
  margin-bottom: 30px;

  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  color: var(--white);
}

.description {
  margin-top: 20px;
  font-size: 12px;
  line-height: normal;
  color: var(--white);

  & a {
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    text-decoration: underline;
  }
}
</style>
