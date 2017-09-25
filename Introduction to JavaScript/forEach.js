var color = ["purple", "pink", "yellow", "blue", "green"];
// undefined

color.forEach(function(color) {
	console.log("Color : " + color);
});

// VM267:2 Color : purple
// VM267:2 Color : pink
// VM267:2 Color : yellow
// VM267:2 Color : blue
// VM267:2 Color : green
// undefined

for(var i = 0; i < color.length; i++) {
    console.log("Color : " + color[i]);
}

// VM352:2 Color : purple
// VM352:2 Color : pink
// VM352:2 Color : yellow
// VM352:2 Color : blue
// VM352:2 Color : green