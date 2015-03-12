/**
 * Bugs found:
 * Test 2 & 3 in this file failed. 
 * Seems some cases is not dealt with when there is no need to fortify after attack.
 */

'use strict';

describe("In Risk", function() {
    var _gameLogic;
    var board;
    var boardAfter;
    var boardBefore;
    var i;

    beforeEach(module("myApp"));

    beforeEach(inject(function (gameLogic) {
        _gameLogic = gameLogic;
        board = _gameLogic.getInitialBoard(2);
    }));

    function expectMoveOk(moveType, turnIndexBeforeMove, stateBeforeMove, move, targetCountry, dice, moveUnits) {
        expect(_gameLogic.isMoveOk({moveType: moveType, turnIndexBeforeMove: turnIndexBeforeMove,
            stateBeforeMove: stateBeforeMove,
            move: move, targetCountry: targetCountry, moveUnits: moveUnits, dice: dice})).toBe(true);
    }

    function expectIllegalMove(moveType, turnIndexBeforeMove, stateBeforeMove, move, targetCountry, dice, moveUnits) {
        expect(_gameLogic.isMoveOk({moveType: moveType, turnIndexBeforeMove: turnIndexBeforeMove,
            stateBeforeMove: stateBeforeMove,
            move: move, targetCountry: targetCountry, moveUnits: moveUnits, dice: dice})).toBe(false);
    }

    it("1. player 1 attack Afghanistan(player 2, 1 units) using China(player 1, 3 units)\
     and succeed (attack phase(3)) is legal", function(){

      boardBefore = board;

      //add 1 unit on each territory on the board
      _gameLogic.addOneUnitOnEachCountry(boardBefore);

      boardBefore.territory.China.units = 3;
      boardBefore.territory.Irkutsk.units = 8;

      boardBefore.players.player1.remainUnits = 0;
      boardBefore.players.player2.remainUnits = 9;
      boardBefore.phase = 3;
      boardBefore.players.player1.totalTerritories = 21;
      boardBefore.players.player2.totalTerritories = 21;

      boardAfter = angular.copy(boardBefore);

      boardAfter.territory.Afghanistan.owner = 1;
      boardAfter.territory.Afghanistan.units = 2;
      boardAfter.territory.China.units = 1;

      boardAfter.players.player1.totalTerritories = 22;
      boardAfter.players.player2.totalTerritories = 20;


      expectMoveOk(null, 1,
        {"board" : boardBefore,
        },
      [{"setTurn": {"turnIndex" : 1}},
       {"set": {"key":"board", "value" : boardAfter}},
       {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":0, "d3":2, "d4":0});
    });


    it("2. player 1 attack Afghanistan(player 2, 2 units) using China(player 1, 5 units)\
     and succeed (attack phase(3)) is legal", function(){

      boardBefore = board;

      //add 1 unit on each territory on the board
      _gameLogic.addOneUnitOnEachCountry(boardBefore);

      boardBefore.territory.China.units = 5;
      boardBefore.territory.Irkutsk.units = 6;
      boardBefore.territory.Afghanistan.units = 2;

      boardBefore.players.player1.remainUnits = 0;
      boardBefore.players.player2.remainUnits = 8;
      boardBefore.phase = 3;
      boardBefore.players.player1.totalTerritories = 21;
      boardBefore.players.player2.totalTerritories = 21;

      boardAfter = angular.copy(boardBefore);

      boardAfter.territory.Afghanistan.units = 1;
      boardAfter.territory.China.units = 4;

      expectMoveOk(null, 1,
        {"board" : boardBefore,
        },
      [{"setTurn": {"turnIndex" : 1}},
       {"set": {"key":"board", "value" : boardAfter}},
       {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":5, "d3":6, "d4":1});
    });

    it("3. player 1 attack Afghanistan(player 2, 2 units) using China(player 1, 3 units)\
     and fail (attack phase(3)) is legal", function(){

      boardBefore = board;

      //add 1 unit on each territory on the board
      _gameLogic.addOneUnitOnEachCountry(boardBefore);

      boardBefore.territory.China.units = 3;
      boardBefore.territory.Irkutsk.units = 8;
      boardBefore.territory.Afghanistan.units = 2;

      boardBefore.players.player1.remainUnits = 0;
      boardBefore.players.player2.remainUnits = 8;
      boardBefore.phase = 3;
      boardBefore.players.player1.totalTerritories = 21;
      boardBefore.players.player2.totalTerritories = 21;

      boardAfter = angular.copy(boardBefore);

      boardAfter.territory.China.units = 2;
      boardAfter.territory.Afghanistan.units = 1;

      expectMoveOk(null, 1,
        {"board" : boardBefore,
        },
      [{"setTurn": {"turnIndex" : 1}},
       {"set": {"key":"board", "value" : boardAfter}},
       {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":0, "d3":2, "d4":5});
    });

});
