import { movies_url, image_path} from "../api_url.js";
import { getData } from "../api_req.js";

// getting movies data
async function showMovies(){

    let movies = await getData(movies_url).then(data=> data.results);
    console.log(movies);

    // getting the div element to push movie cards
    let movie_card = document.getElementById('movies');
    
    // to get movies data
    movies.forEach(movie=>{
    
        let {id, title, poster_path} = movie;

        // poster path merge
        let poster = image_path + poster_path;
    
        // element to push the movie details in
        let movieElement = document.createElement('div');
    
        movieElement.classList.add('container');

        movieElement.innerHTML= `
        <a href="../details/movie.html?id=${id}">
        <img src="${poster}" alt="movie">
        <div class="intro">
          <h5>${title}</h5>
        </div></a>`;
    
        // appending the movie element to the div with #movies id
        movie_card.appendChild(movieElement);
    });

}

showMovies();


