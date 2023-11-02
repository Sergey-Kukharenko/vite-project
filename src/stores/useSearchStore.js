import { defineStore } from 'pinia';
import { ref } from 'vue';

// export const useSearchStore = defineStore('search', {
//   state: () => ({ query: '' }),
//
//   actions: {
//     setQuery(payload) {
//       this.query = payload;
//     }
//   }
// });

export const useSearchStore = defineStore('search', () => {
  const query = ref('');

  const setQuery = (payload) => {
    query.value = payload;
  };

  return {
    query,
    setQuery
  };
});
