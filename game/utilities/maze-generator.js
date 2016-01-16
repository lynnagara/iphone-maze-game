'use strict';

function generateMaze(width, height) {
  var cellCount = width * height;
  var start = [getRandomInt(width), getRandomInt(height)];

  var maze = [];


  for (var i = 0; i < width; i++) {
    var row = [];
    maze.push(row);
    for (var j = 0; j < height; j++) {
      row.push(getTile());
    }
  }
  console.log(maze)
}

function getTile(top = true, bottom = true, left = true, right = true) {
  return {
    top: top,
    bottom: bottom,
    left: left,
    right: right
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


module.exports = {
  generateMaze: generateMaze
};


