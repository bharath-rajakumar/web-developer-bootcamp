//Maintain an arraylist to keep hold of all your todo list items
var todoList = ["Shop for grocerries"];

var input = prompt("What would you like to do??");

var firstTime = true;

while(input !== "quit") {
	if(input === "list") {
		listTodo();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	//Keep prompting the user to do something to the todo list
	input = prompt("What would you like to do??");
}

function listTodo() {
	console.log("Printing your todo list");
	//Adding foreach to loop through each element
	// console.log(todoList);
	console.log("*************")
	todoList.forEach(function(task, index){
		console.log(index + ": " +task);
	});
	console.log("*************")
}

function addTodo() {
	var item = prompt("Please type the todo list item");
	console.log("Adding new item to your todo list");
	todoList.push(item);
	console.log("Updated todo list");
	console.log(todoList);
}

function deleteTodo() {
	var indexToDelete = prompt("Enter the index of toto to be deleted");
	//Use splice to delete just one element from the todo list - starting index and number of elements to be deleted
	todoList.splice(indexToDelete, 1);
}

alert("Quitting the todo list application");
console.log("Final todo list");
console.log(todoList);