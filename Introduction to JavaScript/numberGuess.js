var userGess = Number(prompt("Guess the number !!!"))
var myNumber = 8;
if (userGuess > myNumber) {
	alert("Your guess was more than the actual number I am thinking of");
} else if (userGuess < myNumber) {
	alert("Your guess was less than the actual number I am thinking of");
} else if (userGuess === myNumber) {
	alert("You guessed the correct number. It was " + myNumber + ", after all !!!");
}