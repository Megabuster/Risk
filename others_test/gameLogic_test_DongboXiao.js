/*
  Created by Dongbo on 3/1/15
*/

/*
Bugs:
1. Dice seems like not working yet. Need to test dice as well.
2. addOneUnitOnEachCountry() function seems like not random,
    for example,
    it seems Irkutsk always belongs to player one for every call,
    isn't it has a chance to belongs to player two as well?
 */
'use strict'

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
  it("initial state (deploy phase(1)) without passing set turn is not legal", function(){
        boardBefore = board;
        boardAfter = angular.copy(boardBefore);
        boardAfter.territory.Iceland.owner = 1;
        boardAfter.territory.Iceland.units = 1;
        boardAfter.players.player1.remainUnits = 29;

        expectIllegalMove(null, 1,
            {"board" : boardBefore
                //"delta" : null
            });
    });

  it("initial state (deploy phase(1)) without passing board is legal", function(){
        boardBefore = board;
        boardAfter = angular.copy(boardBefore);
        boardAfter.territory.Iceland.owner = 1;
        boardAfter.territory.Iceland.units = 1;
        boardAfter.players.player1.remainUnits = 29;

        expectMoveOk(null, 1,
            {},
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "Iceland"}}]);

    });

  it("player 1 placing one unit on Iceland from initial state (deploy phase(1)) is legal", function(){
        boardBefore = board;
        boardAfter = angular.copy(boardBefore);
        boardAfter.territory.Iceland.owner = 1;
        boardAfter.territory.Iceland.units = 1;
        boardAfter.players.player1.remainUnits = 29;

        expectMoveOk(null, 1,
            {"board" : boardBefore
                //"delta" : null
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "Iceland"}}]);
    });

  it("player 2 placing one unit on China from initial state (deploy phase(1)) is not legal", function(){
        boardBefore = board;
        boardAfter = angular.copy(boardBefore);
        boardAfter.territory.China.owner = 1;
        boardAfter.territory.China.units = 1;
        boardAfter.players.player2.remainUnits = 29;

        expectIllegalMove(null, 2,
            {"board" : boardBefore
                //"delta" : null
            },
            [{"setTurn": {"turnIndex" : 1}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}]);
    });

  it("player 2 placing one unit on Iceland after player 1 placing units on China (deploy phase(1)) is legal", function(){
    boardBefore = board;

    boardBefore.territory.China.owner = 1;
    boardBefore.territory.China.units = 1;
    boardBefore.players.player1.remainUnits = 29;

    boardAfter = angular.copy(boardBefore);
    
    boardAfter.territory.Iceland.owner = 2;
    boardAfter.territory.Iceland.units = 1;
    boardAfter.players.player2.remainUnits = 29;

    expectMoveOk(null, 2, 
      {"board" : boardBefore,
       "delta" : "China"
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Iceland"}}]);
    });    

  it("player 2 placing one unit on China after player 1 placing units on China (deploy phase(1)) is not legal", function(){
    boardBefore = board;

    boardBefore.territory.China.owner = 1;
    boardBefore.territory.China.units = 1;
    boardBefore.players.player1.remainUnits = 29;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 2;
    boardAfter.territory.China.units = 1;
    boardAfter.players.player2.remainUnits = 29;

    expectIllegalMove(null, 2, 
      {"board" : boardBefore,
       "delta" : "China"
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });

  it("player 1 adding one unit on China again after the board is full is(deploy phase(1)) legal", function(){
    
    var boardBefore = board; 
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 2;
    boardAfter.players.player1.remainUnits = 8;

    expectMoveOk(null, 1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });

  it("player 1 adding one unit on to player2's country after the board is full is(deploy phase(1)) illegal", function(){
    
    var boardBefore = board; 
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Russia.units = 2;
    boardAfter.players.player1.remainUnits = 8;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Russia"}}]);
    });

  it("player1's last move in phase 1 with add units is legal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardBefore.territory.China.units = 8;
    boardBefore.territory.Iceland.units = 8;
    boardBefore.players.player1.remainUnits = 1;
    boardBefore.players.player2.remainUnits = 1;
    boardBefore.phase = 1;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.units = 9;
      
    boardAfter.players.player1.remainUnits = 7;

    expectMoveOk(null, 1, 
      {"board" : boardBefore
       //"delta" : "Iceland"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });

  it("player1's last move in phase 1 without giving units is not legal", function(){

        boardBefore = board;
        //add 1 unit on each territory on the board
        _gameLogic.addOneUnitOnEachCountry(boardBefore);

        boardBefore.territory.China.units = 8;
        boardBefore.territory.Iceland.units = 8;
        boardBefore.players.player1.remainUnits = 1;
        boardBefore.players.player2.remainUnits = 1;
        boardBefore.phase = 1;

        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.China.units = 9;

        boardAfter.players.player1.remainUnits = 0;

        expectIllegalMove(null, 1,
            {"board" : boardBefore
                //"delta" : "Iceland"
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}]);
    });

  it("player1's last move in phase 1 with add 100 units is legal", function(){

        boardBefore = board;
        //add 1 unit on each territory on the board
        _gameLogic.addOneUnitOnEachCountry(boardBefore);

        boardBefore.territory.China.units = 8;
        boardBefore.territory.Iceland.units = 8;
        boardBefore.players.player1.remainUnits = 1;
        boardBefore.players.player2.remainUnits = 1;
        boardBefore.phase = 1;

        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.China.units = 9;

        boardAfter.players.player1.remainUnits = 100;

        expectIllegalMove(null, 1,
            {"board" : boardBefore
                //"delta" : "Iceland"
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "China"}}]);
  });

  it("player 1 adding one unit on Irkutsk(which belongs to player 1) (reinforce phase(2)) is legal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    boardBefore = board;

    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.players.player1.remainUnits = 7;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;


    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Irkutsk.units = 2;
    boardAfter.players.player1.remainUnits = 6;

    expectMoveOk(null, 1, 
      {"board" : boardBefore
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });

    it("player 2 adding one unit on Irkutsk(which belongs to player 1) (reinforce phase(2)) is not legal", function(){

        boardBefore = board;
        //add 1 unit on each territory on the board
        _gameLogic.addOneUnitOnEachCountry(boardBefore);
        boardBefore = board;

        boardBefore.territory.China.units = 9;
        boardBefore.territory.Iceland.units = 9;
        boardBefore.players.player1.remainUnits = 7;
        boardBefore.players.player2.remainUnits = 7;
        boardBefore.phase = 2;


        boardAfter = angular.copy(boardBefore);

        boardAfter.territory.Irkutsk.units = 2;
        boardAfter.players.player1.remainUnits = 6;

        expectIllegalMove(null, 2,
            {"board" : boardBefore
            },
            [{"setTurn": {"turnIndex" : 2}},
                {"set": {"key":"board", "value" : boardAfter}},
                {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });

  it("player 1 do nothing in phase 2 is illegal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.players.player1.remainUnits = 7;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;

    boardAfter = angular.copy(boardBefore);

    expectIllegalMove(null, 1, 
      {"board" : boardBefore
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });

  it("player 1 attack Afghanistan(belongs to player 2, has 1 units) using China(belongs to player 1, has 9 units)\
   (attack phase(3)) before he uses up all his remainUnits is illegal", function(){
    
    boardBefore = board;

    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 8;

    boardBefore.players.player1.remainUnits = 1;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 3;
    boardBefore.players.player1.totalTerritories = 21;
    boardBefore.players.player2.totalTerritories = 21;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Afghanistan.owner = 1;
    boardAfter.territory.Afghanistan.units = 3;
    boardAfter.territory.China.units = 6;

    boardAfter.players.player1.totalTerritories = 22;
    boardAfter.players.player2.totalTerritories = 20;


    expectIllegalMove(null, 1, 
      {"board" : boardBefore
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":6, "d3":2, "d4":1});
    });
  
  it("player 1 attack Mongolia(belongs to player 2, has 1 units) \
    from Japan(belongs to player 1, has 1 units) (attack phase(3)) is illegal", function(){
    
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

    boardAfter.territory.Mongolia.owner = 1;
    boardAfter.territory.Mongolia.units = 1;
    boardAfter.territory.Japan.units = 0;


    expectIllegalMove(null, 1, 
      {"board" : boardBefore
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Japan"}}], "Mongolia", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
    });

  it("player1 change phase from attack(3) to fortify(4) is legal", function(){
    
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
    boardAfter.phase = 4;

    expectMoveOk("endTurn", 1, 
      {"board" : boardBefore
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Iceland"}}], "Great_Britain", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
    });

  it("player1 change phase from fortify(4) to reinforce(2) for player2 is legal", function(){

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
    
    boardAfter.phase = 2;
    boardAfter.players.player1.remainUnits = 7;


    expectMoveOk("endTurn", 1, 
      {"board" : boardBefore
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 10);
    });

});