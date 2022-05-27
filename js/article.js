const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const article = document.querySelector(".article-content2");
const articleImg = document.querySelector(".article-img");
const imgModal = document.querySelector(".img_modal");
const dialogDiv = document.querySelector(".dialog_div");
const title = document.querySelector(".title");


const articleUrl =  "https://mywebsite.no/wp-json/wp/v2/posts/" + id +"?_embed";
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
    testImg = results._embedded['wp:featuredmedia']['0'].source_url;
    /*imgModal.style.backgroundImage = "url(" + testImg +")";*/
    title.innerHTML = `${results.title.rendered}`;
    dialogDiv.innerHTML = `<img class="img-article_module" src="${results._embedded['wp:featuredmedia']['0'].source_url}" alt="${results._embedded['wp:featuredmedia']['0'].alt_text}" />`;
    articleImg.innerHTML += `<img class="img-article" src="${results._embedded['wp:featuredmedia']['0'].source_url}" alt="${results._embedded['wp:featuredmedia']['0'].alt_text}" />`;
    article.innerHTML += `<h1>${results.title.rendered}</h1>
                          <ul class="article_ul">
                            <li><img class="author_picture" src="${results._embedded['author']['0']['avatar_urls']['24']}"/></li>
                            <li><p class="author">author: ${results._embedded.author[0].name}</p></li>
                          </ul>

                          
                          <p>${results.content.rendered}</p>`; 

                          const getWpImgClass = document.querySelector(".wp-image-61")
                          /*getWpImgClass.style.width = "100%";
                          getWpImgClass.style.height = "auto";*/
                          console.log(getWpImgClass);

                          
      
}








const imgModall = document.querySelector(".img-article_module")

document.addEventListener("click", function(event) {
    
    if (event.target.closest(".article-img")) {
        imgModal.showModal();

    }
    /*if (!event.target.closest(".img-article_module")) {
        imgModal.close();

    } */ 
})

function dialogClick(event){
    if (event.target === dialog) {
        dialog.close();
    } else {
        console.log("no")
    }
}

const dialog = document.querySelector("dialog");
dialog.addEventListener("click", dialogClick);



getArticleResults();

