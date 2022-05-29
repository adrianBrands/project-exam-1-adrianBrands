const url ="https://mywebsite.no/wp-json/wp/v2/posts?_embed&per_page=12";
const createHtml = document.querySelector(".articles")

async function getResults (){
    try {
        const response = await fetch (url);
        const results = await response.json();
        displayresults (results);
        hidePosts ();
    } catch (error) {
        console.log(error);

    }
}


function displayresults (results){
    for(let i = 0; i < results.length; i++) {
        
         
        createHtml.innerHTML += `<div class="all-articles">
                                    <a href="article.html?id=${results[i].id}"><img class="car" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${results[i]._embedded['wp:featuredmedia']['0'].alt_text}"/></a>
                                    
                                    <a class="articles_name" href="article.html?id=${results[i].id}">${results[i].title.rendered}</a>
                                    <p>${results[i].date.slice(0,10)}</p>
                                    
                                    <a href="article.html?id=${results[i].id}"<button class="articles-button">Read now</button></a>
                                </div> `; 
    }


}

function hidePosts () {
    const getButton = document.querySelector(".read_more")
    const getDiv = document.querySelectorAll(".all-articles");
    for (let i = 0; i < getDiv.length; i++) {
        switch (getDiv[i]) {
            case getDiv[9]:
            case getDiv[10]:
            case getDiv[11]:
                getDiv[i].style.display = "none";
                getButton.addEventListener("click", () => {
                    getDiv[i].style.display = "block";
                    getButton.style.display = "none";

                });
                
            }
    }
}
getResults ()