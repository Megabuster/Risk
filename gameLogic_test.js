describe("In Risk", function() {
  var _gameLogic;

  beforeEach(module("myApp"));

  beforeEach(inject(function (gameLogic) {
    _gameLogic = gameLogic;
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

  var board = _gameLogic.getInitialBoard(2);

  it("placing one unit on China from initial state (deploy phase) is legal", function(){
    boardBefore = board;
    boardAfter = angular.copy(boardBefore);
    boardAfter.territory.China.owner = 2;
    boardAfter.territory.China.units = 1;
    
    expectMoveOk(2, 
      {"board" : boardBefore,
       "delta" : null
      },
    [{"setTurn": {"turnIndex" : 1}},
     {"set": {"key":"board", "value" : boardAfter}},
     {"set": {"key":"delta", "value" : "China"}}]);
    });
});