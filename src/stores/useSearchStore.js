import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

export const useSearchStore = defineStore('search', () => {
  const query = ref('');

  const data = ref({});
  const loading = ref(null);
  const error = ref(null);

  const setQuery = async (payload) => {
    query.value = payload;

    loading.value = true;
    error.value = '';

    await axios
      .get('https://hn.algolia.com/api/v1/search', {
        query: payload
      })
      .then((response) => {
        data.value = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        error.value = e.message;
      })
      .finally(() => (loading.value = false));
  };

  return {
    query,
    setQuery,
    data,
    loading,
    error
  };
});
