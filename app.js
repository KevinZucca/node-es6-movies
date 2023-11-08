// defining an array of objects for movies and tv series

const collection = [
  {
    title: "Inception",
    year: "2010",
    genre: ["Sci-Fi", "Action"],
    rating: 8.8,
    type: "Movie",
  },
  {
    title: "Breaking Bad",
    year: "2008",
    genre: ["Crime", "Drama", "Thriller"],
    rating: 9.5,
    type: "Tv",
    seasons: 5,
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genre: ["Action", "Crime", "Drama"],
    rating: 9,
    type: "Movie",
  },
  {
    title: "Stranger Things",
    year: "2016",
    genre: ["Drama", "Fantasy", "Horror"],
    rating: 8.7,
    type: "Tv",
    seasons: 4,
  },
  {
    title: "Pulp Fiction",
    year: "1994",
    genre: ["Crime", "Drama"],
    rating: 8.9,
    type: "Movie",
  },
  {
    title: "Game of Thrones",
    year: "2011",
    genre: ["Action", "Adventure", "Drama"],
    rating: 9.3,
    type: "Tv",
    seasons: 8,
  },
];

// creating a Movie and tv series classes
class Movie {
  #title;
  #year;
  #genre;
  #rating;
  #type;
  constructor(title, year, genre, rating, type) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.type = type;
  }

  getTitle() {
    return this.#title;
  }

  getYear() {
    return this.#year;
  }

  getGenre() {
    return this.#genre;
  }

  getRating() {
    return this.#rating;
  }

  getType() {
    return this.#type;
  }

  toString() {
    return `${this.getTitle()} è un film di genere ${this.getGenre()}. E' stato rilasciato nel ${this.getYear()} ed ha un voto di ${this.getRating()}.`;
  }
}

class TvSeries extends Movie {
  #seasons;
  constructor(title, year, genre, rating, type, seasons) {
    super(title, year, genre, rating, type);
    this.seasons = seasons;
  }

  getSeasons() {
    return this.#seasons;
  }

  toString() {
    return `${this.getTitle()} è una serie tv di genere ${this.getGenre()}. La prima stagione è stata rilasciata nel ${this.getYear()} ed in totale sono state prodotte ${this.getSeasons()} stagioni. Ha un voto di ${this.getRating()}.`;
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

// functions to get votes avg from movies and tv series genres
const genre = (array, genre) => {
  const avg = [];
  array.forEach((el) => {
    if (el.genre.some((singleGenre) => singleGenre.includes(genre))) {
      avg.push(el.rating);
    }
  });
  const sum = parseInt(avg.reduce((a, b) => a + b));
  return sum / avg.length;
};

// const genreAvg = genre(newArray, "Action");
// console.log(genreAvg);

// function to get all genres name

function getGenres(array) {
  const allGenres = [];
  array.forEach((element) => {
    element.genre.forEach((singleGenre) => {
      if (!allGenres.includes(singleGenre)) {
        allGenres.push(singleGenre);
      }
    });
  });
  return allGenres;
}

// console.log(getGenres(newArray));

// creating a function that returns the function toString starting from a genre

const filterMovie = (array, genre) => {
  const description = [];
  array.forEach((element) => {
    element.genre.forEach((singleGenre) => {
      if (singleGenre == genre) {
        description.push(element.toString());
      }
    });
  });
  return description;
};

// console.log(filterMovie(newArray, "Horror"));
