import  movies  from "./data.js";
import  colorChanger  from "./modules/ratingChanger.js";
// task 1

let thisYear = new Date().getFullYear();
let newMovie = movies.map((newMovie) => {
  let actorsAge = newMovie.actors.map((actor) => {
    let age = thisYear - actor.birthyear;
    if (actor.birthyear == null) {
      actor.birthyear = "тут должен быть год рождения актера";
      age = "тут должен быть возраст актера";
    }
    return { ...actor, age };
  });

  return { ...newMovie, actors: actorsAge };
});

console.log(newMovie);

// task 2

const moviesGenres = movies.reduce((genreArr, movie) => {
  movie.genre.forEach((genre) => {
    !genreArr.includes(genre) ? genreArr.push(genre) : false;
  });
  return genreArr;
}, []);

const newMoviesGenres = moviesGenres.map((i) => {
  return {
    name: i,
    movies: movies.filter((movie) => movie.genre.includes(i)),
    //
  };
});

console.log(newMoviesGenres);

//task 3


const getMovie = (id) => {
  let containerBlock = document.querySelector(".movies");

  movies.forEach((movie) => {

		function changeSimilaeImg(){
			if (movie.id >=3) { return --movie.id} else { return ++movie.id}
		}		
    if (id === movie.id) {
      containerBlock.innerHTML = `
     <div class="movies__title">
         <h1>${movie.title}</h1>
         <div class="movies__rating">
             <p class="rating-title">rating:</p>
             <p class="rating-start">${movie.rating}
             <p>/</p>
             <p class="rating-finish">10</p>
             </p>
             <div class="rating__modal">
                 <p>Rate this <br>
                    <span>Sharper </span></p>
                    <input class="rating__modal-input" type="number" placeholder="10" value="10">
                    <button class="rating__modal-button" type="submit">rate</button>
             </div>
         </div>
     </div>
     <div class="movies__body">
         <div class="movies__body-img"><img src="./images/${movie.id}.jpg" alt="movie-img"></div>
         <div class="movies__body-info">
             <p>${movie.description}</p>
             <div class="genre">
        
             </div>
             <div class="cast">
                 <p class="cast__title">Cast:</p>
                 <div class="cast__actors">
                   
                 </div>
             </div>
         </div>
     </div>
     <div class="movies__similar">
         <h2>Similar movies</h2>
         <div class="film">
         
           
         </div>
     </div>
 `;

      movie.genre.forEach((genre) => {
        let movieGenre = document.querySelector(".genre");
        let linkGenre = document.createElement("a");
        let titleGenre = document.createElement("p");

        movieGenre.appendChild(linkGenre);
        linkGenre.appendChild(titleGenre);
        titleGenre.innerText = genre;
      });

      movie.actors.forEach((actor) => {
        let castActor = document.querySelector(".cast__actors");
        let actorBlock = document.createElement("div");
        actorBlock.classList = "actor";
        castActor.appendChild(actorBlock);

        let actorSrc = actor.name.split(" ")[1].toLowerCase();

        let actorImg = document.createElement("div");
        actorImg.classList = "actor__img";
        actorBlock.appendChild(actorImg);
        let img = document.createElement("img");
        actorImg.appendChild(img);
        img.src = ` ./images/actors/${actorSrc}.jpg`;

        let actorName = document.createElement("div");
        actorName.classList = "actor__name";
        actorBlock.appendChild(actorName);
        actorName.innerText = actor.name;
      });
      movie.similar.forEach((i) => {
        let setSimilarMovie = document.querySelector(".film");
        let similarMovieImg = document.createElement("img");
        setSimilarMovie.appendChild(similarMovieImg);
        similarMovieImg.src = `./images/${changeSimilaeImg()}.jpg`;
      });
    }
  });
};


getMovie(2);
colorChanger();
