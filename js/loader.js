const loader = document.querySelector(".loader");

function stopLoader (){
    console.log("loaded");
    loader.style.display = "none";
  }

  
  window.onload = stopLoader();