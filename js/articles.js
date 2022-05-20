/*const url = "http://localhost/The-Petrol-Head-Blog/wordpress/wp-json/wp/v2/posts?per_page=12";*/
/*const url = "http://localhost/The-Petrol-Head-Blog/wordpress/wp-json/wp/v2/posts?_embed&per_page=12";*/
const url ="https://mywebsite.no/wp-json/wp/v2/posts?_embed&per_page=12";
/*posts?_embed*/
const createHtml = document.querySelector(".articles")

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
      /*  console.log(results[i]._embedded['wp:featuredmedia']['0'].alt_text); */
        createHtml.innerHTML += `<div class="all-articles">
                                    <img class="car" src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}"/>
                                    <h2>${results[i].title.rendered}</h2>
                                    
                                    <p>${results[i].date}</p>
                                   <a href="article.html?id=${results[i].id}" <button>read</button></a>
                                </div> `; 
      /* createHtml.innerHTML = `${results[i]._embedded}`;  */
     /* createHtml.innerHTML += `<div class="all-articles"><img class="car" src="${results[i].link}"/></div> `; */

    }
}
getResults ()