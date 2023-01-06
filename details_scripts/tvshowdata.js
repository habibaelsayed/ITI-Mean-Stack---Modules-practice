import { tvshow_data, image_path} from "../api_url.js";
import { getData } from "../api_req.js";
import { setCookie } from "../cookies.js";


async function show_tvshow_data(){
    await getData(tvshow_data).then(data=>{
        let {name, poster_path, overview, vote_average} = data;

        let poster = image_path + poster_path;
        
        let one_show = document.getElementById('showdata');
        let showElement = document.createElement('div');

        showElement.classList.add('main');

        showElement.innerHTML= `
        <img src="${poster}">
        <div class="about-text"> 
            <h2>${name}</h2>
            <h7>&#11088; ${vote_average}</h7>
            <p>
                ${overview}
            </p>
        </div>
        `

        one_show.appendChild(showElement);
    });
}

show_tvshow_data();

let comment_btn = document.getElementById('tvshow-btn');
let comment = document.getElementById('tvshow-comment');
let list = document.getElementById('tvshow-list');
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
