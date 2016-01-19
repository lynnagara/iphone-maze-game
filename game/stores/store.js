'use strict';

var GameDispatcher = require('../dispatchers/game-dispatcher');
var MazeGenerator = require ('../utilities/maze-generator');
var EventEmitter = require('EventEmitter');
var Constants = require('../constants/constants')

var change = 'CHANGE';

var _currentView = Constants.views.home;
var _emitter = new EventEmitter();
var _maze;

function startGame() {
  GameDispatcher.register(function(action) {
    switch (action.actionType) {
      case 'start-game':
        _currentView = Constants.views.maze;
        generateMaze(3,3);
        _emitter.emit(change);
        break;
      default:
        // nothing
    }
  });
}

function generateMaze(width, height) {
  _maze = MazeGenerator.generateMaze(width, height);
}

function getMaze() {
  return _maze;
}

function getCurrentView() {
  return _currentView;
}

function addChangeListener(callback) {
  _emitter.addListener(change, callback);
}

module.exports = {
  getCurrentView: getCurrentView,
  getMaze: getMaze,
  addChangeListener: addChangeListener,
  startGame: startGame
};
