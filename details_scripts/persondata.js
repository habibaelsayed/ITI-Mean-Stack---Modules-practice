import { people_data, image_path} from "../api_url.js";
import { getData } from "../api_req.js";
import { setCookie } from "../cookies.js";

async function show_person_data(){
    await getData(people_data).then(data=>{
        let {name, known_for_department, profile_path, known_for} = data;
        let poster = image_path + profile_path;
        // let {role1, role2, role3} = known_for;

        let one_person = document.getElementById('persondata');
        let personElement = document.createElement('div');

        personElement.classList.add('main');

        personElement.innerHTML= `
        <img src="${poster}">
        <div class="about-text"> 
            <h2>${name}</h2>
            <h7>role: ${known_for_department}</h7>
            <p>known for: ${known_for}</p>
        </div>
        `

        one_person.appendChild(personElement);
    });
}

show_person_data();


let comment_btn = document.getElementById('person-btn');
let comment = document.getElementById('person-comment');
let list = document.getElementById('person-list');
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



            // <p>
            // known for:
            // <span>${role1.name}
            // ${role1.media_type}
            // ${role1.overview}</span>

            // <span>${role2.name}
            // ${role2.media_type}
            // ${role2.overview}</span>

            // <span>${role3.name}
            // ${role3.media_type}
            // ${role3.overview}</span>
            // </p>