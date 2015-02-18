describe("In TicTacToe", function() {
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

  it("placing one unit on China from initial state is legal", function(){
    expectMoveOk(2, 
      {"board" : board,
       "delta" : 

      })
  }






    )