//Create an array of movies Object with title, rating and hasWatched properties
var movies = [
	{
		title: "God Father : Part I",
		ratings: 4.8,
		hasWatched: false
	},
	{
		title: "Inglorious Bastards",
		ratings: 4.3,
		hasWatched: true
	},
	{
		title: "Lord of the Rings : The Return of the king",
		ratings: 4.8,
		hasWatched: true
	},
	{
		title: "Juno",
		ratings: 4.4,
		hasWatched: false
	},
	{
		title: "Moana",
		ratings: 4.6,
		hasWatched: true
	}
];

//Loop through this array and print them
movies.forEach(function(movie) {
	//Print the loop based on the hasWatched value of the movie object using a function
	console.log(buildMovieString(movie));
});

function buildMovieString(movie) {
	if(movie.hasWatched === true) {
		return "You have watched \""+ movie.title + "\" - " + movie.ratings + " stars";
	} else {
		return "You have not seen \""+ movie.title + "\" - " + movie.ratings + " stars";
	}
}