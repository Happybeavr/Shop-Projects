// JavaScript Document

function catPats(petNum, patNum) {
	var petNum = prompt("How many times will you pet the cat?");
	var patNum = prompt("How many times will you pat the cat?");

	var petPat = [petNum, patNum];

	for (var i = 0; i < petPat.length; i++) {
		alert("You have petted and/or patted the cat " + petPat[i] + " times.");
	}
}

function favGame(game1, game2) {
	var game1 = prompt("What is your favorite game?");
	var game2 = prompt("What is your second favorite game?");

	var games = [game1, game2];

	for (var i = 0; i < games.length; i++) {
		alert("I think " + games[i] + " is pretty cool.");
	}
}

function wantDo(thing1, thing2) {
	var thing1 = prompt("What would you like to do?");
	var thing2 = prompt("What else would you like to do?");

	var things = [thing1, thing2];

	for (var i = 0; i < things.length; i++) {
		alert("You want to " + things[i] + ", too? Cool!");
	}
}
