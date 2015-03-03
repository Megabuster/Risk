/**
 * Created by Wenzhao on 3/2/15.
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


    it("player 1 placing two units on China from initial state (deploy phase(1)) is illegal", function(){
        boardBefore = board;
        boardAfter = angular.copy(boardBefore);
        boardAfter.territory.China.owner = 1;
        boardAfter.territory.China.units = 2;
        boardAfter.players.player1.remainUnits = 28;

        expectIllegalMove(null, 1,
            {"board" : boardBefore
                //"delta" : null
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}]);
    });


    it("player 1 adding two units on China again after the board is full is(deploy phase(1)) illegal", function(){
    //If adding two units at this time is legal, please ignore this test. I am not sure of the exact rule here.
        var boardBefore = board;
        _gameLogic.addOneUnitOnEachCountry(boardBefore);

        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.China.owner = 1;
        boardAfter.territory.China.units = 3;
        boardAfter.players.player1.remainUnits = 7;

        expectIllegalMove(null, 1,
            {"board" : boardBefore,
                "delta" : "Eastern_Australia"
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}]);
    });

    it("player 2 attack India(belongs to player 1) from China(belongs to player 1) (attack phase(3)) is illegal", function(){

        boardBefore = board;

        //add 1 unit on each territory on the board
        _gameLogic.addOneUnitOnEachCountry(boardBefore);

        boardBefore.territory.China.units = 9;
        boardBefore.territory.Iceland.units = 9;
        boardBefore.territory.Irkutsk.units = 8;

        boardBefore.players.player1.remainUnits = 0;
        boardBefore.players.player2.remainUnits = 7;
        boardBefore.phase = 3;

        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.India.units = 3;

        expectIllegalMove(null, 2,
            {"board" : boardBefore
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}], "India", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
    });


    it("player 1 fortify India(belongs to player 1, has 1 units) from China(belongs to player 1, has 9 units) \
    with 8 units (fortify phase(4)) is legal", function(){
        boardBefore = board;

        //add 1 unit on each territory on the board
        _gameLogic.addOneUnitOnEachCountry(boardBefore);

        boardBefore.territory.China.units = 9;
        boardBefore.territory.Iceland.units = 9;
        boardBefore.territory.Irkutsk.units = 8;

        boardBefore.players.player1.remainUnits = 0;
        boardBefore.players.player2.remainUnits = 7;

        boardBefore.phase = 4;

        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.China.units = 1;
        boardAfter.territory.India.units = 9;

        expectMoveOk(null, 1,
            {"board" : boardBefore
            },
            [{"setTurn": {"turnIndex" : 1}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}], "India", null, 3);
    });



    it("player 2 fortify India(belongs to player 1, has 1 units) from China(belongs to player 1, has 9 units) \
    with 5 units (fortify phase(4)) is legal", function(){
        boardBefore = board;

        //add 1 unit on each territory on the board
        _gameLogic.addOneUnitOnEachCountry(boardBefore);

        boardBefore.territory.China.units = 9;
        boardBefore.territory.Iceland.units = 9;
        boardBefore.territory.Irkutsk.units = 8;

        boardBefore.players.player1.remainUnits = 0;
        boardBefore.players.player2.remainUnits = 7;

        boardBefore.phase = 4;

        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.China.units = 4;
        boardAfter.territory.India.units = 6;

        expectMoveOk(null, 2,
            {"board" : boardBefore
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}], "India", null, 3);
    });
});
