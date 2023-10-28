import { reactive } from 'vue';

export const location = reactive({
  city: 'Москва и область',

  setCity(payload) {
    this.city = payload;
  }
});
