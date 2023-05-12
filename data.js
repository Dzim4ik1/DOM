const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 3",
    genre: ["drama", "comedy", "adventure"],
    description:
      "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
    actors: [
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
      },
      {
        name: "Bradley Cooper",
        birthyear: 1975,
        country: "USA",
      },
      {
        name: "Zoe Saldana",
        birthyear: 1978,
        country: "Mexico",
      },
    ],
    similar: ["Plane", "Sharper"],
    rating: 8.4,
  },
  {
    id: 2,
    title: "Plane",
    genre: ["thriller", "crime", "adventure"],
    description:
      "Pilot Brodie Torrance saves passengers from a lightning strike by making a risky landing on a war-torn island -- only to find that surviving the landing was just the beginning. When dangerous rebels take most of the passengers hostage, the only person Torrance can count on for help is Louis Gaspare, an accused murderer who was being transported by the FBI.",
    actors: [
      {
        name: "Gerard Butler",
        birthyear: 1969,
        country: "Scotland",
      },
      {
        name: "Mike Colter",
        birthyear: 1976,
        country: "USA",
      },
      {
        name: "Lilly Krug",
        birthyear: 2001,
        country: "Germany",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Sharper"],
    rating: 6.1,
  },
  {
    id: 3,
    title: "Sharper",
    genre: ["drama", "thriller", "crime"],
    description:
      "Motivations are suspect, and expectations are turned upside down, as a con artist takes on Manhattan billionaires.",
    actors: [
      {
        name: "Julianne Moore",
        birthyear: 1960,
        country: "United Kingdom",
      },
      {
        name: "Sebastian Stan",
        birthyear: 1982,
        country: "Romania",
      },
      {
        name: "Briana Middleton",
        birthyear: null,
        country: "USA",
      },
    ],
    similar: ["Guardians of the Galaxy Vol. 3", "Plane"],
    rating: 3.3,
  },
];

// task 1

let thisYear = new Date().getFullYear();
let newMovie = movies.map((newMovie) => {
  let actorsAge = newMovie.actors.map((actor) => {
    let age = thisYear - actor.birthyear;
    return { ...actor, age };
  });
  return { ...newMovie, actors: actorsAge };
});

console.log(newMovie);

// task 2
const genreObject = [
  {
    name: "Thriller",
    movies: ["Plane", "Sharper"],
  },
  {
    name: "Adventure",
    movies: ["Guardians of the Galaxy Vol. 3", "Plane"],
  },
  {
    name: "Crime",
    movies: ["John Wick: Chapter 4", " AKA "],
  },
  {
    name: "Drama",
    movies: [" Heat", "John Wick: Chapter 4", "The Batman"],
  },
  {
    name: "Comedy",
    movies: ["Friends", " After Hours", "AKA"],
  },
];

// task 3
// let movieTitle = document.querySelector(".movies__title");
// let movieRate = document.querySelector(".movies__rating");

// const getMovie = (id) => {


//   movies.forEach((movie) => {
//     if (id === movie.id) {
//       const movieName = document.createElement("h1");
//       movieName.innerText = movie.title;
//     movieTitle.appendChild(movieName);

//     const movieRat = document.createElement("p.rating-start");
//     movieRat.innerText = movie.rating;
//     movieRate.append(movieRat);
    

//     }
    
//   });
// };
// getMovie(1)