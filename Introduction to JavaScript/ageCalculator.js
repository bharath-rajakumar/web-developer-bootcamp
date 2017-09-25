//Age calculator
var age = prompt("Enter your age");

// Edge cases
if(age < 0) {
	console.error("Your age cannot be less than zero or negative !!!");
} else if(age < 18) {
	console.info("Sorry, you cannot enter");
} else if(age < 21) {
	console.log("You can enter but you are not allowed to drinnk");
} else if(age == 21) {
	console.log("Hurray, Happy 21st B'day, your first drink is on the house !!!");
	if(age % 2 == 1) {
		console.log("Your age is odd, hmm");
	}
} else if(age > 21) {
	console.log("You are allowed to proceed further !!!");
	if(age % 2 == 1) {
		console.log("Your age is odd, hmm");
	}
}

// Check if your age is also a perfect square
if(age % Math.sqrt(age) == 0) {
	console.log("Your age is a perfect square !!! Extra glass of of beer on the house !!! WOOT !!!");
} else {
	console.log("Your age is not a perfect square. You missed out on the free booz. LOOSER !!!");
}
