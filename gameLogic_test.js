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

  function expectMoveOk(turnIndexBeforeMove, stateBeforeMove, move) {
    expect(_gameLogic.isMoveOk({turnIndexBeforeMove: turnIndexBeforeMove,
      stateBeforeMove: stateBeforeMove,
      move: move})).toBe(true);
  }

  function expectIllegalMove(turnIndexBeforeMove, stateBeforeMove, move) {
    expect(_gameLogic.isMoveOk({turnIndexBeforeMove: turnIndexBeforeMove,
      stateBeforeMove: stateBeforeMove,
      move: move})).toBe(false);
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
   

});