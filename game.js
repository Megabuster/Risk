'use strict';

angular.module('myApp')
.controller('Ctrl', function (
  $window, $scope, $log, $timeout,
  gameService, gameLogic, resizeGameAreaService) {

  resizeGameAreaService.setWidthToHeight(1.36);

  var moveUnits;
  function sendComputerMove() {
    var items = gameLogic.getPossibleMoves($scope.board, $scope.turnIndex);
    gameService.makeMove(items[Math.floor(Math.random()*items.length)]);
  }

  function updateUI(params) {
    $scope.board = params.stateAfterMove.board;
    $scope.delta = params.stateAfterMove.delta;
    $scope.dice = {};

    if(params.stateAfterMove.d0 !== undefined){
      $scope.dice.d0 = params.stateAfterMove.d0;
    }else {
      $scope.dice.d0 = null;
    }
    if(params.stateAfterMove.d1 !== undefined){
      $scope.dice.d1 = params.stateAfterMove.d1;
    }else {
      $scope.dice.d1 = null;
    }
    if(params.stateAfterMove.d2 !== undefined){
      $scope.dice.d2 = params.stateAfterMove.d2;
    }else {
      $scope.dice.d2 = null;
    }
    if(params.stateAfterMove.d3 !== undefined){
      $scope.dice.d3 = params.stateAfterMove.d3;
    }else {
      $scope.dice.d3 = null;
    }
    if(params.stateAfterMove.d4 !== undefined){
      $scope.dice.d4 = params.stateAfterMove.d4;
    }else {
      $scope.dice.d4 = null;
    }

    if ($scope.board === undefined) {
      $scope.board = gameLogic.getInitialBoard(2);
    }
    $scope.isYourTurn = params.turnIndexAfterMove >= 0 && // game is ongoing
    params.yourPlayerIndex === params.turnIndexAfterMove; // it's my turn
    $scope.turnIndex = params.turnIndexAfterMove;

    // Is it the computer's turn?
    if($scope.isYourTurn && params.playersInfo[params.yourPlayerIndex].playerId === ''){
      $scope.isYourTurn = false;
      $timeout(sendComputerMove, 500);
    }
  }


  $scope.countryClicked = function (country) {
    if (!$scope.isYourTurn) {
      return;
    }
    try {
      if ($scope.board.phase === 1 || $scope.board.phase === 2){
        var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, country, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      }
      else if ($scope.board.phase === 3){
        if ($scope.board.selected === ""){
          $scope.board.selected = country;
        }else{
          var move = gameLogic.createRollMove($scope.dice, $scope.turnIndex);
          gameService.makeMove(move);
          var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, $scope.board.selected, country, $scope.dice, null);
          $scope.isYourTurn = false; // to prevent making another move
          gameService.makeMove(move);
          $scope.board.selected = "";
        }
      }
      else{
        if ($scope.board.selected === ""){
          $scope.board.selected = country;
        }else{
          $scope.moveUnits = parseInt(prompt('Enter how many units you want to move','3'));
          var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, $scope.board.selected, country, null, $scope.moveUnits);
          $scope.isYourTurn = false; // to prevent making another move
          gameService.makeMove(move);            
          $scope.board.selected = "";
        }
      }

    } catch (e) {
      $scope.board.selected = "";
      $log.info(["country is already full in position:", country]);
      return;
    }
  };

  $scope.endTurnClicked = function() {
    if (!$scope.isYourTurn)
      return;
    try {
      var move = gameLogic.createMove('endTurn', $scope.board, $scope.turnIndex, null, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      } catch (e) {
        $log.info(["You can not end turn because you still have remain units"]);
        return;
      }
    };

    $scope.shouldShowUnits = function(){
      //return true;
      return ($scope.board.phase === 4 && $scope.board.selected !== "" && $scope.board.territory[$scope.board.selected].owner === $scope.turnIndex)
    }

    $scope.shouldShowNumber = function (country) {
      var unit = $scope.board.territory[country].units;
      return unit !== 0;
    };
    $scope.getCountry = function(){
      return $scope.board.selected;
    }
    $scope.getTurn = function () {
      return $scope.turnIndex;
    };
    $scope.getNumber = function (country) {
      return $scope.board.territory[country].units;
    };
    $scope.getUnit = function (player) {
      return $scope.board.players[player].remainUnits;
    };

    $scope.getPhase = function () {
      if ($scope.board.phase === 1)
        return 'deploy';
      else if ($scope.board.phase === 2)
        return 'reinforce';
      else if ($scope.board.phase === 3)
        return 'attack';
      else
        return 'fortify';
    };
    $scope.getDices = function(){
      return $scope.dice;
    }

    $scope.getImageSrc = function(country) {
      return $scope.board.territory[country].owner === 0 ? "red.png" : "green.png";
    };

    
    gameService.setGame({
      gameDeveloperEmail: "zl953@nyu.edu",
      minNumberOfPlayers: 2,
      maxNumberOfPlayers: 6,
      isMoveOk: gameLogic.isMoveOk,
      updateUI: updateUI
    });
  });
