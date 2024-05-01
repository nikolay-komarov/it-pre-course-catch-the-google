import { GAME_STATES, addSubscriber, getGameState } from './data.js';

import { GameGrid } from './components/game-grid/game-grid.component.js';
import { ResultPanel } from './components/result-panel/result-panel.component.js';
import { Settings } from './components/settings/settings.component.js';
import { Win } from './components/win/win.component.js';
import { Lose } from './components/lose/lose.component.js';

function rerender() {
  const rootEl = document.getElementById('root');
  rootEl.innerHTML = '';

  const gameState = getGameState();

  switch (gameState) {
    case GAME_STATES.SETTINGS:
      rootEl.append(Settings())
      break;
    case GAME_STATES.IN_PROGRESS:
      rootEl.append(
        ResultPanel(),
        GameGrid()
      );
      break;
    case GAME_STATES.WIN:
      rootEl.append(Win());
      break;
    case GAME_STATES.LOSE:
      rootEl.append(Lose());
      break;  
    default:
      throw new Error('not supported state');
  }
}

rerender();

addSubscriber(rerender);
