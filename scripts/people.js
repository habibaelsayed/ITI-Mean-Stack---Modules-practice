import { image_path, people_url } from "../api_url.js";
import { getData } from "../api_req.js";

async function showPeople(){
    // getting people data from a promise
    let people = getData(people_url);
    people = await people.then(data=>data.results);
    console.log(people);
    // getting the div element to push people cards
    let people_card = document.getElementById('people');

    // to get people data
    people.forEach((person) => {
        
        let {id, name, profile_path} = person;

        // poster path merge
        let poster = image_path + profile_path;

        // element to push the person details in
        let peopleElement = document.createElement('div');

        peopleElement.classList.add('container');

        peopleElement.innerHTML= `
        <a href="../details/person.html?id=${id}">
        <img src="${poster}" alt="movie">
        <div class="intro">
          <h5>${name}</h5>
        </div> </a>`;

        // appending the movie element to the div with #movies id
        people_card.appendChild(peopleElement);
    });
    
}

showPeople();