import { defineStore } from 'pinia';
import { ref } from 'vue';
import { findObjByKey } from '@/helpers/index.js';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);

  const addToCart = (payload) => {
    const sameObj = findObjByKey(cart.value, payload, 'id');

    sameObj ? (sameObj.qty += payload.qty) : cart.value.push(payload);
  };

  const removeFromCart = (payload) => {
    const sameObj = findObjByKey(cart.value, payload, 'id');

    if (sameObj === undefined) return;

    sameObj && sameObj.qty > 1 ? sameObj.qty-- : cart.value.splice(cart.value.indexOf(sameObj), 1);
  };

  return {
    cart,
    addToCart,
    removeFromCart
  };
});
