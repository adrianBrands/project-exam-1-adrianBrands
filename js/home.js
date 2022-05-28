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
                                   <p class="date">Date: ${results[i].date}</p>
                                   <p class="author">Author: ${results[i]._embedded.author[0].name}</p></div>`; /* <a class="cta" href="article.html?id=${results[i].id}" <button>read</button></a>*/
        break;

      case results[4]:
      case results[5]:
      case results[6]:
      case results[7]:
        carousel2.innerHTML += `<div class="carousel_item"><a href="article.html?id=${results[i].id}"><img class="post_img" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}"/></a>
                                   <a class="post_name" href="article.html?id=${results[i].id}">${results[i].title.rendered}</a>
                                   <p class="date">Date: ${results[i].date}</p>
                                   <p class="author">Author: ${results[i]._embedded.author[0].name}</p></div>`;
        break;

      case results[8]:
      case results[9]:
      case results[10]:
      case results[11]:
        carousel3.innerHTML += `<div class="carousel_item"><a href="article.html?id=${results[i].id}"><img class="post_img" src="${results[i]._embedded["wp:featuredmedia"]["0"].source_url}"/></a>
                                   <a class="post_name" href="article.html?id=${results[i].id}">${results[i].title.rendered}</a>
                                   <p class="date">Date: ${results[i].date}</p>
                                   <p class="author">Author: ${results[i]._embedded.author[0].name}</p></div>`;
    }
  }


  /*const getClass = document.querySelectorAll(".carousel_item");
  if (getClass){
    loader.getElementsByClassName.display = "none";
  }*/


  function stopLoader (){
    console.log("loaded");
    loader.style.display="none";
  }

  const loader = document.querySelector(".loader");
  window./*getElementsByClassName("carousel").*/onload = /*function() {stopLoader()}*/stopLoader();

 

  







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


