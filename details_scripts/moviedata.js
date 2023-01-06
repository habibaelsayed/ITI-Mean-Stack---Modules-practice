import { movie_data, image_path} from "../api_url.js";
import { getData } from "../api_req.js";
import { setCookie } from "../cookies.js";

async function show_movie_data(){
    await getData(movie_data).then(data=>{
        let {title, poster_path, overview, release_date} = data;

        let one_movie = document.getElementById('moviedata');

        let poster = image_path + poster_path;
        let movieElement = document.createElement('div');

        movieElement.classList.add('main');

        movieElement.innerHTML= `
        <img src="${poster}">
        <div class="about-text"> 
            <h2>${title}</h2>
            <h7>${release_date}</h7>
            <p> Overview:  
                ${overview}
            </p>
        </div>
        `

        one_movie.appendChild(movieElement);
    });
}

show_movie_data();

let comment_btn = document.getElementById('movie-btn');
let comment = document.getElementById('movie-comment');
let list = document.getElementById('movie-list');
let username = document.getElementById('username');
let id = location.search.split('=')[1];

comment_btn.addEventListener('click', ()=>{
    let value_comment = comment.value;
    let value_username = username.value;
    if(value_comment == '' || value_username == '')
    {
        alert('no empty fields required');
    }
    else{
        setCookie(id+'-'+value_username, value_comment, 30);
    }
    show_comments();

})



function show_comments(){

    let comments = document.cookie.split(';');

    list.innerHTML='';
    for(let one of comments){
        let new_comment = one.split('=');
        let key = new_comment[0].trim();
        let value = new_comment[1].trim();
        
        key = key.split('-');
        if(key[0] == id)
        {
    
            let commentItem = document.createElement('li');
            commentItem.innerHTML= `<span>${key[1]}:</span> ${value}`
    
            list.appendChild(commentItem);
        }
    }

}

show_comments();



