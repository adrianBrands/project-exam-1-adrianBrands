const url = "https://mywebsite.no/wp-json/wp/v2/posts?_embed&per_page=12";
const carousel1 = document.querySelector("#carousel1");
const carousel2 = document.querySelector("#carousel2");
const carousel3 = document.querySelector("#carousel3");

async function getResults() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results[0], results[1], results[2]);
    displayresults(results);
  } catch (error) {
    console.log(error);
  }
}

function displayresults(results) {
  for (let i = 0; i < results.length; i++) {
    switch (results[i]) {
      case results[0]:
      case results[1]:
      case results[2]:
      case results[3]:
        carousel1.innerHTML += `<div class="carousel_item"><a href="article.html?id=${results[i].id}"><img class="post_img" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}"/></a>
                                   <a class="post_name" href="article.html?id=${results[i].id}">${results[i].title.rendered}</a>
                                   <p class="date">${results[i].date}</p>
                                   
                                   <p class="author">author: ${results[i]._embedded.author[0].name}</p></div>`; /* <a class="cta" href="article.html?id=${results[i].id}" <button>read</button></a>*/
        break;

      case results[4]:
      case results[5]:
      case results[6]:
      case results[7]:
        carousel2.innerHTML += `<div class="carousel_item"><a href="article.html?id=${results[i].id}"><img class="post_img" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}"/></a>
                                   <a class="post_name" href="article.html?id=${results[i].id}">${results[i].title.rendered}</a>
                                   <p class="date">${results[i].date}</p>
                                   
                                   <p class="author">author: ${results[i]._embedded.author[0].name}</p></div>`;
        break;

      case results[8]:
      case results[9]:
      case results[10]:
      case results[11]:
        carousel3.innerHTML += `<div class="carousel_item"><a href="article.html?id=${results[i].id}" ><img class="post_img" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}"/></a>
                                   <a class="post_name" href="article.html?id=${results[i].id}">${results[i].title.rendered}</a>
                                   <p class="date">${results[i].date}</p>
                                   
                                   <p class="author">author: ${results[i]._embedded.author[0].name}</p></div>`;
    }
  }

  let slidePosition = 0;
  const slides = document.getElementsByClassName("carousel_content");
  const totalSlides = slides.length;

  document
    .getElementById("carousel_button--next")
    .addEventListener("click", function () {
      moveToNextSlide();
    });

  document
    .getElementById("carousel_button--prev")
    .addEventListener("click", function () {
      moveToPreviousSlide();
    });

  function updateSlides() {
    for (let slide of slides) {
      slide.classList.remove("carousel_content--visible");
      slide.classList.add("carousel_content--hidden");
    }
    slides[slidePosition].classList.add("carousel_content--visible");
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlides();
  }

  function moveToPreviousSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlides();
  }
}

getResults();

/*   for(let i = 0; i < results.length; i++) { 
                                    switch (results[i]) {
                                        case results[4]:
                                        case results[5]:
                                        case results[6]:
                                            console.log(results[i]);
                                            carouselItem.innerHTML += `<div class="carousel_item"><img class="car" src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}"/>
                                            <h2>${results[i].title.rendered}</h2>
                                            <p>${results[i].date}</p>
                                            <a href="article.html?id=${results[i].id}" <button>read</button></a></div>`;
                                            
                                            
                                    }
                                        
                                    
                                    

                                } */

/*  const test5 = document.querySelector(".test5") ;
                               const carousel = document.querySelectorAll(".carousel_item");
                               for (let i = 0; i < carousel.length; i++) {
                                   console.log(carousel[i]);
                                   test5.innerHTML = `${carousel[i].h2}`;
                               } */

/* if (results[1]){ 
            document.getElementById("carousel_item").classList.add("test");
        } if (results[2]) { 
            document.getElementById("carousel_item").classList.add("test");
        }*/

/*  carouselItem.innerHTML += ` <img class="post_img" src="${results[0]._embedded['wp:featuredmedia']['0'].source_url}"/>
                                          <p>${results[0].title.rendered}</p>
                                          <img class="post_img" src="${results[1]._embedded['wp:featuredmedia']['0'].source_url}"/>
                                          <p>${results[1].title.rendered}</p>
                                          <img class="post_img" src="${results[2]._embedded['wp:featuredmedia']['0'].source_url}"/>
                                          <p>${results[2].title.rendered}</p>
                                          <img class="post_img" src="${results[3]._embedded['wp:featuredmedia']['0'].source_url}"/>
                                          <p>${results[3].title.rendered}</p>`;
            
            carousel_item.innerHTML += `<p>${results[4].title.rendered}</p>
                                          <p>${results[5].title.rendered}</p>
                                          <p>${results[6].title.rendered}</p>
                                          <p>${results[7].title.rendered}</p>`;
                                          
            carousel_item.innerHTML += ` <p>${results[8].title.rendered}</p>
                                          <p>${results[9].title.rendered}</p>
                                          <p>${results[10].title.rendered}</p>
                                          <p>${results[11].title.rendered}</p>`; */

/*const getClass = document.querySelectorAll("#carousel_item");
                                          console.log(getClass);
                    
                    
                
                                          for (let i = 0; i < getClass.length; i++){
                                        
                                         console.log(getClass[i])


                                          

                                         
                                         
                                         getClass[0].classList.add("slider1");
                                         getClass[1].classList.add("slider1");
                                         getClass[2].classList.add("slider1");
                                         getClass[3].classList.add("slider1");

                                         getClass[4].classList.add("test2");
                                         getClass[5].classList.add("test2");
                                         getClass[6].classList.add("test2");
                                         getClass[7].classList.add("test2");

                                         getClass[4].classList.add("test3");
                                         getClass[5].classList.add("test3");
                                         getClass[6].classList.add("test3");
                                         getClass[7].classList.add("test3");



                                        }

                                        */

/*  const createDiv = document.createElement('div');
                                    createDiv.classList = "test123";
                                    document.body.appendChild(createDiv);
                                    createDiv.innerHTML = `<p>hello</p>`;
                                    console.log(createDiv); */
