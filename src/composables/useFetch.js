import { ref, watchEffect } from 'vue';

export function useFetch(url) {
  const loading = ref(true);
  const data = ref(null);
  const error = ref(null);

  watchEffect(() => {
    loading.value = true;
    data.value = null;
    error.value = null;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        data.value = json;
      })
      .catch((error) => {
        error.value = error;
      })
      .finally(() => {
        loading.value = false;
      });
  });

  return {
    loading,
    data,
    error
  };
}
