//Problem 1: Print all numbers between -10 and 19
var startNumber = -10;
var endNumber = 19;
var currentNumber = startNumber;

console.log("Print all numbers between -10 and 19");
while(currentNumber <= endNumber) {
	console.log(currentNumber);
	currentNumber++;
}

//Problem 2: Print all even numbers between 10 and 40
var startNumber = 10;
var endNumber = 40;
var currentNumber = startNumber;

console.log("Print all even numbers between 10 and 40");
while(currentNumber <= endNumber) {
	if(currentNumber % 2 == 0) {
		console.log(currentNumber);
	}
	currentNumber++;
}

//Problem 3: Print all odd numbers between 300 and 333
var startNumber = 300;
var endNumber = 333;
var currentNumber = startNumber;

console.log("Print all odd numbers between 300 and 333");
while(currentNumber <= endNumber) {
	if(currentNumber % 2 == 1) {
		console.log(currentNumber);
	}
	currentNumber++;
}

//Problem 4: Print all numbers divisble by 5 and 3 between 5 and 50
var startNumber = 5;
var endNumber = 50;
var currentNumber = startNumber;

console.log("Print all numbers divisble by 5 and 3 between 5 and 50");
while(currentNumber <= endNumber) {
	if(currentNumber % 5 == 0 && currentNumber % 3 == 0) {
		console.log(currentNumber);
	}
	currentNumber++;
}
