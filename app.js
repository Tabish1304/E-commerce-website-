const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})


var mainImage = document.querySelector(".main-img")
var smallImage = document.querySelectorAll(".small-img")


smallImage[0].onclick = function(){
    mainImage.src = smallImage[0].src; 
}

smallImage[1].onclick = function(){
    mainImage.src = smallImage[1].src; 
}

smallImage[2].onclick = function(){
    mainImage.src = smallImage[2].src; 
}

smallImage[3].onclick = function(){
    mainImage.src = smallImage[3].src; 
}


