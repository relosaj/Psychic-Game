var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computersPick = "";
// var computersPick = "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var computersPick = letters[Math.floor(Math.random() * letters.length)];
// 	console.log("This is the target: " + computersPick);

function newLetter() {
	// var newHiddenLetter = letters[Math.floor(Math.random() * letters.length)];
	computersPick = letters[Math.floor(Math.random() * letters.length)];	
	// newHiddenLetter = computersPick;
	console.log("This is the target: " + computersPick);
}

var computersPick = letters[Math.floor(Math.random() * letters.length)];
	console.log("This is the target: " + computersPick);

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Key press: " + userGuess);
	// newLetter();

	if (userGuess === computersPick) {
		wins++;
		console.log ("You've won");
		console.log ("You've won: " + wins + " games!");
		guessesLeft = 9;
		document.getElementById("userGuess").innerHTML = "";
		newLetter();
	}
	if (guessesLeft === 0) {
		losses++;
		console.log ("You've lost");
		console.log ("Games Lost: " + losses + " games");	
		guessesLeft = 9;
		document.getElementById("userGuess").innerHTML = "";
		newLetter();
	} 
	if (userGuess != computersPick) {
		guessesLeft--;
		console.log("Try again. You have: " + guessesLeft + " guesses left!");
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	document.getElementById("userGuess").innerHTML += userGuess;


}	







