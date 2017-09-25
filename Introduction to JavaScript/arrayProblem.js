//Problem 1: Print the array in reverse
function printReverse(input) {
	console.log("Printing the array : " + input + " in reverse order");
	for(var i = input.length - 1 ; i >= 0; i--) {
		console.log(input[i]);
	}
}

printReverse([1,2,3,4,5]);
printReverse(["a","b","c","d","e","f"]);

//Problem 2: Returns true if all element in an array are same, otherwise returns false
function isUniform(input) {
	console.log("Is the array : " + input + " , uniform??");
	if(input.length === 0) {
		return false;
	}
	var firstElement = input[0];
	if(input.length === 1) {
		return true;
	} else {
		for(var i = 1; i < input.length; i++) {
			//compare first element with every other element
			if(firstElement !== input[i]) {
				return false;
			}
		}
		return true;
	}
}

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a","b","p"]));
console.log(isUniform(["b","b","b"]));
console.log(isUniform(["b"]));
console.log(isUniform([]));

//Problem 3: Returns the sum of all elements in an array
function sumArray(input) {
	console.log("Printing the sum for the array : " + input);
	var sum = 0;
	input.forEach(function(element) {
		if(typeof element === "number") {
			sum = sum + element;
		} else {
			console.log("Element " + element + " in the array is not of type number");
			sum = 0;
		}
	});
	return sum;
}

console.log(sumArray([1,2,3]));
console.log(sumArray([10,3,10,4]));
console.log(sumArray([100,-5,100,-5]));
console.log(sumArray([0,-5,100,"a"]));



//Problem 4: Returns the maximum of all elements in an array
function maxOfArray(input) {
	console.log("Printing the maximum element present in the array : " + input);
	if(input.length === 0) {
		return input[0];
	} else {
		var maximum = input[0];
		for(var i = 1; i < input.length; i++) {
			if(input[i] > maximum) {
				maximum = input[i];
			}
		}
		return maximum;
	}
}

console.log(maxOfArray([1,2,3]));
console.log(maxOfArray([10,3,4,100]));
console.log(maxOfArray([-5,-6,-8,-9,-1]));










