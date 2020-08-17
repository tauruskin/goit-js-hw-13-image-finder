import refs from './refs.js';
import debounce from 'lodash.debounce';

let pageNumber;

refs.search.addEventListener(
  'input',
  debounce(async () => {
    pageNumber = 1;
    if (refs.gallery.innerHTML !== '') {
      refs.gallery.innerHTML = '';
    }
    if (refs.search.value === '') {
      refs.gallery.innerHTML = '';
      refs.loadMoreButton.classList.add('hide');
      return;
    }
    await getImages(refs.search.value, pageNumber);
    refs.gallery.innerHTML === ''
      ? refs.loadMoreButton.classList.add('hide')
      : refs.loadMoreButton.classList.remove('hide');
  }, 500),
);
refs.loadMoreButton.addEventListener('click', () => {
  pageNumber++;
  getImages(refs.search.value, pageNumber);
  setTimeout(
    () =>
      window.scrollTo({
        top: document.body.scrollHeight - 3100,
        behavior: 'smooth',
      }),
    500,
  );
});
