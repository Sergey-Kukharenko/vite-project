import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

export const useSearchStore = defineStore('search', () => {
  const query = ref('');
  const result = ref([]);
  const loading = ref(null);
  const error = ref(null);

  const setQuery = async (payload) => {
    query.value = payload;

    const url = `https://hn.algolia.com/api/v1/search`;
    // const { data } = await axios.get(url, {
    //   query: payload
    // });
    //
    // result.value = data.hits;

    loading.value = true;
    error.value = '';

    await axios
      .get(url, {
        query: payload
      })
      .then(({ data }) => {
        result.value = data.hits;
      })
      .catch((e) => {
        error.value = e.message;
      })
      .finally(() => (loading.value = false));
  };

  return {
    query,
    setQuery,
    result,
    loading,
    error
  };
});
