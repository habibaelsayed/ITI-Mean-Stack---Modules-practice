
/**
 * @param {string} url
 * @return {Promise} promise
*/
export function getData(url){
    let promise =fetch(url)
    .then(res=>res.json());
    return promise;
}






