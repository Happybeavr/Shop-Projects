// JavaScript Document
//create function
function numberGuess() {
	"use strict";
	//variables
	var randNum = Math.floor(Math.random() * 13);
	var getPlayerNum = prompt("Guess a number between 0 and 12");
	var playerNum = parseInt(getPlayerNum);
	var guesses = 0;
	//main loop
	do {
		if (playerNum > randNum) {
			guesses ++;
			getPlayerNum = prompt("Wrong! Guess a number that is lower.");
			playerNum = parseInt(getPlayerNum);
		} else if (playerNum < randNum) {
			guesses ++;
			getPlayerNum = prompt("Wrong! Guess a number that is higher.");
			playerNum = parseInt(getPlayerNum);
		} else if (playerNum > 12 || playerNum < 0 || playerNum === null) {
			guesses ++;
			getPlayerNum = prompt("Please insert a valid number");
			playerNum = parseInt(getPlayerNum);
		}
	} while (randNum !== playerNum);
	//victory royale
	if (playerNum === randNum) {
		guesses ++;
		alert("Congratulations! You guessed the number in " + guesses + " guesses!");
	}
}
