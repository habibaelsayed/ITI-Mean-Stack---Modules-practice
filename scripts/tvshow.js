import { image_path, tvshow_url } from "../api_url.js";
import { getData } from "../api_req.js";


async function showTV(){
    // getting tvshow data from a promise
    let tvshow = getData(tvshow_url);
    tvshow = await tvshow.then(data=>data.results);
    console.log(tvshow);
    
    // getting the div element to push tvshow cards
    let tvshow_card = document.getElementById('tvshow');

    // to get tvshow data
    tvshow.forEach((show) => {
        
        let {name, poster_path, id} = show;

        // poster path merge
        let poster = image_path + poster_path;

        // element to push the show details in
        let tvshowElement = document.createElement('div');

        tvshowElement.classList.add('container');

        tvshowElement.innerHTML= `
        <a href="../details/show.html?id=${id}">
        <img src="${poster}" alt="movie">
        <div class="intro">
          <h5>${name}</h5>
        </div> </a>`;
        
        // appending the movie element to the div with #movies id
        tvshow_card.appendChild(tvshowElement);
    });
    
}

showTV();