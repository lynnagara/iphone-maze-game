'use strict';

var GameDispatcher = require('../dispatchers/game-dispatcher');
var MazeGenerator = require ('../utilities/maze-generator');
var EventEmitter = require('EventEmitter');
var Constants = require('../constants/constants')

var change = 'CHANGE';

function Store() {
  this.currentView = Constants.views.home;
  this.emitter = new EventEmitter();
};

Store.prototype.initialize = function() {

  var _this = this;

  GameDispatcher.register(function(action) {
    switch (action.actionType) {
      case 'start-game':
        _this.currentView = Constants.views.maze;
        _this.generateMaze(3,3);
        _this.emitter.emit(change);
        break;
      default:
        // nothing
    }
  });
}

Store.prototype.getCurrentView = function() {
  return this.currentView;
}

Store.prototype.addChangeListener = function(callback) {
  this.emitter.addListener(change, callback);  
}

// Take the required height and widgth of the maze
// Return a 2d matrix of the border properties of every position on the grid
// maze[0][0] = {top: true, bottom: true, left: true, right: false}
//
// [
//   [{..}, {..}],
//   [{..}, {..}],
// ]
//
// Start in a random position

Store.prototype.generateMaze = function(width, height) {
  MazeGenerator.generateMaze(width, height);
}



var store = new Store();

module.exports = store;
