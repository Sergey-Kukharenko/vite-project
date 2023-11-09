import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useSearchStore = defineStore('search', () => {
  const query = ref('');

  const isLoading = ref(null);
  const data = ref({});
  const error = ref('');

  const setQuery = async (payload) => {
    query.value = payload;

    isLoading.value = true;
    error.value = '';

    const url = 'https://hn.algolia.com/api/v1/search';
    await axios
      .get(url, { query: payload })
      .then((response) => (data.value = response.data))
      .catch((e) => (error.value = e.message))
      .finally(() => (isLoading.value = false));
  };

  return {
    query,
    setQuery,
    data,
    isLoading,
    error
  };
});
