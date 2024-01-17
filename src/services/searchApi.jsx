function fetchApi(nextName) {
  return fetch(
    `https://pixabay.com/api/?q=cat&page=1&key=34983998-155dfb76bac09cdf48f99cd2f&q=${nextName}&orientation=horizontal&per_page=20`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No mame ${nextName}`));
  });
}

const api = {
  fetchApi,
};

export default api;
