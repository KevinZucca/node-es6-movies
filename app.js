// defining an array of objects for movies and tv series

const collection = [
  {
    title: "Inception",
    year: "2010",
    genre: ["Sci-Fi, Action"],
    rating: "8.8",
    type: "Movie",
  },
  {
    title: "Breaking Bad",
    year: "2008",
    genre: ["Crime, Drama, Thriller"],
    rating: "9.5",
    type: "Tv",
    seasons: 5,
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genre: ["Action, Crime, Drama"],
    rating: "9.0",
    type: "Movie",
  },
  {
    title: "Stranger Things",
    year: "2016",
    genre: ["Drama, Fantasy, Horror"],
    rating: "8.7",
    type: "Tv",
    seasons: 4,
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    genre: ["Crime, Drama"],
    rating: "8.9",
    type: "Movie",
  },
  {
    title: "Game of Thrones",
    year: "2011",
    genre: ["Action, Adventure, Drama"],
    rating: "9.3",
    type: "Tv",
    seasons: 8,
  },
];

// creating a Movie and tv series classes
class Movie {
  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }

  toString() {
    return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`;
  }
}

class TvSeries extends Movie {
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.seasons = seasons;
  }

  toString() {
    return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}.`;
  }
}

// creation of movie or series from type
const newArray = collection.map((el) => {
  if (el.type == "Movie") {
    return new Movie(el.title, el.year, el.genre, el.rating, el.type);
  } else {
    return new TvSeries(
      el.title,
      el.year,
      el.genre,
      el.rating,
      el.type,
      el.seasons
    );
  }
});

console.log(newArray[5].toString());
