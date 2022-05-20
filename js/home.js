const url = "http://localhost/The-Petrol-Head-Blog/wordpress/wp-json/wp/v2/posts?_embed&per_page=12";
const createHtml = document.querySelector(".test")

async function getResults (){
    try {
        const response = await fetch (url);
        const results = await response.json();
        console.log(results);
        displayresults (results)
    } catch (error) {
        console.log(error);

    }
}


function displayresults (results){
    for(let i = 0; i < results.length; i++) {
        console.log(results[i].id);
        console.log(results[i]._embedded['wp:featuredmedia']['0'].alt_text);
      /*  createHtml.innerHTML += `<img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}"/> `; */
      /* createHtml.innerHTML = `${results[i]._embedded}`;  */

    }
}
getResults ()