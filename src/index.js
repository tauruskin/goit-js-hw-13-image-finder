import './css/styles.css';
import apiService from './js/apiService.js';

import { markUp } from './js/markUp.js';
import { refs } from './js/refs.js';

import debounce from 'lodash.debounce';

refs.form.addEventListener('input', debounce(handleInput, 500));
refs.loadMoreButton.addEventListener('click', handleClick);

refs.loadMoreButton.addEventListener('click', debounce(scrollDown, 1500));

function handleInput(e) {
  apiService.resetPage();
  chanchedStateBtn();
  refs.gallery.innerHTML = '';
  apiService.query = e.target.value;
  callFetch();
}

function handleClick() {
  callFetch();
}

function callFetch() {
  if (apiService.query) {
    apiService
      .makeFetch()
      .then(data => {
        markUp(data);
        chanchedStateBtn(data);
      })
      .catch(err => console.log(err));
  }
}

function scrollDown() {
  if (apiService.pageNumber > 2) {
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  }
}

function chanchedStateBtn(data) {
  if (apiService.pageNumber > 1 && data.length > 0) {
    refs.loadMoreButton.classList.remove('hidden');
    return;
  }
  refs.loadMoreButton.classList.add('hidden');
}
