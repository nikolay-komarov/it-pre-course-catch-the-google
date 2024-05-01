import { getGooglePositions, getGridSize } from '../../data.js';
import { Google } from '../google/google.component.js';

export function GameGrid() {
  const gridSize = getGridSize();
  const googlePosition = getGooglePositions();

  const gridEl = document.createElement('table');

  for (let y = 0; y < gridSize.y; y++) {
    const rowEl = document.createElement('tr');

    for (let x = 0; x < gridSize.x; x++) {
      const cellEl = document.createElement('td');

      if (
        googlePosition.x === x &&
        googlePosition.y === y
      ) {
        cellEl.append(Google());
      }

      rowEl.append(cellEl);
    }

    gridEl.append(rowEl);
  }

  return gridEl;
};
