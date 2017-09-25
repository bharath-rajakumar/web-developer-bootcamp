//Arrays Basic
//Push/Pop basically adds/removes element from the end of the array

color = ["red", "blue", "green", "yellow"];
// (4) ["red", "blue", "green", "yellow"]0: "red"1: "blue"2: "green"3: "yellow"length: 4__proto__: Array(0)
color[4] = "pink";
// "pink"
color;
// (5) ["red", "blue", "green", "yellow", "pink"]
color.push("cyan");
// 6
color;
// (6) ["red", "blue", "green", "yellow", "pink", "cyan"]
color.pop();
// "cyan"
color
// (5) ["red", "blue", "green", "yellow", "pink"]
color.push("violet");
// 6
color
// (6) ["red", "blue", "green", "yellow", "pink", "violet"]
var lastColor = color.pop();
// undefined
lastColor;
// "violet"
color;
// (5) ["red", "blue", "green", "yellow", "pink"]



//Unshift/Shift basically adds/removes element from the begining of the array
color;
// (5) ["red", "blue", "green", "yellow", "pink"]
color.unshift("gold");
// 6
color;
// (6) ["gold", "red", "blue", "green", "yellow", "pink"]
var lastColor = color.shift();
// undefined
lastColor;
// "gold"
color;
// (5) ["red", "blue", "green", "yellow", "pink"]



// indexOf is used to find the index of first occurrence of an element
color;
// (5) ["red", "blue", "green", "yellow", "pink"]
color.indexOf("blue");
// 1
color.unshift("blue");
// 6
color;
// (6) ["blue", "red", "blue", "green", "yellow", "pink"]
color.indexOf("blue");
// 0
color.indexOf("ivory");
// -1



//slice is used for making a shallow copy of an array. It usually takes in two args: starting index and the ending index. 
//However it copies from the starting index to all the way upto one element before ending index
// (or it doesnt copy the element present in the ending index). It does not alter the original array.
var fruits = ["banana", "orange", "pineapple", "coconut", "blackberry", "strawberry"];
// undefined
var slicedFuits = fruits.slice(1,3);
// undefined
slicedFuits;
// (2) ["orange", "pineapple"]
fruits;
// (6) ["banana", "orange", "pineapple", "coconut", "blackberry", "strawberry"]
var copyOfFruits = fruits.slice();
// undefined
copyOfFruits;
// (6) ["banana", "orange", "pineapple", "coconut", "blackberry", "strawberry"]
var partOfFruits = fruits.slice(3,);
// undefined
partOfFruits;
// (3) ["coconut", "blackberry", "strawberry"]








