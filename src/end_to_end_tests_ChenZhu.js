/*
  Created by Chen on 3/26/14
*/
/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Risk', function() {

  'use strict';
  var board;
  var boardAfter;
  var boardBefore;
  var TOTAL_PLAYERS = 2;

  beforeEach(function() {
    browser.get('http://localhost:9000/game.html');
  });

  function getInitialBoard(totalPlayers) {
    return {"territory" : 
      {
        "Alaska" : {
          "name" : "Alaska" ,
          "neighbors" : {
            "Northwest_Territory" : 1,
            "Alberta" : 1,
            "Kamachatka" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Northwest_Territory" : {
          "name" : "Northwest_Territory" ,
          "neighbors" : {
            "Alaska" : 1,
            "Alberta" : 1,
            "Ontario" : 1,
            "Greenland" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Greenland" : {
          "name" : "Greenland" ,
          "neighbors" : {
            "Northwest_Territory" : 1,
            "Ontario" : 1,
            "Eastern_Canada" : 1,
            "Iceland" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Alberta" : {
          "name" : "Alberta" ,
          "neighbors" : {
            "Alaska" : 1,
            "Northwest_Territory" : 1,
            "Ontario" : 1,
            "Western_United_States" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Ontario" : {
          "name" : "Ontario" ,
          "neighbors" : {
            "Northwest_Territory" : 1,
            "Alberta" : 1,
            "Western_United_States" : 1,
            "Eastern_United_States" : 1,
            "Eastern_Canada" : 1,
            "Greenland" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Eastern_Canada" : {
          "name" : "Eastern_Canada" ,
          "neighbors" : {
            "Ontario" : 1,
            "Eastern_United_States" : 1,
            "Greenland" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Western_United_States" : {
          "name" : "Western_United_States" ,
          "neighbors" : {
            "Ontario" : 1,
            "Alberta" : 1,
            "Central_America" : 1,
            "Eastern_United_States" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Eastern_United_States" : {
          "name" : "Eastern_United_States" ,
          "neighbors" : {
            "Western_United_States" : 1,
            "Central_America" : 1,
            "Ontario" : 1,
            "Eastern_Canada" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },

        "Central_America" : {
          "name" : "Central_America" ,
          "neighbors" : {
            "Western_United_States" : 1,
            "Eastern_United_States" : 1,
            "Venezuela" : 1
          },
          "continent" : "North_America",
          "owner" : null,
          "units" : 0
        },



        "Venezuela" : {
          "name" : "Venezuela" ,
          "neighbors" : {
            "Central_America" : 1,
            "Peru" : 1,
            "Brazil" : 1
          },
          "continent" : "South_America",
          "owner" : null,
          "units" : 0
        },

        "Peru" : {
          "name" : "Peru" ,
          "neighbors" : {
            "Venezuela" : 1,
            "Brazil" : 1,
            "Argentina" : 1
          },
          "continent" : "South_America",
          "owner" : null,
          "units" : 0
        },

        "Brazil" : {
          "name" : "Brazil" ,
          "neighbors" : {
            "Venezuela" : 1,
            "Peru" : 1,
            "Argentina" : 1,
            "North_Africa" : 1
          },
          "continent" : "South_America",
          "owner" : null,
          "units" : 0
        },

        "Argentina" : {
          "name" : "Argentina" ,
          "neighbors" : {
            "Peru" : 1,
            "Brazil" : 1
          },
          "continent" : "South_America",
          "owner" : null,
          "units" : 0
        },



        "Iceland" : {
          "name" : "Iceland" ,
          "neighbors" : {
            "Greenland" : 1,
            "Great_Britain" : 1,
            "Scandinavia" : 1
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },

        "Scandinavia" : {
          "name" : "Scandinavia" ,
          "neighbors" : {
            "Iceland" : 1,
            "Great_Britain" : 1,
            "Northern_Europe" : 1,
            "Russia" : 1,
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },

        "Russia" : {
          "name" : "Russia" ,
          "neighbors" : {
            "Scandinavia" : 1,
            "Northern_Europe" : 1,
            "Southern_Europe" : 1,
            "Ural" : 1,
            "Afghanistan" : 1,
            "Middle_East" : 1
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },


        "Great_Britain" : {
          "name" : "Great_Britain" ,
          "neighbors" : {
            "Iceland" : 1,
            "Scandinavia" : 1,
            "Northern_Europe" : 1,
            "Western_Europe" : 1
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },

        "Northern_Europe" : {
          "name" : "Northern_Europe" ,
          "neighbors" : {
            "Great_Britain" : 1,
            "Western_Europe" : 1,
            "Southern_Europe" : 1,
            "Russia" : 1,
            "Scandinavia" : 1,
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },

        "Western_Europe" : {
          "name" : "Western_Europe" ,
          "neighbors" : {
            "Great_Britain" : 1,
            "Northern_Europe" : 1,
            "Southern_Europe" : 1,
            "North_Africa" : 1
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },

        "Southern_Europe" : {
          "name" : "Southern_Europe" ,
          "neighbors" : {
            "Western_Europe" : 1,
            "Northern_Europe" : 1,
            "Russia" : 1,
            "North_Africa" : 1,
            "Egypt" : 1,
            "Middle_East" :1
          },
          "continent" : "Europe",
          "owner" : null,
          "units" : 0
        },

        "North_Africa" : {
          "name" : "North_Africa" ,
          "neighbors" : {
            "Southern_Europe" : 1,
            "Western_Europe" : 1,
            "Brazil" : 1,
            "Central_Africa" : 1,
            "East_Africa" : 1,
            "Egypt" : 1
          },
          "continent" : "Africa",
          "owner" : null,
          "units" : 0
        },

        "Egypt" : {
          "name" : "Egypt" ,
          "neighbors" : {
            "Southern_Europe" : 1,
            "Western_Europe" : 1,
            "North_Africa" : 1,
            "East_Africa" : 1,
            "Middle_East" : 1
          },
          "continent" : "Africa",
          "owner" : null,
          "units" : 0
        },

        "East_Africa" : {
          "name" : "East_Africa" ,
          "neighbors" : {
            "Egypt" : 1,
            "North_Africa" : 1,
            "Central_Africa" : 1,
            "South_Africa" : 1,
            "Madagascar" : 1,
            "Middle_East" : 1
          },
          "continent" : "Africa",
          "owner" : null,
          "units" : 0
        },

        "Central_Africa" : {
          "name" : "Central_Africa" ,
          "neighbors" : {
            "North_Africa" : 1,
            "South_Africa" : 1,
            "East_Africa" : 1
          },
          "continent" : "Africa",
          "owner" : null,
          "units" : 0
        },

        "South_Africa" : {
          "name" : "South_Africa" ,
          "neighbors" : {
            "Central_Africa" : 1,
            "East_Africa" : 1,
            "Madagascar" : 1
          },
          "continent" : "Africa",
          "owner" : null,
          "units" : 0
        },

        "Madagascar" : {
          "name" : "Madagascar" ,
          "neighbors" : {
            "South_Africa" : 1,
            "East_Africa" : 1
          },
          "continent" : "Africa",
          "owner" : null,
          "units" : 0
        },



        "Ural" : {
          "name" : "Ural" ,
          "neighbors" : {
            "Russia" : 1,
            "Afghanistan" : 1,
            "China" : 1,
            "Siberia" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Siberia" : {
          "name" : "Siberia" ,
          "neighbors" : {
            "Ural" : 1,
            "China" : 1,
            "Mongolia" : 1,
            "Irkutsk" : 1,
            "Yakutsk" : 1,
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Yakutsk" : {
          "name" : "Yakutsk" ,
          "neighbors" : {
            "Siberia" : 1,
            "Irkutsk" : 1,
            "Kamchatka" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Kamchatka" : {
          "name" : "Kamchatka" ,
          "neighbors" : {
            "Yakutsk" : 1,
            "Irkutsk" : 1,
            "Mongolia" : 1,
            "Japan" : 1,
            "Alaska" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Irkutsk" : {
          "name" : "Irkutsk" ,
          "neighbors" : {
            "Siberia" : 1,
            "Mongolia" : 1,
            "Kamchatka" : 1,
            "Yakutsk" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Mongolia" : {
          "name" : "Mongolia" ,
          "neighbors" : {
            "Siberia" : 1,
            "China" : 1,
            "Japan" : 1,
            "Kamchatka" : 1,
            "Irkutsk" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Japan" : {
          "name" : "Japan" ,
          "neighbors" : {
            "Mongolia" : 1,
            "Kamchatka" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Afghanistan" : {
          "name" : "Afghanistan" ,
          "neighbors" : {
            "Russia" : 1,
            "Middle_East" : 1,
            "India" : 1,
            "China" : 1,
            "Ural" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "China" : {
          "name" : "China" ,
          "neighbors" : {
            "Afghanistan" : 1,
            "India" : 1,
            "Southeast_Asia" : 1,
            "Mongolia" : 1,
            "Siberia" : 1,
            "Ural" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Middle_East" : {
          "name" : "Middle_East" ,
          "neighbors" : {
            "Russia" : 1,
            "Southern_Europe" : 1,
            "Egypt" : 1,
            "East_Africa" : 1,
            "India" : 1,
            "Afghanistan" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "India" : {
          "name" : "India" ,
          "neighbors" : {
            "Middle_East" : 1,
            "Southeast_Asia" : 1,
            "China" : 1,
            "Afghanistan" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },

        "Southeast_Asia" : {
          "name" : "Southeast_Asia" ,
          "neighbors" : {
            "India" : 1,
            "China" : 1,
            "Indonesia" : 1
          },
          "continent" : "Asia",
          "owner" : null,
          "units" : 0
        },



        "Indonesia" : {
          "name" : "Indonesia" ,
          "neighbors" : {
            "Southeast_Asia" : 1,
            "New_Guinea" : 1,
            "Western_Australia" : 1
          },
          "continent" : "Australia",
          "owner" : null,
          "units" : 0
        },

        "New_Guinea" : {
          "name" : "New_Guinea" ,
          "neighbors" : {
            "Indonesia" : 1,
            "Western_Australia" : 1,
            "Eastern_Australia" : 1
          },
          "continent" : "Australia",
          "owner" : null,
          "units" : 0
        },

        "Western_Australia" : {
          "name" : "Western_Australia" ,
          "neighbors" : {
            "Indonesia" : 1,
            "New_Guinea" : 1,
            "Eastern_Australia" : 1
          },
          "continent" : "Australia",
          "owner" : null,
          "units" : 0
        },

        "Eastern_Australia" : {
          "name" : "Eastern_Australia" ,
          "neighbors" : {
            "New_Guinea" : 1,
            "Western_Australia" : 1
          },
          "continent" : "Australia",
          "owner" : null,
          "units" : 0
        }

      },
      // 1 means first deploy, 2 means second deploy, 3 means reinforce, 4 means attack, 5 means fortify
      "phase" : 1,
      "selected" : "",
      "totalPlayers" : totalPlayers,
      " temp" : 0,
      "players" : {
        "player1" : {
          "totalTerritories" : 0,
          "remainUnits" : 30,
          "Australia" : 0,
          "Asia" : 0,
          "Africa" : 0,
          "Europe" : 0,
          "South_America" : 0,
          "North_America" : 0
        },

        "player2" : {
          "totalTerritories" : 0,
          "remainUnits" : 30,
          "Australia" : 0,
          "Asia" : 0,
          "Africa" : 0,
          "Europe" : 0,
          "South_America" : 0,
          "North_America" : 0
        }
      },
    }
  }

  function getArea(country) {
    return element(by.id('' + country));
  }

  function getPiece(country) {
    return element(by.id(country + '_Owner'));
  }

  function expectPiece(country, pieceKind) {
    expect(getPiece(country).isDisplayed()).toEqual(pieceKind !== null ? true : false);
  }

  function expectBoard(board) {
    console.log('Jane!!!');
    for (var key in board.territory){
      expectPiece(key, board.territory[key].owner);
    }
  }

  function clickAreaAndExpectPiece(country, pieceKind) {
    getArea(country).click();
    expectPiece(country, pieceKind);
  }

  function clickEndTurn(){
    element(by.id('endTurn')).click();
  }

  function addOneUnitOnEachCountry(board){
    var index = 1;
    for (var key in board.territory){
      index = 1 - index;
      board.territory[key].owner =  index;
      board.territory[key].units++; 
    }
    board.players.player1.totalTerritories = 21;
    board.players.player2.totalTerritories = 21;

    board.players.player1.remainUnits = 9;
    board.players.player2.remainUnits = 9;

    board.players.player1.North_America = 5;
    board.players.player1.North_America = 4;

    board.players.player1.South_America = 2;
    board.players.player2.South_America = 2;

    board.players.player1.Europe = 3;
    board.players.player2.Europe = 4;
    
    board.players.player1.Africa = 3;
    board.players.player2.Africa = 3;
    
    board.players.player1.Asia = 6;
    board.players.player1.Asia = 6;
    
    board.players.player1.Australia = 2;
    board.players.player2.Australia = 2;
  }

  function helper(board){
    for (var key in board.territory){
        board.territory[key].owner =  0;
        board.territory[key].units++; 
    }
    board.territory.New_Guinea.owner = 1;
    board.territory.Western_Australia.units = 14;
    board.territory.Eastern_Australia.units = 3;

    board.players.player1.totalTerritories = 41;
    board.players.player2.totalTerritories = 1;

    board.players.player1.remainUnits = 1;
    board.players.player2.remainUnits = 5;

    board.players.player1.North_America = 9;

    board.players.player1.South_America = 4;

    board.players.player1.Europe = 7;
    
    board.players.player1.Africa = 6;
    
    board.players.player1.Asia = 12;
    
    board.players.player1.Australia = 3;
    board.players.player2.Australia = 1;
    board.phase = 2;
  }

  // playMode is either: 'passAndPlay', 'playAgainstTheComputer', 'onlyAIs',
  // or a number representing the playerIndex (-2 for viewer, 0 for white player, 1 for black player, etc)
  function setMatchState(matchState, playMode) {
    //var s = window.e2e_test_stateService;

    browser.executeScript(function(matchStateInJson, playMode) {
      var stateService = window.e2e_test_stateService;
      stateService.setMatchState(angular.fromJson(matchStateInJson));
      stateService.setPlayMode(angular.fromJson(playMode));
      angular.element(document).scope().$apply(); // to tell angular that things changes.
    }, JSON.stringify(matchState), JSON.stringify(playMode));
  }
  
  
  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Risk');
  });
  
  it('should have an empty Risk board', function () {
    board = getInitialBoard(TOTAL_PLAYERS);
    expectBoard(board);
  });

  it('should show a red piece if I click in Russia', function () {
    board = getInitialBoard(TOTAL_PLAYERS);
    clickAreaAndExpectPiece("Russia", 0);
    board.territory.Russia.owner = 0;
    board.territory.Russia.units = 1;
    expectBoard(board);
  });

  it('should ignore clicking on a non-empty country before the board is full', function () {
    board = getInitialBoard(TOTAL_PLAYERS);
    clickAreaAndExpectPiece("China", 0);
    clickAreaAndExpectPiece("China", 0); // clicking on a non-empty cell doesn't do anything.
    clickAreaAndExpectPiece("Russia", 1);
    board.territory.China.owner = 0;
    board.territory.China.units = 1;
    board.territory.Russia.owner = 1;
    board.territory.Russia.units = 1;    
    expectBoard(board);
  });
  
  it('should show a full board after every country on the board is clicked', function () {
    board = getInitialBoard(TOTAL_PLAYERS);
    var index =  0;
    
    for (var key in board.territory){
      clickAreaAndExpectPiece(key, index);
      index = 1 - index;
    }
    
    index = 0;
    for (var key in board.territory){
      board.territory[key].owner = index;
      board.territory[key].units = 1;
      index = 1 - index;
    }
    expectBoard(board);
  });

  it('should ignore clicking on other players country', function () {
    board = getInitialBoard(TOTAL_PLAYERS);
    var index =  0;
    
    for (var key in board.territory){
      clickAreaAndExpectPiece(key, index);
      index = 1 - index;
    }
    clickAreaAndExpectPiece("China", 0);
    
    index = 0;
    for (var key in board.territory){
      board.territory[key].owner = index;
      board.territory[key].units = 1;
      index = 1 - index;
    }
    board.territory.China.units = 2;
    expectBoard(board);
  });
  
  var delta1 = {"moveType": null, "country": "Eastern_Australia", "targetCountry":"", "moveUnits":0};
  var board1 = getInitialBoard(TOTAL_PLAYERS);
  addOneUnitOnEachCountry(board1);

  var delta2 = {"moveType": null, "country": "China", "targetCountry":"", "moveUnits":0}
  var board2 = getInitialBoard(TOTAL_PLAYERS);
  addOneUnitOnEachCountry(board2);
  board2.territory.China.units = 2;
  board2.players.player1.remainUnits = 8;

  var board3 = getInitialBoard(2);
  addOneUnitOnEachCountry(board3);
  board3.territory.Mongolia.units = 2;
  board3.territory.China.units = 2;
  board3.players.player1.remainUnits = 8;
  board3.players.player2.remainUnits = 8;
  
  var matchState2 = {
    turnIndexBeforeMove: 0,
    turnIndex: 1,
    endMatchScores: null,
    lastMove: [{set: {key: "diceRoll", value: false}},
          {setTurn: {turnIndex: 1}},
          {set: {key: 'board', value: board2}},
          {set: {key: 'delta', value: delta2}}],
    lastState: {board: board1, delta: delta1},
    currentState: {board: board2, delta: delta2},
    lastVisibleTo: {},
    currentVisibleTo: {},
  };

  it('clicking on Mongolia after fill the board in the first phase', function () {
    setMatchState(matchState2, 'passAndPlay');
    expectBoard(board2);
    clickAreaAndExpectPiece("Mongolia", 1);
    expectBoard(board3);
  });


  var delta4 = {"moveType": null, "country": "Eastern_Australia", "targetCountry":"", "moveUnits":0};
  var board4 = getInitialBoard(TOTAL_PLAYERS);
  helper(board4);

  var delta5 = {"moveType": null, "country": "Eastern_Australia", "targetCountry":"", "moveUnits":0};
  var board5 = getInitialBoard(TOTAL_PLAYERS);
  helper(board5);
  board5.territory.Eastern_Australia.units = 4;
  board5.players.player1.remainUnits = 0;
  board5.phase = 3;

  var matchState3 = {
    turnIndexBeforeMove: 0,
    turnIndex: 0,
    endMatchScores: null,
    lastMove: [{set: {key: "diceRoll", value: false}},
          {setTurn: {turnIndex: 0}},
          {set: {key: 'board', value: board5}},
          {set: {key: 'delta', value: delta5}}],
    lastState: {board: board4, delta: delta4},
    currentState: {board: board5, delta: delta5},
    lastVisibleTo: {},
    currentVisibleTo: {},
  };

  
  it('click to win', function () {
    setMatchState(matchState3, 'passAndPlay');
    expectBoard(board5);
    clickAreaAndExpectPiece("Western_Australia", 1);
    clickAreaAndExpectPiece("New_Guinea", 1); 
  });

  var delta7 = {"moveType": null, "country": "Alaska", "targetCountry":"", "moveUnits":0};
  var board7 = getInitialBoard(TOTAL_PLAYERS);
  addOneUnitOnEachCountry(board7);
  board7.territory.Alaska.units = 16;
  board7.players.player1.remainUnits = 1;
  board7.territory.Northwest_Territory.units = 10;
  board7.players.player2.remainUnits = 7;
  board7.phase = 2;

  var delta8 = {"moveType": null, "country": "Alaska", "targetCountry":"", "moveUnits":0};
  var board8 = getInitialBoard(TOTAL_PLAYERS);
  addOneUnitOnEachCountry(board8);
  board8.territory.Alaska.units = 17;
  board8.players.player1.remainUnits = 0;
  board8.territory.Northwest_Territory.units = 10;
  board8.players.player2.remainUnits = 7;
  board8.phase = 3;

  var matchState4 = {
    turnIndexBeforeMove: 0,
    turnIndex: 0,
    endMatchScores: null,
    lastMove: [{set: {key: "diceRoll", value: false}},
          {setTurn: {turnIndex: 0}},
          {set: {key: 'board', value: board8}},
          {set: {key: 'delta', value: delta8}}],
    lastState: {board: board7, delta: delta7},
    currentState: {board: board8, delta: delta8},
    lastVisibleTo: {},
    currentVisibleTo: {},
  };

  var delta9 = {"moveType": "endTurn", "country": null, "targetCountry":null, "moveUnits":null};
  var board9 = getInitialBoard(TOTAL_PLAYERS);
  addOneUnitOnEachCountry(board9);
  board9.territory.Alaska.units = 17;
  board9.players.player1.remainUnits = 0;
  board9.territory.Northwest_Territory.units = 10;
  board9.players.player2.remainUnits = 7;
  board9.phase = 4;

  
  it('player 1 click end turn to change phase to 4 in phase 3', function(){
    setMatchState(matchState4, 'passAndPlay');
    expectBoard(board8);
    clickEndTurn();
    expectBoard(board9);
  });
  
  /*var matchState5 = {
    turnIndexBeforeMove: 0,
    turnIndex: 0,
    endMatchScores: null,
    lastMove: [{set: {key: "diceRoll", value: true}},
          {setRandomInteger: {key: s, from: 1, to: 7}},
          ],
    lastState: {board: board8, delta: delta8},
    currentState: {board: board8, delta: delta8},
    lastVisibleTo: {},
    currentVisibleTo: {},
  }

  it('can start a game where player 1 attacks a country next to Alaska in phace 3(attack)', function() {
    setMatchState(matchState4, 'passAndPlay');
    expectBoard(board8);
    getArea("Alaska").click();
    getArea("Kamchatka").click();

  }); */

  var matchState6 = {
    turnIndexBeforeMove: 0,
    turnIndex: 0,
    endMatchScores: null,
    lastMove: [{set: {key: "diceRoll", value: false}},
          {setTurn: {turnIndex: 0}},
          {set: {key: 'board', value: board9}},
          {set: {key: 'delta', value: delta9}}],
    lastState: {board: board8, delta: delta8},
    currentState: {board: board9, delta: delta9},
    lastVisibleTo: {},
    currentVisibleTo: {},
  }

  it('can start a game where player 1 is in phase 4(fortify) and should ignore clicks on Northwest_Territory cause its owned by player2', function() {
    setMatchState(matchState6, 'passAndPlay');
    expectBoard(board9);
    // getArea("Alaska").click();
    // getArea("Northwest_Territory").click(); // this click should be ignored
    // expectBoard(board9);
  });

});
