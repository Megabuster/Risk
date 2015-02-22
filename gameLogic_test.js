describe("In Risk", function() {
  var _gameLogic;
  var board;
  //var fullBoard;

  beforeEach(module("myApp"));

  beforeEach(inject(function (gameLogic) {
    _gameLogic = gameLogic;
    //console.log(gameLogic);
    board = _gameLogic.getInitialBoard(2);
    //fullBoard = _gameLogic.getTheBoardWithOneUnitOnEachCountry();
  }));

  function expectMoveOk(turnIndexBeforeMove, stateBeforeMove, move, targetCountry, moveUnits) {
    expect(_gameLogic.isMoveOk({turnIndexBeforeMove: turnIndexBeforeMove,
      stateBeforeMove: stateBeforeMove,
      move: move, targetCountry: targetCountry, moveUnits: moveUnits})).toBe(true);
  }

  function expectIllegalMove(turnIndexBeforeMove, stateBeforeMove, move, targetCountry, moveUnits) {
    expect(_gameLogic.isMoveOk({turnIndexBeforeMove: turnIndexBeforeMove,
      stateBeforeMove: stateBeforeMove,
      move: move, targetCountry: targetCountry, moveUnits: moveUnits})).toBe(false);
  }

  
  it("player 1 placing one unit on China from initial state (deploy phase(1)) is legal", function(){
    boardBefore = board;
    boardAfter = angular.copy(boardBefore);
    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 1;
    
    expectMoveOk(1, 
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
    
    boardAfter = angular.copy(boardBefore);
    
    boardAfter.territory.Iceland.owner = 2;
    boardAfter.territory.Iceland.units = 1;
    
    expectMoveOk(2, 
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
    
    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 2;
    boardAfter.territory.China.units = 1;
    
    expectIllegalMove(2, 
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
    
    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 2;
    
    expectIllegalMove(1, 
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
    
    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Russia.owner = 1;
    boardAfter.territory.Russia.units = 1;
    
    expectMoveOk(1, 
      {"board" : boardBefore,
       "delta" : "Iceland"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Russia"}}]);
    });
  
  it("player 1 adding one unit on China again after the board is full is(deploy phase(1)) legal", function(){
    
    boardBefore = board; 
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 2;
    
    expectMoveOk(1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });
   
   it("player 1 placing one unit on China again after the board is full is(deploy phase(1)) legal", function(){
    
    boardBefore = board; 
    _gameLogic.addOneUnitOnEachCountry(boardBefore);

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 2;
    
    expectMoveOk(1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });
   
  it("player 1 adding one unit on China(which belongs to player 1) (reinforce phase(2)) is legal", function(){
    
    boardBefore = board;
    //add 5 units on each territory on the board
    for (i = 1; i < 6; i++){ 
      _gameLogic.addOneUnitOnEachCountry(boardBefore);
    }

    boardBefore.phase = 2;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 6;
    
    expectMoveOk(1, 
      {"board" : boardBefore},
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });
   
  it("player 1 adding one unit on Middle_East(which belongs to player 2) (reinforce phase(2)) is illegal", function(){
    
    boardBefore = board;
    //add 5 units on each territory on the board
    for (i = 1; i < 6; i++){ 
      _gameLogic.addOneUnitOnEachCountry(boardBefore);
    }

    boardBefore.phase = 2;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Middle_East.owner = 1;
    boardAfter.territory.Middle_East.units = 6;
    
    expectIllegalMove(1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "Middle_East"}}]);
    });

  
  it("player 1 attack Middle_East(belongs to player 2) from China(belongs to player 1) (attack phase(3)) is illegal\
    (because they are not adjacent) ", function(){
    
    boardBefore = board;
    //add 5 units on each territory on the board
    for (i = 1; i < 6; i++){ 
      _gameLogic.addOneUnitOnEachCountry(boardBefore);
    }

    boardBefore.phase = 3;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.Middle_East.owner = 1;
    boardAfter.territory.Middle_East.units = 6;
    
    expectIllegalMove(1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Middle_East");
    });
  
  it("player 1 attack India(belongs to player 1) from China(belongs to player 1) (attack phase(3)) is illegal\
    (you cannot attack your own territory) ", function(){
    
    boardBefore = board;
    //add 5 units on each territory on the board
    for (i = 1; i < 6; i++){ 
      _gameLogic.addOneUnitOnEachCountry(boardBefore);
    }

    boardBefore.phase = 3;


    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.India.owner = 1;
    boardAfter.territory.India.units = 6;
    
    expectIllegalMove(1, 
      {"board" : boardBefore,
       "delta" : "Eastern_Australia"
      },
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "India");
    });
  

  it("player 1 attack Afghanistan(belongs to player 2) from China(belongs to player 1) (attack phase(3)) is legal", function(){
    
    boardBefore = board;
    //add 5 units on each territory on the board
    for (i = 1; i < 6; i++){ 
      _gameLogic.addOneUnitOnEachCountry(boardBefore);
    }

    boardBefore.phase = 3;

    boardAfter = angular.copy(boardBefore);

    boardAfter.territory.China.owner = 1;
    boardAfter.territory.China.units = 4;

    boardAfter.territory.Afghanistan.owner = 2;
    boardAfter.territory.Afghanistan.units = 4;
    
    expectMoveOk(1, 
      {"board" : boardBefore},
    [{"setTurn": {"turnIndex" : 2}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}], "Afghanistan");
    });
  
});