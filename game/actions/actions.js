'use strict';

var GameDispatcher = require('../dispatchers/game-dispatcher.js');

var Actions = {
  startGame: function() {
    GameDispatcher.dispatch({
      actionType: 'start-game',
      user: 'Lyn'
    });
  }
};

module.exports = Actions;
