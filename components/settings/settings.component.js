import { start } from '../../data.js';

export function Settings() {
  const el = document.createElement('button');
  el.innerHTML = 'Start';
  el.addEventListener('click', () => {
    start();
  });

  return el;
}
