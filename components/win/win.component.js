import { playAgain } from '../../data.js';

export function Win() {
  const el = document.createElement('div');

  const resultTitle = document.createElement('span');
  resultTitle.innerHTML = 'WIN';

  const playAgainButton = document.createElement('button');
  playAgainButton.innerHTML = 'Play Again';
  playAgainButton.addEventListener('click', () => {
    playAgain();
  });

  el.append(
    resultTitle,
    playAgainButton,
  );
  
  return el;
}
