'use strict'

angular.module('myApp').factory('gameLogic', function()){
	
	function isEqual(object1, object2){
		return angular.equals(object1, object2);
	}

	function copyObject(object){
		return angular.copy(object);
	}

	function getInitialBoard(board.totalPlayerss) {
		return 
	{"territory" : 

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
	"totalPlayers" : totalPlayers
	}



	function getWinner(board){

	}

	/**
	 * Return true if every country is deployed with units.
	**/

	function boardIsFull(board){
		for (var key in board.territory){
			if (board.territory[key].owner === null)
				return false;
		}
		return true;
	}

	

	function createMove(board, turnIndexBeforeMove, country, targetCountry, moveUnits){
		if (board === undefined){
			// Initirally, the board in state is undefined.
			board = getInitialBoard(2);
		}
		
		switch (board.phase){
			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes
			 * a move in the country in the first deploy phase. You can not deploy more than one unit on each territory 
			 * in the first phase.  
			**/
			case 1:
			{
				if (board.territory[country].owner !== null){
					throw new Error("You have to deploy units on blank territory in first deploy phase");
				}

				var boardAfterMove = angular.copy(board);
				boardAfterMove.territory[country].Owner = turnIndexBeforeMove;
				boardAfterMove.territory[country].units++;

				// The next player's turn (the turn index minus one).
				var firstOperation = {"setTurn" : {"turnIndex" : (turnIndexBeforeMove - 1 === 0 ? board.totalPlayers : turnIndexBeforeMove - 1}};
				
				return [firstOperation,
					{"set": {"key": "board", "value": boardAfterMove}},
					{"set": {"key": "delta", "value": country}}];
			}

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes
			 * a move in the country in the second deploy phase. You can not deploy units on others' territory.
			**/

			case 2:
			{
				if (board.territory[country].owner !== turnIndexBeforeMove){
					throw new Error("You can not deploy units on other's territory");
				}

				var boardAfterMove = angular.copy(board);
				boardAfterMove.territory[country].units++;

				// The next player's turn (the turn index minus one).
				var firstOperation = {"setTurn" : {"turnIndex" : (turnIndexBeforeMove - 1 === 0 ? board.totalPlayers : turnIndexBeforeMove - 1}};
				
				return [firstOperation,
						{"set": {"key": "board", "value": boardAfterMove}},
						{"set": {"key": "delta", "value": country}}];
			}


			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes
			 * a move in the country in the reinforce phase. You can not reinforce units on others' territory.
			**/
			case 3:
			{
				if (board.territory[country].owner !== turnIndexBeforeMove){
					throw new Error("You can not deploy units on other's territory");
				}

				var boardAfterMove = angular.copy(board);
				boardAfterMove.territory[country].units++;

				// The next player's turn (the turn index minus one).
				var firstOperation = {"setTurn" : {"turnIndex" : (turnIndexBeforeMove - 1 === 0 ? board.totalPlayers : turnIndexBeforeMove - 1}};
				
				return [firstOperation,
						{"set": {"key": "board", "value": boardAfterMove}},
						{"set": {"key": "delta", "value": country}}];	
			}

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes a
			 * move in the country in the attack phase. You can only attack your neighbor enemies.
			**/
			case 4:
			{
				if (board.territory[country].owner !== turnIndexBeforeMove){
					throw new Error("You have to choose your own unit");
				}

				if (board.territory[country].units === 1){
					throw new Error("You have to choose a country with units more than one")
				}

				if (!board.territory[targetCountry].name in board[country].neighbors){
					throw new Error("You can only attack adjacent countries");
				}

				if (board.territory[targetCountry].owner !== turnIndexBeforeMove){
					throw new Error("You can not attack your own territory");
				}

				// the result after an attack including the owner and the units info, it depends on players sometime.
				var result = getReusltAfterAttack(board.territory[country].units, board.territory[targetCountry].units);
				
				var boardAfterMove = angular.copy(board);

				boardAfterMove.territory[country].owner = result.attacker.owner;
				boardAfterMove.territory[targetCountry].owner = result.defender.owner;
				boardAfterMove.territory[country].units = result.attacker.units;
				boardAfterMove.territory[targetCountry].owner = result.defender.units;

				// The next player's turn (the turn index minus one).
				var firstOperation = {"setTurn" : {"turnIndex" : (turnIndexBeforeMove - 1 === 0 ? board.totalPlayers : turnIndexBeforeMove - 1}};
				
				return [firstOperation,
						{"set": {"key": "board", "value": boardAfterMove}},
						{"set": {"key": "delta", "value": country}}];	
		
			}

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes a
			 * move in the country in the fortify phase. You can only move units from your 
			 * own territory to your own neighbor territory.
			**/

			case 5:
			{
				if (board.territory[country].owner !== turnIndexBeforeMove){
					throw new Error("You have to choose your own unit");
				}

				if (board.territory[country].units === 1){
					throw new Error("You have to choose a country with units more than one")
				}

				if (!board.territory[targetCountry].name in board[country].neighbors){
					throw new Error("You can only fortify adjacent countries");
				}

				if (board.territory[targetCountry].owner !== turnIndexBeforeMove){
					throw new Error("You can only fortify your own territory");
				}

				if (moveUnits >= board.territory[country] || moveUnits < 0){
					throw new Error("You can not move units more than you have.")
				}

				var boardAfterMove = angular.copy(board);

				boardAfterMove.territory[country].units = board.territory[country].units - moveUnits;
				boardAfterMove.territory[targetCountry].owner = board.territory[targetCountry].units + moveUnits;

				// The next player's turn (the turn index minus one unless it's 0).
				var firstOperation = {"setTurn" : {"turnIndex" : (turnIndexBeforeMove - 1 === 0 ? board.totalPlayers : turnIndexBeforeMove - 1}};
				
				return [firstOperation,
						{"set": {"key": "board", "value": boardAfterMove}},
						{"set": {"key": "delta", "value": country}}];	
				
			}
		}
	}



	function isMoveOk(params){
		var move = params.move;
		var turnIndexBeforeMove = params.turnIndexBeforeMove;
		var stateBeforeMove = params.stateBeforeMove;

		//Here we assume that turnIndexBeforeMove and stateBeforeMove are legal, and we need 
		//to verify that move is legal

		try{

			var deltaValue = move[2].set.value;
			var board = stateBeforeMove.board;
			var expectedMove = createMove(board, turnIndexBeforeMove, deltaValue);
			if (!angular.equals(move, expectedMove)){
				return false;
			}
		} catch (e) {
			// if there are any exceptions then move is illegal
		  return false;
		}
		return true;
	}

	return {
		getInitialBoard: getInitialBoard,
		createMove: createMove,
		isMoveOk: isMoveOk
	};
});