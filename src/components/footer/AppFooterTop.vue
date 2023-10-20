<script setup>
import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import AppFooterMedia from '@/components/footer/footer-media/AppFooterMedia.vue';

const props = defineProps({
  button: {
    type: Object,
    default: () => ({})
  },

  time: {
    type: String,
    default: ''
  },

  media: {
    type: Array,
    default: () => []
  }
});

const { button, time, media } = props;
</script>

<template>
  <div class="footer-top">
    <div class="item item--phone">
      <app-btn appearance="grey" cls="phone">
        <app-icon :name="button.icon" />
        {{ button.phone }}
      </app-btn>
      <div class="time">{{ time }}</div>
    </div>
    <div class="item item--social">
      <app-footer-media :media="media" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-top {
  @include lt-md {
    flex-direction: column;
  }

  display: flex;
}

.item {
  @include lt-md {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  display: flex;
  align-items: center;

  &--phone {
    @include gt-sm {
      width: 40.4444%;
    }

    gap: 10px;
  }

  &--social {
    @include lt-md {
      border-top: 1px solid var(--border-grey-color);
    }

    flex: 1;
  }
}

.time {
  max-width: 127px;
  font-size: 11px;
  line-height: 15px;
}
</style>
