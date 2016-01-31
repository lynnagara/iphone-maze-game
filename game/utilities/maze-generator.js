'use strict';

// Take the required height and widgth of the maze
// Return a 2d matrix of the border properties of every position on the grid
// maze[0][0] = {top: true, bottom: true, left: true, right: false}
//
// The maze is just a 2d array of tiles, which contain surrounding wall info
//
// [
//   [{..}, {..}],
//   [{..}, {..}],
// ]
//
// The tile should look like:
// {x: 0, y: 1, top: true, bottom: true, left: true, right: false, visited: true}
// where true indicates the presence of a border in that direction
// and false means no border in that direction

var MAZE = {};

function generateMaze(width, height) {

  var tileCount = width * height;

  // First, create the MAZE array with a placeholder object inside
  MAZE.tiles = [];

  for (var i = 0; i < width; i++) {
    var row = [];
    MAZE.tiles.push(row);
    for (var j = 0; j < height; j++) {
      row.push(getEmptyTileObj(i, j));
    }
  }

  // Start at any random position
  var prevTile;
  var currentTile = [getRandomInt(width), getRandomInt(height)];
  MAZE.initial = currentTile;
  var visitedTiles = 1;
  var currentPath = [currentTile];
  markVisited(currentTile);
  // temporary
  MAZE.tiles[currentTile[0]][currentTile[1]].order = 0;

  // Loop until all tiles are visited
  while (visitedTiles < tileCount) {
    var nextTile = getNextTile(currentTile);
    if (nextTile) {
      // It's a valid tile - update the maze and path info
      prevTile = currentTile;
      currentTile = nextTile;
      updateMazeWalls(currentTile, prevTile);
      markVisited(currentTile);

      currentPath.push(currentTile);
      visitedTiles++;
    } else {
      // go back and try the previous step in the path
      currentTile = currentPath.pop();
    }
  }

  return MAZE;

}

// Updates maze walls
function updateMazeWalls (currentTile, prevTile) {
  var direction = `${currentTile[0]-prevTile[0]},${currentTile[1]-prevTile[1]}`;
  var prevTileObj = MAZE.tiles[prevTile[0]][prevTile[1]];
  var currentTileObj = MAZE.tiles[currentTile[0]][currentTile[1]];

  // temporary
  currentTileObj.order = prevTileObj.order + 1;


  switch(direction) {
    case '-1,0':
      // Up
      prevTileObj.top = false;
      currentTileObj.bottom = false;
      break;
    case '1,0':
      // Down
      prevTileObj.bottom = false;
      currentTileObj.top = false;
      break;
    case '0,-1':
      // Left
      prevTileObj.left = false;
      currentTileObj.right = false;
      break;
    case '0,1':
      // Right
      prevTileObj.right = false;
      currentTileObj.left = false;
      break;
    default:
  }
}

function markVisited([x,y]) {
  MAZE.tiles[x][y].visited = true;
}

function getEmptyTileObj(x, y) {
  return {
    x: x,
    y: y,
    top: true,
    bottom: true,
    left: true,
    right: true,
    visited: false
  }
}

// This function takes the current tile [x, y] and the maze object and
// Finds the next adjacent tile
// It returns a tile [x, y] or undefined if there are none
function getNextTile(currentTile) {
  var isValidTile = function([x, y]) {
    if (MAZE.tiles[x] && MAZE.tiles[x][y] && MAZE.tiles[x][y].visited === false) {
      return true;
    }
    return false;
  }

  // There are a max of 4 possibilities
  var validTiles = [
    [currentTile[0] - 1, currentTile[1]],
    [currentTile[0] + 1, currentTile[1]],
    [currentTile[0], currentTile[1] - 1],
    [currentTile[0], currentTile[1] + 1]
  ]
  .reduce(function(valid, current) {
    if (isValidTile(current)) {
      valid.push(current);
    }
    return valid;
  }, []);

  if (validTiles.length) {
    return validTiles[getRandomInt(validTiles.length)];
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


module.exports = {
  generateMaze: generateMaze
};


