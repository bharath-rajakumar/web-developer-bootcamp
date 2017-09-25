//Keep prompting the user for the input until the string "yes" or "yeah" has been give as input
var answer = prompt("Annoy-o-matic is asking, \"Are we there yet???\"");

while(answer !== "yes" && answer !== "yeah" && answer.indexOf("yes") === -1) {
	//keep annoying the user
	answer = prompt("Annoy-o-matic is asking, \"Are we there yet???\"");
	console.log(answer);
}

alert("Yes !!! We are there already !!! SENSE the tone !!!");