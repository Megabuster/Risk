/*
  Created by Zhuoran on 2/24/14
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
  
  
  it("player 1 placing one unit on China from initial state (deploy phase(1)) is legal", function(){
    boardBefore = board;
    boardAfter = angular.copy(boardBefore);
    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 1;
    boardAfter.players.player1.remainUnits = 29;

    expectMoveOk(null, 1, 
      {"board" : boardBefore,
       //"delta" : null
      },
    [{"setTurn": {"turnIndex" : 2}},
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

  
  it("player 2 placing one unit on China after player 1 placing units on China (deploy phase(1)) is illegal", function(){
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


  
  it("player 1 placing one unit on China again after player 1 placing units on China (deploy phase(1)) before the board is full is illegal", function(){
    boardBefore = board;

    boardBefore.territory.China.owner = 1;
    boardBefore.territory.China.units = 1;
    boardBefore.territory.Iceland.owner = 2;
    boardBefore.territory.Iceland.units = 1;
    boardBefore.players.player1.remainUnits = 29;
    boardBefore.players.player2.remainUnits = 29;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 2;
    boardAfter.players.player1.remainUnits = 28;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
       "delta" : "Iceland"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });

  
  it("player 1 placing one unit on Russia after player 1 placing units on China (deploy phase(1)), \
    player 2 placing units on Iceland before the board is full is legal", function(){
    boardBefore = board;

    boardBefore.territory.China.owner = 1;
    boardBefore.territory.China.units = 1;
    boardBefore.territory.Iceland.owner = 2;
    boardBefore.territory.Iceland.units = 1;
    boardBefore.players.player1.remainUnits = 29;
    boardBefore.players.player2.remainUnits = 29;
    
    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Russia.owner = 1;
    boardAfter.territory.Russia.units = 1;
    boardAfter.players.player1.remainUnits = 28;

    expectMoveOk(null, 1, 
      {"board" : boardBefore,
       "delta" : "Iceland"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Russia"}}]);
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

  it("player 1 adding one unit on Russia(belongs to player2) after the board is full is(deploy phase(1)) illegal", function(){
    
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



  it("player1's last move in phase 1", function(){
    
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
      {"board" : boardBefore,
       //"delta" : "Iceland"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });


  it("changing from phase 1 to phase 2 \
     i.e. player 2 adding the last unit on Iceland(which belongs to player 2) after player1 has no remain units in phase 1\
     is legal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 8;
    boardBefore.players.player1.remainUnits = 7;
    boardBefore.players.player2.remainUnits = 1;
    boardBefore.phase = 1;

    boardAfter = angular.copy(boardBefore);
    boardAfter.phase = 2;    

    boardAfter.territory.Iceland.units = 9;
      
    boardAfter.players.player2.remainUnits = 7;
    

    expectMoveOk(null, 2, 
      {"board" : boardBefore,
       //"delta" : "Iceland"
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Iceland"}}]);
    });
   
   

  it("player 1 adding one unit on Middle_East(which belongs to player 2) (reinforce phase(2)) is illegal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.players.player1.remainUnits = 7;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Middle_East.owner = 1;
    boardAfter.territory.Middle_East.units = 2;
    boardAfter.players.player1.remainUnits = 6;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Middle_East"}}]);
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });

  

  it("player 1 adding two unit on Irkutsk(which belongs to player 1) (reinforce phase(2)) is illegal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.players.player1.remainUnits = 7;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;


    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Irkutsk.units = 3;
    boardAfter.players.player1.remainUnits = 5;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });

  it("change phase from 2 to 3, i.e: player 1 adding the last remain unit on Irkutsk(which belongs to player 1)\
      to change phase from 2 to phase 3 is legal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 7;

    boardBefore.players.player1.remainUnits = 1;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;


    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Irkutsk.units = 8;
    boardAfter.players.player1.remainUnits = 0;
    boardAfter.phase = 3;

    expectMoveOk(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });
  

  it("change phase from 2 to 3, i.e: player 1 wants to change phase from 2 to phase 3 before he use up all his units\
     is illegal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 6;

    boardBefore.players.player1.remainUnits = 2;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;


    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Irkutsk.units = 7;
    boardAfter.players.player1.remainUnits = 1;
    boardAfter.phase = 3;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });
  
   it("player 1 wants to end turn in phase 2 is illegal", function(){
    
    boardBefore = board;
    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.players.player1.remainUnits = 7;
    boardBefore.players.player2.remainUnits = 7;
    boardBefore.phase = 2;


    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Irkutsk.units = 2;
    boardAfter.players.player1.remainUnits = 6;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Irkutsk"}}]);
    });


  it("player 1 attack Middle_East(belongs to player 2) from China(belongs to player 1) (attack phase(3)) is illegal\
    (because they are not adjacent) ", function(){
    
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

    boardAfter.territory.Middle_East.owner = 1;
    boardAfter.territory.Middle_East.units = 3;
    
    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Middle_East", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
    });


  it("player 1 attack India(belongs to player 1) from China(belongs to player 1) (attack phase(3)) is illegal\
    (you cannot attack your own territory) ", function(){
    
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
    
    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":6, "d3":2, "d4":1});
    });



  it("player 1 attack Afghanistan(belongs to player 2, has 1 units) using China(belongs to player 1, has 9 units)\
   (attack phase(3)) is legal", function(){
    
    boardBefore = board;

    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 8;

    boardBefore.players.player1.remainUnits = 0;
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


    expectMoveOk(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":6, "d3":2, "d4":1});
    });

 it("player 1 attack Afghanistan(belongs to player 2, has 2 units) using China(belongs to player 1, has 9 units)\
   (attack phase(3)) with less than 5 dices is illegal", function(){
    
    boardBefore = board;

    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);
    
    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 8;
    boardBefore.territory.Afghanistan.units = 2;

    boardBefore.players.player1.remainUnits = 0;
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Afghanistan", {"d0":3, "d1":4, "d2":6, "d3":2});
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Japan"}}], "Mongolia", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
    });


it("player 1 attack Great_Britain(belongs to player 1, has 1 units) from Iceland(belongs to player 2, has 9 units)\
   (attack phase(3)) is illegal", function(){
    
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

    boardAfter.territory.Great_Britain.owner = 2;
    boardAfter.territory.Great_Britain.units = 3;
    boardAfter.territory.Iceland.units = 6;


    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Iceland"}}], "Great_Britain", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Iceland"}}], "Great_Britain", {"d0":3, "d1":4, "d2":6, "d3":5, "d4":5});
    });


  it("player 1 fortify India(belongs to player 1, has 1 units) from China(belongs to player 1, has 9 units) \
    with 3 units (fortify phase(4)) is legal", function(){
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

    boardAfter.territory.China.units = 6;
    boardAfter.territory.India.units = 4;

    expectMoveOk(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 3);
    });


  it("player 1 fortify India(belongs to player 1, has 1 units) from China(belongs to player 1, has 1 units) \
    with 1 units (fortify phase(4)) is illegal", function(){
     boardBefore = board;

    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardBefore.territory.China.units = 1;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 8;

    boardBefore.players.player1.remainUnits = 0;
    boardBefore.players.player2.remainUnits = 7;
    
    boardBefore.phase = 4;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.units = 0;
    boardAfter.territory.India.units = 2;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 1);
    });


 it("player 1 fortify Greenland(belongs to player 1, has 1 units) from China(belongs to player 1, has 9 units) \
    with 1 units (fortify phase(4)) is illegal", function(){
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

    boardAfter.territory.China.units = 8;
    boardAfter.territory.Greenland.units = 2;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Greenland", null, 1);
    });

  it("player 1 fortify China(belongs to player 1, has 9 units) from Afghanistan(belongs to player 2, has 2 units) \
    with 1 units (fortify phase(4)) is illegal", function(){
     boardBefore = board;

    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 8;
    boardBefore.territory.Irkutsk.units = 8;
    boardBefore.territory.Afghanistan.units = 2;  

    boardBefore.players.player1.remainUnits = 0;
    boardBefore.players.player2.remainUnits = 7;
    
    boardBefore.phase = 4;
    
    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.units = 10;
    boardAfter.territory.Afghanistan.units = 1;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Afghanistan"}}], "China", null, 1);
    });

  it("player 1 fortify India(belongs to player 1, has 1 units) from China(belongs to player 1, has 9 units)\
   with 9 units (fortify phase(4)) is illegal", function(){
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

    boardAfter.territory.China.units = 0;
    boardAfter.territory.India.units = 10;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 9);
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
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 10);
    });

  

  it("getPossibleMoves returns exactly one possible move", function() {

    boardBefore = board;

    //add 1 unit on each territory on the board
    var index = boardBefore.totalPlayers;
    for (var key in boardBefore.territory){
      boardBefore.territory[key].owner =  1;
      boardBefore.territory[key].units++; 
    }

    boardBefore.territory.China.units = 2;
    boardBefore.territory.Mongolia.owner = 2;
    boardBefore.territory.Mongolia.units = 2;

    boardBefore.players.player1.remainUnits = 0;
    boardBefore.players.player2.remainUnits = 7;
    
    boardBefore.phase = 3;

    var possibleMoves = _gameLogic.getPossibleMoves(boardBefore, 1);
    
    boardAfter = angular.copy(boardBefore);
    boardAfter.territory.Mongolia.units = 1;

    var expectedMove = [{"setTurn" : {"turnIndex" : 1}},
        {"set": {"key": 'board', "value": boardAfter}},
        {"set": {"key": 'delta', "value": "China"}}];
    expect(angular.equals(possibleMoves, [expectedMove])).toBe(true);
  });


  it("player1 wins by capturing the last territory of player2 is legal", function() {
    boardBefore = board;

    //add 1 unit on player1's territory on the board
    var index = boardBefore.totalPlayers;
    for (var key in boardBefore.territory){
      boardBefore.territory[key].owner =  1;
      boardBefore.territory[key].units++; 
    }
    boardBefore.players.player1.totalTerritories = 41;
    boardBefore.players.player2.totalTerritories = 1;

    boardBefore.territory.China.units = 2;
    boardBefore.territory.Mongolia.owner = 2;

    boardBefore.players.player1.remainUnits = 0;
    boardBefore.players.player2.remainUnits = 7;
    
    boardBefore.phase = 3;
    
    boardAfter = angular.copy(boardBefore);
    boardAfter.territory.Mongolia.units = 1;
    boardAfter.territory.Mongolia.owner = 1;
    boardAfter.players.player1.totalTerritories = 42;
    boardAfter.players.player2.totalTerritories = 0;
    boardAfter.territory.China.units = 1;

    expectMoveOk("", 1,
      {"board" : boardBefore,
      },
    [{"endMatch": {"endMatchScores": [1, 0]}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Mongolia", {"d0":3, "d1":4, "d2":6, "d3":2, "d4":1}, 10);
  });

  it("can not make move after the game is over", function() {
    boardBefore = board;

    //add 1 unit on player1's territory on the board
    var index = boardBefore.totalPlayers;
    for (var key in boardBefore.territory){
      boardBefore.territory[key].owner =  1;
      boardBefore.territory[key].units++; 
    }
    boardBefore.players.player1.totalTerritories = 42;
    boardBefore.players.player2.totalTerritories = 0;

    boardBefore.territory.China.units = 2;
    
    boardBefore.players.player1.remainUnits = 0;
    boardBefore.players.player2.remainUnits = 7;
    
    boardBefore.phase = 4;
    
    boardAfter = angular.copy(boardBefore);
    

    boardAfter.territory.India.units = 1;
    boardAfter.territory.China.units = 1;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 1);
    });

  it("can not make move if either player has less units than zero", function() {
     boardBefore = board;

    //add 1 unit on each territory on the board
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardBefore.territory.China.units = 9;
    boardBefore.territory.Iceland.units = 9;
    boardBefore.territory.Irkutsk.units = 8;

    boardBefore.players.player1.remainUnits = -1;
    boardBefore.players.player2.remainUnits = 7;
    
    boardBefore.phase = 4;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.units = 6;
    boardAfter.territory.India.units = 4;

    expectIllegalMove(null, 1, 
      {"board" : boardBefore,
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India", null, 3);
    });

});