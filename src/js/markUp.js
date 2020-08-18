import { refs } from './refs.js';
import template from '../templates/template.hbs';

export function markUp(data) {
  refs.list.insertAdjacentHTML('beforeend', template(data));
}
