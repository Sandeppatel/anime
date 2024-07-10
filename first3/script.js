var home = document.querySelector(".home")
var about = document.querySelector(".about")
var section = document.querySelector(".section")


var hometext = document.querySelector(".hometext")
var abouttext = document.querySelector(".abouttext")
var sectiontext = document.querySelector(".sectiontext")

hometext.style.display = "block "

home.addEventListener("click", function(){
    texthatao();
    hometext.style.display = "block "
    
})
about.addEventListener("click", function(){
    texthatao();
    abouttext.style.display = "block "
    
})
section.addEventListener("click", function(){
    texthatao();
    sectiontext.style.display = "block "
    
})

function texthatao(){  
document.querySelectorAll("p").forEach(function(element){
    element.style.display = "none"
  })
}