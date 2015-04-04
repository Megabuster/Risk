/*
  Created by Zhuoran on 3/01/14
*/

angular.module('myApp')
.controller('Ctrl', function ( $window, $scope, $log, $timeout, gameService, stateService, gameLogic, resizeGameAreaService) {

  'use strict';

  resizeGameAreaService.setWidthToHeight(1.36);

  var moveUnits;
  //var beforePiece = null;
  var startOrEnd = null;
  //var dragFromCountry = null;
  var currentCountry = null;
  var invisibleDivAboveAreaMap = document.getElementById("invisibleDivAboveAreaMap");
  //var myimageId = document.getElementById("img_ID");
  var clicking = false;

  $scope.dragMessage = "Drag from one color to another";
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
      if ($scope.board.phase === 1){
        if (clicking === false && startOrEnd === "move"){
          return;
        }
        if (startOrEnd === "move"){
          currentCountry = country;
          return;
        }
        else if (startOrEnd === "start"){  
          currentCountry = country;
          return;
        }

        var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, country, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      }

      // Reinforce phase
      else if ($scope.board.phase === 2){
        if (startOrEnd !== "end"){
          return;
        }
        var move = gameLogic.createMove(null, $scope.board, $scope.turnIndex, country, null, null, null);
        $scope.isYourTurn = false; // to prevent making another move
        gameService.makeMove(move);
      }
      // Attack phase
      else if ($scope.board.phase === 3){
        if (startOrEnd !== "end"){
          return;
        }
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
            for (var temp in $scope.board.territory){
              div = document.getElementById(temp+"_Owner");
              div.style["-webkit-animation-iteration-count"] = "";
            }
            
            $(function(){
                var dice = $("#dice1");
                $(".wrap1").append("<div id='dice_mask'></div>");//add mask
                dice.attr("class","dice");//After clearing the last points animation
                dice.css('cursor','default');
                var num = $scope.dice.d0;//random num 1-6
                dice.animate({left: '+2px'}, 100,function(){
                    dice.addClass("dice_t");
                }).delay(200).animate({top:'-2px'},100,function(){
                    dice.removeClass("dice_t").addClass("dice_s");
                }).delay(200).animate({opacity: 'show'},600,function(){
                    dice.removeClass("dice_s").addClass("dice_e");
                }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
                    dice.removeClass("dice_e").addClass("dice_"+num);
                    $("#result").html("Your throwing points are<span>"+num+"</span>");
                    dice.css('cursor','pointer');
                    $("#dice_mask").remove();//remove mask
                });
            });

            $(function(){
                var dice = $("#dice2");
                $(".wrap2").append("<div id='dice_mask'></div>");//add mask
                dice.attr("class","dice");//After clearing the last points animation
                dice.css('cursor','default');
                var num = $scope.dice.d1;//random num 1-6
                dice.animate({left: '+2px'}, 100,function(){
                    dice.addClass("dice_t");
                }).delay(200).animate({top:'-2px'},100,function(){
                    dice.removeClass("dice_t").addClass("dice_s");
                }).delay(200).animate({opacity: 'show'},600,function(){
                    dice.removeClass("dice_s").addClass("dice_e");
                }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
                    dice.removeClass("dice_e").addClass("dice_"+num);
                    $("#result").html("Your throwing points are<span>"+num+"</span>");
                    dice.css('cursor','pointer');
                    $("#dice_mask").remove();//remove mask
                });
            });

            $(function(){
                var dice = $("#dice3");
                $(".wrap3").append("<div id='dice_mask'></div>");//add mask
                dice.attr("class","dice");//After clearing the last points animation
                dice.css('cursor','default');
                var num =  $scope.dice.d2;//random num 1-6
                dice.animate({left: '+2px'}, 100,function(){
                    dice.addClass("dice_t");
                }).delay(200).animate({top:'-2px'},100,function(){
                    dice.removeClass("dice_t").addClass("dice_s");
                }).delay(200).animate({opacity: 'show'},600,function(){
                    dice.removeClass("dice_s").addClass("dice_e");
                }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
                    dice.removeClass("dice_e").addClass("dice_"+num);
                    $("#result").html("Your throwing points are<span>"+num+"</span>");
                    dice.css('cursor','pointer');
                    $("#dice_mask").remove();//remove mask
                });
            });

            $(function(){
                var dice = $("#dice4");
                $(".wrap4").append("<div id='dice_mask'></div>");//add mask
                dice.attr("class","dice");//After clearing the last points animation
                dice.css('cursor','default');
                var num =  $scope.dice.d3;//random num 1-6
                dice.animate({left: '+2px'}, 100,function(){
                    dice.addClass("dice_t");
                }).delay(200).animate({top:'-2px'},100,function(){
                    dice.removeClass("dice_t").addClass("dice_s");
                }).delay(200).animate({opacity: 'show'},600,function(){
                    dice.removeClass("dice_s").addClass("dice_e");
                }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
                    dice.removeClass("dice_e").addClass("dice_"+num);
                    $("#result").html("Your throwing points are<span>"+num+"</span>");
                    dice.css('cursor','pointer');
                    $("#dice_mask").remove();//remove mask
                });
            });

            $(function(){
                var dice = $("#dice5");
                $(".wrap5").append("<div id='dice_mask'></div>");//add mask
                dice.attr("class","dice");//After clearing the last points animation
                dice.css('cursor','default');
                var num =  $scope.dice.d4; //random num 1-6
                dice.animate({left: '+2px'}, 100,function(){
                    dice.addClass("dice_t");
                }).delay(200).animate({top:'-2px'},100,function(){
                    dice.removeClass("dice_t").addClass("dice_s");
                }).delay(200).animate({opacity: 'show'},600,function(){
                    dice.removeClass("dice_s").addClass("dice_e");
                }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
                    dice.removeClass("dice_e").addClass("dice_"+num);
                    $("#result").html("Your throwing points are<span>"+num+"</span>");
                    dice.css('cursor','pointer');
                    $("#dice_mask").remove();//remove mask
                });
            });
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
      // Fortify phase
      else{
        if (startOrEnd !== "end"){
          return;
        }
        if ($scope.board.selected === ""){
          if ($scope.board.territory[country].owner === $scope.turnIndex){
            $scope.board.selected = country;
            var div = document.getElementById(country+"_Owner");
            div.style.height = "6%";
            for (var neighbor in $scope.board.territory[country].neighbors){
              if ($scope.board.territory[neighbor].owner === $scope.turnIndex){
                div = document.getElementById(neighbor+"_Owner");
                div.style["-webkit-animation-iteration-count"] = "3";
              }
            }  
          }
        }else{
          $scope.board.target = country;
          if (gameLogic.checkIfMovable($scope.board, $scope.turnIndex, $scope.board.selected, $scope.board.target)){
            isModalShowing.signinModal = true;
            for (var temp in $scope.board.territory){
              div = document.getElementById(temp+"_Owner");
              div.style["-webkit-animation-iteration-count"] = "";
            }
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
      //$log.info(["You can not move to ", country]);
      return;
    }
  };

  $scope.endTurnClicked = function() {
    if (startOrEnd !== "end"){
      return;
    }
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

  $scope.shouldShowImg = function (country) {
    if (currentCountry === country){
      return true;
    }
    else{
      var unit = $scope.board.territory[country].units;
      return unit !== 0;
    }
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
    if ($scope.board.territory[country].units === 0){
      return $scope.turnIndex === 0 ? "red.png" : "green.png";
    }
    else{
      return $scope.board.territory[country].owner === 0 ? "red.png" : "green.png";
    }
  };

  var isModalShowing = {};
  $scope.isModalShown = function (modalName) {
    return isModalShowing[modalName];
  };
  $scope.dismissModal = function (modalName) {
    delete isModalShowing[modalName];
  };

   
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
    simulatedEvent.initMouseEvent("click", true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);

    invisibleDivAboveAreaMap.style.display = "none"; // Making it invisible to we find the correct elementFromPoint
    document.elementFromPoint(touch.clientX,touch.clientY).dispatchEvent(simulatedEvent);
    invisibleDivAboveAreaMap.style.display = "block";
  };
  

  gameService.setGame({
    gameDeveloperEmail: "zl953@nyu.edu",
    minNumberOfPlayers: 2,
    maxNumberOfPlayers: 2,
    isMoveOk: gameLogic.isMoveOk,
    updateUI: updateUI
  });
});
