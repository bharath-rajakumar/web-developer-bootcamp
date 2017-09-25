function isEven(number) {
	if(typeof number !== "number") {
		console.log("Parameter needs be of type number");
		return -1;
	} else {
		if(number % 2 === 0) {
			console.log("The number " + number + " is even");
			return true;
		} else {
			console.log("The number " + number + " is odd");
			return false;
		}
	}
}

function findFactorial(number) {
	if(typeof number !== "number") {
		console.log("Parameter needs to be of type number");
		return -1;
	} else if (number < 0) {
		console.log("Parameter need to be a number greater than zero");
		return -1;
	}
	var result = 1;
	if (number === 0) {
		console.log("Factorial of " + number + " is: " + result);
		return result;
	} else {
		for(var i = number; i > 0; i--) {
			result = result * i;
		}
		console.log("Factorial of " + number + " is: " + result);
		return result;
	}
}

function kebabToSnake(myKebabString) {
	if(typeof myKebabString !== "string") {
		console.log("Parameter needs to be a string. Ideally a string like this : hello-world-goodbye-mate");
		return "";
	} else {
		//Perform a string replace "-" with "_"
		var regExToReplace = new RegExp("-", 'g'); //Building a regular expression string here . This will be : "/-/g"
		var mySnakeString = myKebabString.replace(regExToReplace, "_");
		return mySnakeString;
	}
}

findFactorial(5);
findFactorial(2);
findFactorial(10);
findFactorial(0);
findFactorial(-1);
findFactorial("yay");

console.log("Is 5 an even number??" + isEven(5));
console.log("Is 0 an even number??" + isEven(0));
console.log("Is boo an even number??" + isEven("boo"));
console.log("Is -333 an even number??" + isEven(-333));
console.log("Is -32 an even number??" + isEven(-32));

console.log("Passing kebab styled string " + "hello-world-goodbye-mate" + "to get my snake styled string : + " + kebabToSnake("hello-world-goodbye-mate"));
console.log("Passing kebab styled string " + "wow-that-is-so-hipster" + "to get my snake styled string : + " + kebabToSnake("wow-that-is-so-hipster"));
console.log("Passing kebab styled string " + "super-hero" + "to get my snake styled string : + " + kebabToSnake("super-hero"));
console.log("Passing kebab styled string " + "love-my-amul" + "to get my snake styled string : + " + kebabToSnake("love-my-amul"));
console.log("Passing kebab styled string " + "I-want-something-just-like-this" + "to get my snake styled string : + " + kebabToSnake("I-want-something-just-like-this"));
console.log("Passing kebab styled string " + "Boom" + "to get my snake styled string : + " + kebabToSnake("Boom"));




