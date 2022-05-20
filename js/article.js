const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const article = document.querySelector(".article-content2");
const articleImg = document.querySelector(".article-img");

const articleUrl = /*"localhost/The-Petrol-Head-Blog/wordpress/wp-json/wp/v2/posts/"*/ "https://mywebsite.no/wp-json/wp/v2/posts/" + id +"?_embed";
/*const articleUrl = "localhost/The-Petrol-Head-Blog/wordpress/wp-json/wp/v2/posts?_embed&per_page=12&id=" + id;*/
const corsEnabled = "https://noroffcors.herokuapp.com/" + articleUrl;
console.log(articleUrl);

async function getArticleResults() {
    try {
        const response = await fetch(corsEnabled);
        const results = await response.json();
        console.log(results);
        console.log(results._embedded['wp:featuredmedia']['0']['alt_text']);
    
        displayArticleResults(results);
        
        
    
    
    } catch (error){
        console.log(error);
    } 
}


function displayArticleResults (results){
    articleImg.innerHTML += `<img class="img-article" src="${results._embedded['wp:featuredmedia']['0'].source_url}" alt="${results._embedded['wp:featuredmedia']['0']['alt_text']}"/>`;
    article.innerHTML += `
                                    
                                    <h1>${results.title.rendered}</h1>
                                    <p class="author">author: ${results._embedded.author[0].name}</p>
                                    <img src="${results._embedded['author']['0']['avatar_urls']['24']}"/>
                                    <p>${results.content.rendered}</p>
                                    
                                   
                                `; 
      
}


getArticleResults();