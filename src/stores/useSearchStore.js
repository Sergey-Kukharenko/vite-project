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

// const result = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search.value}`);
//
// console.log(result);

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
