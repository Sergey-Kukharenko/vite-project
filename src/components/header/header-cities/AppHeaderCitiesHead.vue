<script setup></script>

<template>
  <div class="header">
    <div class="title">Выберите город</div>
    <div class="close">
      <img src="/images/icons/cross.png" alt="cross" />
      <img src="/images/icons/cross-hovered.png" alt="cross" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
  padding-bottom: 15px;

  border-bottom: 1px solid #e6e6e6;
}

.title {
  font-family: var(--rotonda-bold);
  font-size: 30px;
  line-height: 36px;
  color: var(--black-title);
}

.close {
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;

  & img {
    position: absolute;
    top: 0;
    left: 0;

    display: block;

    max-width: 100%;

    transition: opacity 0.2s ease 0s;

    &:first-child {
      z-index: 2;
      opacity: 1;
    }

    &:last-child {
      z-index: 1;
      opacity: 0;
    }
  }

  &:hover {
    & img {
      &:first-child {
        opacity: 0;
      }

      &:last-child {
        opacity: 1;
      }
    }
  }
}
</style>