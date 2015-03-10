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
        else{
          if ($scope.board.selected === ""){
            $scope.board.selected = country;
          }else{
            var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, $scope.board.selected, country, {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5}, null);
            $scope.isYourTurn = false; // to prevent making another move
            gameService.makeMove(move);
            $scope.board.selected = "";

          }
        }

      } catch (e) {
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


    $scope.shouldShowNumber = function (country) {
      var unit = $scope.board.territory[country].units;
      return unit !== 0;
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
