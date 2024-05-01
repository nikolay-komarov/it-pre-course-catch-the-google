import { catchGoogle } from '../../data.js';

export function Google() {
  const el = document.createElement('img');
  el.src = '../../assets/images/google.svg';
  el.width = 48;
  el.height = 48;

  el.addEventListener('click', catchGoogle);

  return el;
}
