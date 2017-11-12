// Clicking on h1 will raise an alert and change the test content of the header
var h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
	alert("Hey... h1 was clicked for real !!!");
});

h1.addEventListener("click", function(){
	h1.textContent = "Welcome to my car fantasy page !!!";
});

//Clicking on ul will print to the console
document.querySelector("ul").addEventListener("click", function(){
	console.log("You clicked on the Unordered List of Cars");
});

//Clicking on each list item will print its text content to the console
var myList = document.querySelectorAll("li");

myList.forEach(function(item) {
	item.addEventListener("click", function() {
		console.log("You clicked on : " + item.textContent);
  });
});

//Changing the color to pink once you click on the list item
myList.forEach(function(item) {
	item.addEventListener("click", function() {
		this.style.color = "pink";
  });
});