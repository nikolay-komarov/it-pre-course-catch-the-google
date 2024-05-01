export const GAME_STATES = {
  SETTINGS: 'settings',
  IN_PROGRESS: 'in_progress',
  WIN: 'win',
  LOSE: 'lose'
};

const _data = {
  gameState: GAME_STATES.SETTINGS,
  catch: 0,
  miss: 0,
  time: new Date(),
  settings: {
    gridSize: {
      x: 4,
      y: 4,
    },
    winPoints: 5,
    losePoints: 5,
    stepTimeSec: 2,
  },
  heroes: {
    google: {
      x: 0,
      y: 0,
    },
    player1: {},
    player2: {},
  },
};

// setter/mutation/command
export function setGridSize(x, y) {
  if (x < 1) throw new Error('Incorrect X size setting');
  if (y < 1) throw new Error('Incorrect Y size setting');
  
  _data.settings.gridSize.x = x;
  _data.settings.gridSize.y = y;
}

let _observer = () => {}
export function addSubscriber(subscriber) {
  _observer = subscriber;
}

let _googleIntervalID;
function _runGoogleJump() {
  _googleIntervalID = setInterval(() => {
    _changeGooglePosition();
    _data.miss++;

    if (_data.miss === _data.settings.losePoints) {
      _stopGoogleJump();
      _data.gameState = GAME_STATES.LOSE;
    }

    _observer();
  }, _data.settings.stepTimeSec * 1000);
}

function _stopGoogleJump() {
  clearInterval(_googleIntervalID);
}

function _clearGameResults() {
  _data.catch = 0;
  _data.miss = 0;
}

export function start() {
  _clearGameResults();

  _data.gameState = GAME_STATES.IN_PROGRESS;
  _runGoogleJump();

  _observer();
}

export function playAgain() {
  _clearGameResults();

  _data.gameState = GAME_STATES.SETTINGS;
  _observer();
}

export function catchGoogle() {
  _stopGoogleJump();
  _data.catch++;

  if (_data.catch === _data.settings.winPoints) {
    _data.gameState = GAME_STATES.WIN;
    _observer();
    return;
  }

  _changeGooglePosition();
  _runGoogleJump();
  _observer();
}

function _changeGooglePosition() {
  // todo: add deference positions

  _data.heroes.google.x = _getRandomInt(_data.settings.gridSize.x);
  _data.heroes.google.y = _getRandomInt(_data.settings.gridSize.y);
}

// getter/selector/query/adapter
export function getCatchCount() {
  return _data.catch;
}

export function getMissCount() {
  return _data.miss;
}

export function getGooglePositions() {
  return {
    ..._data.heroes.google,
  };
}

export function getGridSize() {
  return {
    ..._data.settings.gridSize,
  };
}

export function getGameState() {
  return _data.gameState;
}

// utils
function _getRandomInt(max) {
  return Math.floor(Math.random() * (max));
}


