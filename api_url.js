// api_key
const api_key = '4c5b42201fe429bcd27dc74217b56915';

// Movies api-url 'top-rated'
let movie_api = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1';
let movie_detail = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US';


// People api-url
let people_api = 'https://api.themoviedb.org/3/person/popular?api_key=<<api_key>>&language=en-US&page=1';
let people_detail = 'https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US';

// tv-show api-url
let tvshow_api = 'https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1';
let tvshow_detail = 'https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US';


// ids
let id = location.search.split('=')[1];


/**
 * @param {string} api_key
 * @param {string} api_link
 * @return {string} api_url
*/
function form_apiUrl(api_key, api_link){
    let api_url = api_link.replace('<<api_key>>', api_key);
    return  api_url;
}


/**
 * @param {string} api_key
 * @param {string} api_link
 * @return {string} api_url_details
*/
function form_apiUrl_details(api_key, api_link, dtype){
    let api_url_details = api_link.replace('<<api_key>>', api_key).replace(`{${dtype}_id}`, id);
    return  api_url_details;
}

// getting pages url
export const movies_url = form_apiUrl(api_key, movie_api);
export const people_url = form_apiUrl(api_key, people_api);
export const tvshow_url = form_apiUrl(api_key, tvshow_api);

export const image_path = 'https://image.tmdb.org/t/p/w500/';


// getting pages details
export const movie_data = form_apiUrl_details(api_key, movie_detail, 'movie');
export const people_data = form_apiUrl_details(api_key, people_detail, 'person');
export const tvshow_data = form_apiUrl_details(api_key, tvshow_detail, 'tv');