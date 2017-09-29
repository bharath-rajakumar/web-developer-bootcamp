//Style Manipulation

var headerElement = document.querySelector("h1");

headerElement.classList.add("solid-pink-border");

headerElement.classList.remove("solid-pink-border");

headerElement.classList.toggle("solid-pink-border");


//Content manipulation

var paraElement = document.getElementsByTagName("p")[0]; 

var unOrderedList = document.querySelector("ul");

unOrderedList.textContent;

unOrderedList.innerHTML;

headerElement.textContent = "Cars are awesome !!! ";

paraElement.textContent = "My ultimate automotive wishlist";


//Attribute Manipulation

var instagramLink = document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.facebook.com");

link.text = "Lets go to facebook";


//Making changes to a collection of links

for(var i = 0; i < links.length; i++) {
  links[i].style.color = "pink";
	links[i].style.border = "solid 2px orange";
}

for(var i = 0; i < links.length; i++) {
  console.log(links[i].text);
}

for(var i = 0; i < links.length; i++) {
  console.log(links[i].setAttribute("href", "https://www.google.com"));
}

for(var i = 0; i < links.length; i++) {
  console.log(links[i].getAttribute("href"));
}