function stopLoader (){
    console.log("loaded");
    loader.style.display="none";
  }

  const loader = document.querySelector(".loader");
  window./*getElementsByClassName("carousel").*/onload = /*function() {stopLoader()}*/stopLoader();