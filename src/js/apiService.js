export default {
  pageNumber: 1,
  searchQuery: '',
  apiKey: '17927452-e27196dda86f1b902fb2f8233',
  makeFetch() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=12&key=${this.apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.pageNumber += 1;
        return data.hits;
      });
  },
  set query(value) {
    this.searchQuery = value;
  },
  get query() {
    return this.searchQuery;
  },
  resetPage() {
    this.pageNumber = 1;
  },
};
