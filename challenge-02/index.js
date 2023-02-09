function Movie (title, director, genre, releaseYear, rating){
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }



Movie.prototype.getOverview = function (){
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director}, was released in ${this.releaseYear}. It received a rating of ${this.rating}`);
}

const movieOne = new Movie('spider-man', 'Musa', 'sci-fi', 2015, 9);

movieOne.getOverview()