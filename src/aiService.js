angular.module('myApp')
.factory('aiService', function(gameLogic) {
  'use strict';

  function createComputerMove(board, playerIndex) {

    var items = gameLogic.getPossibleMoves(board, playerIndex);
    return(items[Math.floor(Math.random()*items.length)]);
  }

  return {createComputerMove: createComputerMove};
});
