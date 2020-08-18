import { refs } from './refs.js';
import item from '../templates/item.hbs';

export function markUp(data) {
  refs.gallery.insertAdjacentHTML('beforeend', item(data));
}
