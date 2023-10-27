import { reactive } from 'vue';

export const store = reactive({
  location: 'Москва и область',

  setLocation(payload) {
    this.location = payload;
  }
});
