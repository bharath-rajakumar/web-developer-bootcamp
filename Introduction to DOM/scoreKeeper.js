var playerOneScore = 0;
var playerTwoScore = 0;


var playerOneButton = document.querySelector(".p1");
var playerTwoButton = document.querySelector(".p2");
var resetButton = document.querySelector(".reset");
var scoreToWinPicker = document.querySelector(".scorePicker");
var scoreToWin = document.querySelector(".scoreToWin");


// Increment Player score when we click the respective buttons
playerOneButton.addEventListener("click", function() {
	//allow score increment as long as either one of the players are less than the score to win
	//OR stop incrementing the score for either player if one of them reaches th winning score
	if(playerOneScore < scoreToWin.textContent && playerTwoScore < scoreToWin.textContent) {
		playerOneScore++;
		
		//Update the header element
		document.querySelector(".p1Score").textContent = playerOneScore;

		console.log("Player One Score : " + playerOneScore);
		
		if(playerOneScore == scoreToWin.textContent) {
			//Change the color of the score to Green indicating victory
			document.querySelector(".p1Score").style.color = "green";
		}
	} else {
		console.log("One of the players WON !!!");
		console.log("Player One Score : " + playerOneScore);
		console.log("Player Two Score : " + playerTwoScore);
	}
});

playerTwoButton.addEventListener("click", function() {
	if(playerOneScore < scoreToWin.textContent && playerTwoScore < scoreToWin.textContent) {
		playerTwoScore++;

		//Update the header element
		document.querySelector(".p2Score").textContent = playerTwoScore;

		console.log("Player Two Score : " + playerTwoScore);

		if(playerTwoScore == scoreToWin.textContent) {
			//Change the color of the score to Green indicating victory
			document.querySelector(".p2Score").style.color = "green";
		}
	} else {
		console.log("One of the players WON !!!");
		console.log("Player One Score : " + playerOneScore);
		console.log("Player Two Score : " + playerTwoScore);
	}
});

//Reset the score to zero
resetButton.addEventListener("click", function() {
	playerOneScore = 0;
	playerTwoScore = 0;

	//Update the header element
	document.querySelector(".p1Score").textContent = playerOneScore;
	document.querySelector(".p2Score").textContent = playerTwoScore;

	//Update the color of the scoreboard back to black
	document.querySelector(".p1Score").style.color = "black";
	document.querySelector(".p2Score").style.color = "black";

	console.log("Resetting player scores to zero");
	console.log("Player One Score : " + playerOneScore);
	console.log("Player Two Score : " + playerTwoScore);
});

//Choosing the score to win using the number picker
scoreToWinPicker.addEventListener("change", function() {
	scoreToWin.textContent = scoreToWinPicker.value;
});





