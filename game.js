'use strict';

angular.module('myApp')
  .controller('Ctrl', function (
      $window, $scope, $log, $timeout,
      gameService, gameLogic, resizeGameAreaService) {

    resizeGameAreaService.setWidthToHeight(1.36);

    function sendComputerMove() {
      gameService.makeMove(
          aiService.createComputerMove($scope.board, $scope.turnIndex,
              // 0.3 seconds for the AI to choose a move
              {millisecondsLimit: 300 }));
    }

    function updateUI(params) {
      $scope.board = params.stateAfterMove.board;
      $scope.delta = params.stateAfterMove.delta;
      if ($scope.board === undefined) {
        $scope.board = gameLogic.getInitialBoard(2);
      }
      $scope.isYourTurn = params.turnIndexAfterMove >= 0 && // game is ongoing
        params.yourPlayerIndex === params.turnIndexAfterMove; // it's my turn
      $scope.turnIndex = params.turnIndexAfterMove;

    }

    // Before getting any updateUI, we show an empty board to a viewer (so you can't perform moves).
    updateUI({stateAfterMove: {}, turnIndexAfterMove: 0, yourPlayerIndex: -2});

    $scope.countryClicked = function (country) {
      if (!$scope.isYourTurn) {
        return;
      }
      try {
        var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, country, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      } catch (e) {
        alert('lala');
        $log.info(["country is already full in position:", country]);
        return;
      }
    };
    $scope.shouldShowNumber = function (country) {
      return $scope.board.territory[country].units !== 0;
    };

    $scope.getNumber = function (country) {
      return $scope.board.territory[country].units;
    };
    
    gameService.setGame({
      gameDeveloperEmail: "zl953@nyu.edu",
      minNumberOfPlayers: 2,
      maxNumberOfPlayers: 6,
      isMoveOk: gameLogic.isMoveOk,
      updateUI: updateUI
    });
  });
