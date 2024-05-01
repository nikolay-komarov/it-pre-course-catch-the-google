import { getCatchCount, getMissCount } from '../../data.js';

export function ResultPanel() {
  const el = document.createElement('span');
  el.innerHTML = `CATCHS: ${getCatchCount()} | MISS: ${getMissCount()}`;

  return el;
}