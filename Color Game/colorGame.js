var numberOfSquares = 6;
var colors = generateNRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModes();
	setupSquares();
	resetColors();
}

function setupModes() {
	//Add event listeners to difficulty level buttons
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
				//First deselect all buttons
				deselectAllModes();
				//Select clicked button
				this.classList.add("selected");
				if(this.textContent === "Easy") {
					numberOfSquares = 3;
				} else {
					numberOfSquares = 6;
				}
				resetColors();
		});
	}
}

function setupSquares() {
	//Add event listeners to squares that will show up random colors
	for(var i = 0; i < squares.length; i++) {
		//Add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//Add a click event to each square
		squares[i].addEventListener("click", function() {
			//Grab the color of clicked square
			var clickedSquareColor = this.style.backgroundColor;
			//Compare it with picked color
			if(clickedSquareColor == pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColorsForAllSquares(clickedSquareColor);
				h1.style.backgroundColor = clickedSquareColor;
			} else {
				//Make the square disappear by changing its color to background color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function deselectAllModes() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].classList.remove("selected");
	}
}

function resetColors() {
	//Generate new colors
	colors = generateNRandomColors(numberOfSquares);
	//Pick a new random color
	pickedColor = pickRandomColor();
	//Change color display text
	colorDisplay.textContent = pickedColor;
	//Change the message text content
	messageDisplay.textContent = "";
	//Change the reset button text content
	resetButton.textContent = "New Colors";
	//Change the colors of the square
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			//Make sure that squares are always visible if there is a color present for it
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			//Hide the squares if there is no colors present for that specific index
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	resetColors();
});

function changeColorsForAllSquares(color) {
	//Loop through all squares and change it to the picked color
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor() {
	//Pick a random number from 0 to last index of the colors array
	var randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
}

function generateNRandomColors(numberOfRandomColors) {
	var randomColors = new Array();
	for(var i = 0; i < numberOfRandomColors; i++) {
		var redComponent = Math.floor(Math.random() * 256);
		var blueComponent = Math.floor(Math.random() * 256);
		var greenComponent = Math.floor(Math.random() * 256);
		var rgbString = "rgb(" + redComponent + ", " + blueComponent + ", " + greenComponent + ")";
		randomColors.push(rgbString);
	}
	return randomColors;
}	