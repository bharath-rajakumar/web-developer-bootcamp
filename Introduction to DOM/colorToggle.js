//Toggle background color when you click on the button
var clickMeButton = document.querySelector("button");

clickMeButton.addEventListener("click", changeColor);

function changeColor() {
	var body = document.querySelector("body");

	if(body.style.backgroundColor !== "gold") {
		body.style.backgroundColor = "gold"
	} else {
		body.style.backgroundColor = "white";
	}
}

// Alternative way is to use a toggle
function changeColor() {
	document.body.classList.toggle("color-gold");
}

