var myList = document.querySelectorAll("li");

myList.forEach(function(item) {
	item.addEventListener("mouseover", function() {
		this.classList.add("selected");
	});

	item.addEventListener("mouseout", function() {
		this.classList.remove("selected");
	});

	item.addEventListener("click", function() {
		this.classList.toggle("done");
	});
});
