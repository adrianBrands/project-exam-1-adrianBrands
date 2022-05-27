const nav = document.querySelector('#nav');
const getLi = document.querySelectorAll(".nav-action");
const displayHome = document.querySelector(".display-home");
let navTop = nav.offsetTop;

for(let i = 0; i < getLi.length; i++){

    function navFixed() {
        if(window.scrollY >= navTop){
            nav.classList.add('fixed');
            getLi[i].style.color = "#fff";
            displayHome.style.display = "block";
        } else {
            nav.classList.remove('fixed');
            getLi[i].style.color = "#626161";
            displayHome.style.display = "none";
        }
    }
    
    window.addEventListener("scroll", navFixed);

}

