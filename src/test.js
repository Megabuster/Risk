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
  };
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
  board.players.player2.North_America = 4;

  board.players.player1.South_America = 2;
  board.players.player2.South_America = 2;

  board.players.player1.Europe = 3;
  board.players.player2.Europe = 4;
  
  board.players.player1.Africa = 3;
  board.players.player2.Africa = 3;
  
  board.players.player1.Asia = 6;
  board.players.player2.Asia = 6;
  
  board.players.player1.Australia = 2;
  board.players.player2.Australia = 2;
}

function helper(board){
  for (var key in board.territory){
      board.territory[key].owner =  0;
      board.territory[key].units++; 
  }
  board.territory.New_Guinea.owner = 1;
  board.territory.Western_Australia.units = 3;
  board.territory.Eastern_Australia.units = 13;
  //board.territory.New_Guinea.units = 3;

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



var delta4 = {"moveType": null, "country": "Eastern_Australia", "targetCountry":"", "moveUnits":0};
var board4 = getInitialBoard(2);
helper(board4);

var delta5 = {"moveType": null, "country": "Eastern_Australia", "targetCountry":"", "moveUnits":0};
var board5 = getInitialBoard(2);
helper(board5);
board5.territory.Eastern_Australia.units = 14;
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

var w = Window;
var stateService = w.e2e_test_stateService;
stateService.setMatchState(matchState3);
stateService.setPlayMode('passAndPlay');
w.angular.element(document).scope().$apply();



