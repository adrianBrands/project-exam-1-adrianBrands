const nav = document.querySelector('#nav');
const getLi = document.querySelectorAll(".nav-action");

let navTop = nav.offsetTop;

for(let i = 0; i < getLi.length; i++){

    function navFixed() {
        if(window.scrollY >= navTop){
            nav.classList.add('fixed');
            getLi[i].style.color = "#fff";
            
            
        } else {
            nav.classList.remove('fixed');
            getLi[i].style.color = "#626161";
            
        }
    }
    
    window.addEventListener("scroll", navFixed);

}

