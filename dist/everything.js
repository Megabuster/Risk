/*
	Created by Zhuoran on 2/24/14
*/
angular.module('myApp',[]).factory('gameLogic', function(){

	'use strict';

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
			"target" : "",
			"totalPlayers" : totalPlayers,
			"temp" : 0,
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

	function getWinner(board){
		for (var i = 0; i < 2; i++){
			if (board.players["player"+(i+1)].totalTerritories === 42){
				return "player" + (i+1);
			}
		}
		return "";
	}

	// get all possible moves besides end turn

	function getPossibleMoves(board, turnIndexBeforeMove) {
		var possibleMoves = [];
		var dice = {"d0":3, "d1":4, "d2":6, "d3":1, "d4":2};
		var moveUnits = 1;
		var moveType = "endTurn";
		for (var country in board.territory){
			for (var targetCountry in board.territory){
				try{
					possibleMoves.push(createMove(moveType, board, turnIndexBeforeMove, country, targetCountry, dice, moveUnits));
				} catch (e){

				}
			}
		}
		return possibleMoves;
	}


	/**
	 * Return true if every country is deployed with units.
	 **/

	 function boardIsFull(board){
	 	for (var key in board.territory){
	 		if (board.territory[key].owner === null){
	 			return false;
	 		}
	 	}
	 	return true;
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
	 }

	/* dice is a JSON object representing the current state of the dice
	 * resrolls is an array representing the dice that need to be rolled (or rolled again)
	 */


	 function createRollMove(dice, turnIndex) {
	 	var move = [{set: {key: "diceRoll", value: true}},
	 	{"setTurn" : {"turnIndex" : turnIndex}}];
	 	if(dice.d0 === undefined){
	 		dice.d0 = null;
	 	}
	 	if(dice.d1 === undefined){
	 		dice.d1 = null;
	 	}
	 	if(dice.d2 === undefined){
	 		dice.d2 = null;
	 	}
	 	if(dice.d3 === undefined){
	 		dice.d3 = null;
	 	}
	 	if(dice.d4 === undefined){
	 		dice.d4 = null;
	 	}

	 	var s;
	 	for (s in dice) {
	 		move.push({setRandomInteger: {key: s, from: 1, to: 7}});
	 	} 
	 	return move;
	 }



	 function createMove(moveType, board, turnIndexBeforeMove, country, targetCountry, dice, moveUnits){
	 	if (board === undefined){
			// Initirally, the board in state is undefined.
			board = getInitialBoard(2);
		}
		//moveType = ["deploy", "reinforce", "attack", "fortify", "endTurn", "endPhase"]
		if (getWinner(board) !== '') {
			throw new Error("Can only make a move if the game is not over!");
		}

		if(board.players.player1.remainUnits < 0 || board.players.player2.remainUnits < 0){
			throw new Error("No enough units!");

		}
		switch (board.phase){

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes
			 * a move in the country in the first deploy phase. You can not deploy more than one unit on each territory 
			 * in the first phase.  
			 **/
			 case 1:
			 {	
			 	
			 	if(moveType === "endTurn"){
			 		throw new Error("You can not end turn because you still have remain units");
			 	}
			 	if (!boardIsFull(board)){
			 		if (board.territory[country].owner !== null){
			 			throw new Error("You have to deploy units on blank territory in first deploy phase");
			 		}
			 		
			 		var boardAfterMove = angular.copy(board);
			 		boardAfterMove.territory[country].owner = turnIndexBeforeMove;
			 		boardAfterMove.territory[country].units++;
			 		boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits--;
					//alert(boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits);
					var remainUnits = getRemainUnits(boardAfterMove, turnIndexBeforeMove);

					var continent = boardAfterMove.territory[country].continent;
					boardAfterMove.players["player"+(turnIndexBeforeMove+1)][continent]++;
					boardAfterMove.players["player"+(turnIndexBeforeMove+1)].totalTerritories++;

					// The next player's turn (the turn index minus one).
					var firstOperation = {"setTurn" : {"turnIndex" : 1 - turnIndexBeforeMove}};
					
					return [{set: {key: "diceRoll", value: false}},
					firstOperation,
					{"set": {"key": "board", "value": boardAfterMove}},
					{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry, "moveUnits":moveUnits}}}];
				}

				else{
					if (board.territory[country].owner !== turnIndexBeforeMove){
						throw new Error("You can not deploy units on other's territory");
					}
					var boardAfterMove = angular.copy(board);
					boardAfterMove.territory[country].units++;
					boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits--;

					// The next player's turn (the turn index minus one).
					var firstOperation = {"setTurn" : {"turnIndex" : 1 - turnIndexBeforeMove}};
					
					if(boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits === 0){
						console.log("lala");
						if(turnIndexBeforeMove === 0){
							console.log("lala");
							var remainUnits = getRemainUnits(boardAfterMove, turnIndexBeforeMove);
							boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits = getRemainUnits(boardAfterMove, turnIndexBeforeMove);
						}else{
							boardAfterMove.phase = 2;
							boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits = getRemainUnits(boardAfterMove, turnIndexBeforeMove);
						}
						
					}

					
					return [{set: {key: "diceRoll", value: false}},
					firstOperation,
					{"set": {"key": "board", "value": boardAfterMove}},
					{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry, "moveUnits":moveUnits}}}];
				}
			}

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes
			 * a move in the country in the reinforce phase. You can not reinforce units on others' territory.
			 **/
			 case 2:
			 {
			 	if(moveType === "endTurn"){
			 		throw new Error("You can not end turn because you still have remain units");
			 	}
			 	if (board.territory[country].owner !== turnIndexBeforeMove){
			 		throw new Error("You can not deploy units on other's territory");
			 	}

			 	var boardAfterMove = angular.copy(board);
			 	boardAfterMove.territory[country].units++;
			 	boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits--;

			 	if(boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits === 0){
			 		boardAfterMove.phase = 3;
			 	}

			 	var firstOperation = {"setTurn" : {"turnIndex" : turnIndexBeforeMove}};

			 	return [{set: {key: "diceRoll", value: false}},
			 	firstOperation,
			 	{"set": {"key": "board", "value": boardAfterMove}},
			 	{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry, "moveUnits":moveUnits}}}];	
			 }

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes a
			 * move in the country in the attack phase. You can only attack your neighbor enemies.
			 **/
			 case 3:
			 {
			 	if(moveType === "endTurn"){
			 		var boardAfterMove = angular.copy(board);
			 		boardAfterMove.phase = 4;

			 		var firstOperation = {"setTurn" : {"turnIndex" : turnIndexBeforeMove}};
			 		return [{set: {key: "diceRoll", value: false}},
			 		firstOperation,
			 		{"set": {"key": "board", "value": boardAfterMove}},
			 		{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry, "moveUnits":moveUnits}}}];	
			 	}

			 	if(board.players["player"+(turnIndexBeforeMove+1)].remainUnits > 0){
			 		throw new Error("You still have some units to reinforce");
			 	}


			 	if (board.territory[country].owner !== turnIndexBeforeMove){
			 		throw new Error("You have to choose your own unit");
			 	}


			 	if (board.territory[country].units === 1){
			 		throw new Error("You have to choose a country with units more than one");
			 	}

			 	if ((Object.keys(board.territory[country].neighbors).indexOf(board.territory[targetCountry].name) <= -1)){
			 		throw new Error("You can only attack adjacent countries");
			 	}

			 	if (board.territory[targetCountry].owner === turnIndexBeforeMove){
			 		throw new Error("You can not attack your own territory");
			 	}
			 	var boardAfterMove = angular.copy(board);



				// the result after an attack including the owner and the units info, it depends on players sometime.
				var result = getReusltAfterAttack(board, board.territory[country].units, board.territory[country].owner,
					board.territory[targetCountry].units, board.territory[targetCountry].owner, dice, moveUnits);
				
				boardAfterMove.territory[country].owner = result.attacker.owner;
				boardAfterMove.territory[targetCountry].owner = result.defender.owner;
				boardAfterMove.territory[country].units = result.attacker.units;
				boardAfterMove.territory[targetCountry].units = result.defender.units;

				if(boardAfterMove.territory[targetCountry].owner !== board.territory[targetCountry].owner){
					boardAfterMove.players["player"+(turnIndexBeforeMove+1)].totalTerritories++;
					var continent = boardAfterMove.territory[targetCountry].continent;
					boardAfterMove.players["player"+(turnIndexBeforeMove+1)][continent]++;

					boardAfterMove.players["player"+(turnIndexBeforeMove === 0 ? 2 : 1)].totalTerritories--;
					boardAfterMove.players["player"+(turnIndexBeforeMove === 0 ? 2 : 1)][continent]--;
				}

				var firstOperation = {"setTurn" : {"turnIndex" : turnIndexBeforeMove}};
				
				var winner = getWinner(boardAfterMove);
				if (winner !== '') {
					// Game over.
					firstOperation = {endMatch: {endMatchScores:
						(winner === 'player1' ? [1, 0] : [0, 1])}};
					} 

				return [{set: {key: "diceRoll", value: false}},
				firstOperation,
				{"set": {"key": "board", "value": boardAfterMove}},
				{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry,  "moveUnits":moveUnits}}}];	

			}

			/**
			 * Return the move that should be performed when player with index turnIndexBeforeMove makes a
			 * move in the country in the fortify phase. You can only move units from your 
			 * own territory to your own neighbor territory.
			 **/

			 case 4:
			 {
			 	if(moveType === "endTurn"){
			 		var boardAfterMove = angular.copy(board);
			 		boardAfterMove.phase = 2;
			 		boardAfterMove.players["player"+(turnIndexBeforeMove+1)].remainUnits = getRemainUnits(boardAfterMove, turnIndexBeforeMove);

					// The next player's turn (the turn index minus one unless it's 0).
					var firstOperation = {"setTurn" : {"turnIndex" : 1 - turnIndexBeforeMove}};
					return [{set: {key: "diceRoll", value: false}},
					firstOperation,
					{"set": {"key": "board", "value": boardAfterMove}},
					{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry, "moveUnits":moveUnits}}}];	
				}
				if (country === targetCountry){
					throw new Error("You can not fortify the same country");
				}

				if (board.territory[country].owner !== turnIndexBeforeMove){
					throw new Error("You have to choose your own unit");
				}

				if (board.territory[country].units === 1){
					throw new Error("You have to choose a country with units more than one");
				}

				if (!(Object.keys(board.territory[country].neighbors).indexOf(board.territory[targetCountry].name) > -1)){
					throw new Error("You can only fortify adjacent countries");
				}

				if (board.territory[targetCountry].owner !== turnIndexBeforeMove){
					throw new Error("You can only fortify your own territory");
				}

				if (moveUnits >= board.territory[country].units || moveUnits < 0){
					throw new Error("You can not move units more than you have.");
				}

				var boardAfterMove = angular.copy(board);

				boardAfterMove.territory[country].units = board.territory[country].units - moveUnits;
				boardAfterMove.territory[targetCountry].units = board.territory[targetCountry].units + moveUnits;
				
				var firstOperation = {"setTurn" : {"turnIndex" : turnIndexBeforeMove}};

				return [{set: {key: "diceRoll", value: false}},
				firstOperation,
				{"set": {"key": "board", "value": boardAfterMove}},
				{"set": {"key": "delta", "value": {"moveType": moveType, "country": country, "targetCountry":targetCountry, "moveUnits":moveUnits}}}];	
				
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
			if(move[0].set.value){
				var dice = {d0: stateBeforeMove.d0, d1: stateBeforeMove.d1, d2: stateBeforeMove.d2, d3: stateBeforeMove.d3, d4: stateBeforeMove.d4};
				var expectedMove = createRollMove(dice, turnIndexBeforeMove);
				if (!angular.equals(move, expectedMove)) {
					return false;
				}
			}else{
				var deltaValue = move[3].set.value;
				var targetCountry = deltaValue.targetCountry;
				var moveUnits = deltaValue.moveUnits;
				var dice = {d0: stateBeforeMove.d0, d1: stateBeforeMove.d1, d2: stateBeforeMove.d2, d3: stateBeforeMove.d3, d4: stateBeforeMove.d4};				var moveType = deltaValue.moveType;
				var country = deltaValue.country;
				var board = stateBeforeMove.board;
				var expectedMove = createMove(moveType, board, turnIndexBeforeMove, country, targetCountry, dice, moveUnits);
				if (!angular.equals(move, expectedMove)){
					return false;
				}
			} 
		}catch (e) {
			// if there are any exceptions then move is illegal
			console.log(e);
			return false;
		}
		return true;
	}


	function getRemainUnits(board, turnIndex){
		var basicUnits;
		if(board.players["player"+(turnIndex+1)].totalTerritories / 3 < 3){
			basicUnits = 3;
		}
		else{
			basicUnits = Math.floor(board.players["player"+(turnIndex+1)].totalTerritories / 3 );
		}
		if (board.players["player"+(turnIndex+1)].Asia === 12){
			basicUnits += 7;
		}
		if (board.players["player"+(turnIndex+1)].Australia === 4){
			basicUnits += 2;
		}
		if (board.players["player"+(turnIndex+1)].Africa === 6){
			basicUnits += 3;
		}
		if (board.players["player"+(turnIndex+1)].Europe === 7){
			basicUnits += 5;
		}
		if (board.players["player"+(turnIndex+1)].North_America === 9){
			basicUnits += 5;
		}
		if (board.players["player"+(turnIndex+1)].South_America === 4){
			basicUnits += 2;
		}
		return basicUnits;

	}

	function getReusltAfterAttack(board, attackerUnits, attackerOwner, defenderUnits, defenderOwner, dice, moveUnits){
		var i;
		var res;
		var attackerDices;
		var defenderDices;
		var attackerIndex = [];
		var defenderIndex = [];
		//console.log(dice);

		if(Object.keys(dice).length !== 5){
			throw new Error("Need 5 dices to perform an attack!");
		}

		if (attackerUnits === 1){
			return res;
		}
		else if (attackerUnits === 2){
			attackerDices = 1;
		}
		else if (attackerUnits === 3){
			attackerDices = 2;
		}
		else{
			attackerDices = 3;
		}


		if (defenderUnits === 1){
			defenderDices = 1;
		}
		else{
			defenderDices = 2;
		}

	
		for(i = 0; i < attackerDices; i++){
			attackerIndex[i] = dice["d" + i];
		}

		for(i = 0; i < defenderDices; i++){
			defenderIndex[i] = dice["d" + (i+3)];
		}

		if(attackerDices === 3 && defenderDices === 2){
			var attackerHighest = Math.max.apply(null, attackerIndex);

			attackerIndex.splice(attackerIndex.indexOf(attackerHighest), 1); // remove max from the array

			var attackerSecondHighest = Math.max.apply(null, attackerIndex);

			var defenderHighest = Math.max.apply(null, defenderIndex);
			defenderIndex.splice(defenderIndex.indexOf(defenderHighest), 1);
			var defenderSecondHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}

			if(attackerSecondHighest > defenderSecondHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 3 && defenderDices === 1){
			var attackerHighest = Math.max.apply(null, attackerIndex);
			var defenderHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 2 && defenderDices === 2){
			var attackerHighest = Math.max.apply(null, attackerIndex);
			attackerIndex.splice(attackerIndex.indexOf(attackerHighest), 1); // remove max from the array
			var attackerSecondHighest = attackerIndex[0];

			var defenderHighest = Math.max.apply(null, defenderIndex);
			defenderIndex.splice(defenderIndex.indexOf(defenderHighest), 1);
			var defenderSecondHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}

			if(attackerSecondHighest > defenderSecondHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 2 && defenderDices === 1){
			var attackerHighest = Math.max.apply(null, attackerIndex);
			var defenderHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 1 && defenderDices === 2){
			var attackerHighest = attackerIndex[0];
			var defenderHighest = Math.max.apply(null, defenderIndex);

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 1 && defenderDices === 1){
			var attackerHighest = attackerIndex[0];
			var defenderHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		if(defenderUnits === 0){
			defenderOwner = attackerOwner;
			defenderUnits = moveUnits;
			attackerUnits -= moveUnits;	
		}

		res = {"attacker":{"owner": attackerOwner, "units": attackerUnits},
		"defender":{"owner": defenderOwner, "units": defenderUnits}};
		return res;
	}

	function checkIfMovable(board, turnIndexBeforeMove, country, targetCountry){
		if (country === targetCountry){
			return false;
		}

		if (board.territory[country].owner !== turnIndexBeforeMove){
			return false;
		}

		if (board.territory[country].units === 1){
			return false;
		}

		if (!(Object.keys(board.territory[country].neighbors).indexOf(board.territory[targetCountry].name) > -1)){
			return false;
		}

		if (board.territory[targetCountry].owner !== turnIndexBeforeMove){
			return false;
		}	
		return true;
	}


	function checkIfWin(board, turnIndexBeforeMove, country, targetCountry, dice){
		var i;
		var res;
		var attackerDices;
		var defenderDices;
		var attackerIndex = [];
		var defenderIndex = [];
		var attackerUnits = board.territory[country].units;
		var attackerOwner = board.territory[country].owner;
		var defenderUnits = board.territory[targetCountry].units;
		var defenderOwner = board.territory[targetCountry].owner;
		//console.log(dice);

		if(board.players["player"+(turnIndexBeforeMove+1)].remainUnits > 0){
	 		throw new Error("You still have some units to reinforce");
	 	}


	 	if (board.territory[country].owner !== turnIndexBeforeMove){
	 		throw new Error("You have to choose your own unit");
	 	}


	 	if (board.territory[country].units === 1){
	 		throw new Error("You have to choose a country with units more than one");
	 	}

	 	if ((Object.keys(board.territory[country].neighbors).indexOf(board.territory[targetCountry].name) <= -1)){
	 		throw new Error("You can only attack adjacent countries");
	 	}

	 	if (board.territory[targetCountry].owner === turnIndexBeforeMove){
	 		throw new Error("You can not attack your own territory");
	 	}

		if(Object.keys(dice).length !== 5){
			throw new Error("Need 5 dices to perform an attack!");
		}

		if (attackerUnits === 1){
			return res;
		}
		else if (attackerUnits === 2){
			attackerDices = 1;
		}
		else if (attackerUnits === 3){
			attackerDices = 2;
		}
		else{
			attackerDices = 3;
		}


		if (defenderUnits === 1){
			defenderDices = 1;
		}
		else{
			defenderDices = 2;
		}

	
		for(i = 0; i < attackerDices; i++){
			attackerIndex[i] = dice["d" + i];
		}

		for(i = 0; i < defenderDices; i++){
			defenderIndex[i] = dice["d" + (i+3)];
		}

		if(attackerDices === 3 && defenderDices === 2){
			var attackerHighest = Math.max.apply(null, attackerIndex);

			attackerIndex.splice(attackerIndex.indexOf(attackerHighest), 1); // remove max from the array

			var attackerSecondHighest = Math.max.apply(null, attackerIndex);

			var defenderHighest = Math.max.apply(null, defenderIndex);
			defenderIndex.splice(defenderIndex.indexOf(defenderHighest), 1);
			var defenderSecondHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}

			if(attackerSecondHighest > defenderSecondHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 3 && defenderDices === 1){
			var attackerHighest = Math.max.apply(null, attackerIndex);
			var defenderHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 2 && defenderDices === 2){
			var attackerHighest = Math.max.apply(null, attackerIndex);
			attackerIndex.splice(attackerIndex.indexOf(attackerHighest), 1); // remove max from the array
			var attackerSecondHighest = attackerIndex[0];

			var defenderHighest = Math.max.apply(null, defenderIndex);
			defenderIndex.splice(defenderIndex.indexOf(defenderHighest), 1);
			var defenderSecondHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}

			if(attackerSecondHighest > defenderSecondHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 2 && defenderDices === 1){
			var attackerHighest = Math.max.apply(null, attackerIndex);
			var defenderHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 1 && defenderDices === 2){
			var attackerHighest = attackerIndex[0];
			var defenderHighest = Math.max.apply(null, defenderIndex);

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}

		else if(attackerDices === 1 && defenderDices === 1){
			var attackerHighest = attackerIndex[0];
			var defenderHighest = defenderIndex[0];

			if(attackerHighest > defenderHighest){
				defenderUnits--;
			}
			else{
				attackerUnits--;
			}
		}
		return (defenderUnits === 0);
	}

	return {
		getInitialBoard: getInitialBoard,
		createMove: createMove,
		createRollMove: createRollMove,
		isMoveOk: isMoveOk,
		getWinner: getWinner,
		boardIsFull: boardIsFull,
		addOneUnitOnEachCountry: addOneUnitOnEachCountry,
		getPossibleMoves : getPossibleMoves,
		checkIfWin: checkIfWin,
		checkIfMovable: checkIfMovable
	};
});;/*
  Created by Zhuoran on 3/01/14
*/

angular.module('myApp')
.controller('Ctrl', function (
  $window, $scope, $log, $timeout,
  gameService, stateService, gameLogic, resizeGameAreaService) {

  'use strict';

  resizeGameAreaService.setWidthToHeight(1.36);

  var moveUnits;
  var draggingPiece = null;
  var beforePiece = null;

  function sendComputerMove() {
    var items = gameLogic.getPossibleMoves($scope.board, $scope.turnIndex);
    gameService.makeMove(items[Math.floor(Math.random()*items.length)]);
  }

  function updateUI(params) {
    $scope.board = params.stateAfterMove.board;
    $scope.delta = params.stateAfterMove.delta;
    $scope.dice = {};

    if(params.stateAfterMove.d0 !== undefined){
      $scope.dice.d0 = params.stateAfterMove.d0;
    }else {
      $scope.dice.d0 = null;
    }
    if(params.stateAfterMove.d1 !== undefined){
      $scope.dice.d1 = params.stateAfterMove.d1;
    }else {
      $scope.dice.d1 = null;
    }
    if(params.stateAfterMove.d2 !== undefined){
      $scope.dice.d2 = params.stateAfterMove.d2;
    }else {
      $scope.dice.d2 = null;
    }
    if(params.stateAfterMove.d3 !== undefined){
      $scope.dice.d3 = params.stateAfterMove.d3;
    }else {
      $scope.dice.d3 = null;
    }
    if(params.stateAfterMove.d4 !== undefined){
      $scope.dice.d4 = params.stateAfterMove.d4;
    }else {
      $scope.dice.d4 = null;
    }

    if ($scope.board === undefined) {
      $scope.board = gameLogic.getInitialBoard(2);
    }
    $scope.isYourTurn = params.turnIndexAfterMove >= 0 && // game is ongoing
    params.yourPlayerIndex === params.turnIndexAfterMove; // it's my turn
    $scope.turnIndex = params.turnIndexAfterMove;

    // Is it the computer's turn?
    if($scope.isYourTurn && params.playersInfo[params.yourPlayerIndex].playerId === ''){
      $scope.isYourTurn = false;
      $timeout(sendComputerMove, 500);
    }
  }

  window.e2e_test_stateService = stateService; // to allow us to load any state in our e2e tests.

  $scope.countryClicked = function (country) {
    try {
      /*
      if (clicking === false && startOrEnd === "move"){
        console.log("lala");
        return;
      }
      if (startOrEnd === "move"){
          console.log("lala");
      }
      */
      if ($scope.board.phase === 1){
        /*
        if (startOrEnd === "start"){  
          dragFromCountry = country;
        }
        else if (startOrEnd === "move"){
          console.log("lala");
          beforePiece = document.getElementById(dragFromCountry+"_Owner");
          beforePiece[ng-show] = false;
          draggingPiece = document.getElementById(country+"_Owner");
          draggingPiece[ng-show] = true;
          dragFromCountry = country;
        }
        else if (startOrEnd === "end"){
        */
        var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, country, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      }

      else if ($scope.board.phase === 2){
        var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, country, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      }
      else if ($scope.board.phase === 3){
        /*
        console.log("Clicked on country " + country + " startOrEnd=" + startOrEnd);
        if (clicking === true && startOrEnd === "move"){
          if (draggingPiece !== null){
            var top = document.getElementById(country+"_Owner").style.top;
            var left = document.getElementById(country+"_Owner").style.top;
            console.log(top);
            draggingPiece.style.top = top;
            draggingPiece.style.left = left;
          }
          return;
        }
        if (startOrEnd === "start"){
          dragFromCountry = country;
          draggingPiece = document.getElementById(country+"_Owner");
          return;
        }
        if (startOrEnd === "move"){
          return;
        }
        */
        if ($scope.board.selected === ""){
          if ($scope.board.territory[country].owner === $scope.turnIndex){
            $scope.board.selected = country;
            var div = document.getElementById(country+"_Owner");
            div.style.height = "6%";
            for (var neighbor in $scope.board.territory[country].neighbors){
              if ($scope.board.territory[neighbor].owner !== $scope.turnIndex){
                div = document.getElementById(neighbor+"_Owner");
                div.style["-webkit-animation-iteration-count"] = "3";
              }
            }
          }
        }
        else{
          var move = gameLogic.createRollMove($scope.dice, $scope.turnIndex);
          gameService.makeMove(move);
          $scope.board.target = country;
          var attackerUnits = $scope.board.territory[$scope.board.selected].units;
          var attackerOwner = $scope.board.territory[$scope.board.selected].owner;
          var defenderUnits = $scope.board.territory[$scope.board.target].units;
          var defenderOwner = $scope.board.territory[$scope.board.target].owner;

          if (gameLogic.checkIfWin($scope.board, $scope.turnIndex, $scope.board.selected, $scope.board.target, $scope.dice)){
            isModalShowing.signinModal = true;
          }
          else{
            $scope.moveUnits = 0;
            var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, $scope.board.selected, $scope.board.target, $scope.dice, $scope.moveUnits);
            $scope.isYourTurn = false; // to prevent making another move
            gameService.makeMove(move);            
            var div = document.getElementById($scope.board.selected+"_Owner");
            div.style.height = "4%";
            $scope.board.selected = "";
            $scope.board.target = "";
            for (var temp in $scope.board.territory){
              var div = document.getElementById(temp+"_Owner");
              div.style["-webkit-animation-iteration-count"] = "";
            }
          }
        }
      }
      else{
        if ($scope.board.selected === ""){
          $scope.board.selected = country;
          var div = document.getElementById(country+"_Owner");
          div.style.height = "6%";
          for (var neighbor in $scope.board.territory[country].neighbors){
            if ($scope.board.territory[neighbor].owner === $scope.turnIndex){
              div = document.getElementById(neighbor+"_Owner");
              div.style["-webkit-animation-iteration-count"] = "3";
            }
          }
        }else{
          $scope.board.target = country;
          if (gameLogic.checkIfMovable($scope.board, $scope.turnIndex, $scope.board.selected, $scope.board.target)){
            isModalShowing.signinModal = true;
          }
          else{
            var div = document.getElementById($scope.board.selected+"_Owner");
            div.style.height = "4%";
            $scope.board.selected = "";
            $scope.board.target = "";
            for (var temp in $scope.board.territory){
              var div = document.getElementById(temp+"_Owner");
              div.style["-webkit-animation-iteration-count"] = "";
            }
          }
        }
      }
    } catch (e) {
      var div = document.getElementById($scope.board.selected+"_Owner");
      if (div === null){
        return;
      }
      div.style.height = "4%";
      $scope.board.selected = "";
      $scope.board.target = "";
      
      for (var temp in $scope.board.territory){
        var div = document.getElementById(temp+"_Owner");
        div.style["-webkit-animation-iteration-count"] = "";
      }
      $log.info(["country is already full in position:", country]);
      return;
    }
  };

  $scope.move = function() {
    try{
      for (var temp in $scope.board.territory){
        div = document.getElementById(temp+"_Owner");
        div.style["-webkit-animation-iteration-count"] = "";
      }
      $scope.moveUnits = parseInt(document.getElementById("moveUnits").value);
      var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, $scope.board.selected, $scope.board.target, $scope.dice, $scope.moveUnits);
      $scope.isYourTurn = false; // to prevent making another move
      gameService.makeMove(move);            
      var div = document.getElementById($scope.board.selected+"_Owner");
      div.style.height = "4%";
      $scope.board.selected = "";
      $scope.board.target = "";
      isModalShowing.signinModal = false;
    } catch (e) {
      var div = document.getElementById($scope.board.selected+"_Owner");
      div.style.height = "4%";
      $scope.board.selected = "";
      $scope.board.target = "";
      
      for (var temp in $scope.board.territory){
          var div = document.getElementById(temp+"_Owner");
          div.style["-webkit-animation-iteration-count"] = "";
      }
      $log.info(["You can not move to ", country]);
      return;
    }
  };

  $scope.endTurnClicked = function() {
    if (!$scope.isYourTurn){
      return;
    }
    try {
      var move = gameLogic.createMove('endTurn', $scope.board, $scope.turnIndex, null, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      } catch (e) {
        $log.info(["You can not end turn because you still have remain units"]);
        return;
      }
    };

  $scope.shouldShowUnits = function(){
    return ($scope.board.phase === 4 && $scope.board.selected !== "" && $scope.board.territory[$scope.board.selected].owner === $scope.turnIndex);
  };

  $scope.shouldShowNumber = function (country) {
    var unit = $scope.board.territory[country].units;
    return unit !== 0;
  };

  $scope.isPieceRed = function (country) {
    return $scope.board.territory[country].owner === 0;
  };

  $scope.isPieceRed = function (country) {
    return $scope.board.territory[country].owner === 0;
  };    

  $scope.getCountry = function(){
    return $scope.board.selected;
  };
  $scope.getTurn = function () {
    return $scope.turnIndex;
  };
  $scope.getNumber = function (country) {
    return $scope.board.territory[country].units;
  };
  $scope.getUnit = function (player) {
    return $scope.board.players[player].remainUnits;
  };
  $scope.getMovableUnits = function () {
    if ($scope.board.selected !== ""){
      var country = $scope.board.selected;
      return $scope.board.territory[country].units-1;
    }else{
      return 0;
    }
  };

  $scope.getMinMovableUnits = function () {
    if ($scope.board.selected !== "" && $scope.board.phase === 3){
      var country = $scope.board.selected;
      if ($scope.board.territory[country].units >= 4){
        return 3;
      }
      else if ($scope.board.territory[country].units === 3){
        return 2;
      }
      else if ($scope.board.territory[country].units === 2){
        return 1;
      }
      else{
        return 0;
      }
    }else{
      return 0;
    }
  };

  $scope.getPhase = function () {
    if ($scope.board.phase === 1){
      return 'deploy';
    }
    else if ($scope.board.phase === 2){
      return 'reinforce';
    }
    else if ($scope.board.phase === 3){
      return 'attack';
    }
    else{
      return 'fortify';
    }
  };
  $scope.getDices = function(){
    return $scope.dice;
  };

  $scope.getImageSrc = function(country) {
    return $scope.board.territory[country].owner === 0 ? "red.png" : "green.png";
  };

  var isModalShowing = {};
  $scope.isModalShown = function (modalName) {
    return isModalShowing[modalName];
  };
  $scope.dismissModal = function (modalName) {
    delete isModalShowing[modalName];
  };

  var startOrEnd = null;
  var dragFromCountry = null;
  var invisibleDivAboveAreaMap = document.getElementById("invisibleDivAboveAreaMap");
  var myimageId = document.getElementById("img_ID");
  var clicking = false;

  $scope.dragMessage = "Drag from one color to another";
  /*
  window.handleInvisibleDivEvent = function (event, _startOrEnd) {
    startOrEnd = _startOrEnd;
    if (startOrEnd === "start"){
      clicking = true;
    }
    else if (startOrEnd === "end"){
      clicking = false;
    }
    console.log("handleInvisibleDivEvent:", event, startOrEnd);
    event.preventDefault();

    var touch = event.changedTouches ? event.changedTouches[0] : event;
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent("click", true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    invisibleDivAboveAreaMap.style.display = "none"; // Making it invisible to we find the correct elementFromPoint
    document.elementFromPoint(touch.clientX,touch.clientY).dispatchEvent(simulatedEvent);
    invisibleDivAboveAreaMap.style.display = "block";
  };
  */
  gameService.setGame({
    gameDeveloperEmail: "zl953@nyu.edu",
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 2,
    isMoveOk: gameLogic.isMoveOk,
    updateUI: updateUI
  });
});
