var ul = document.querySelector("ul")
var add = document.querySelector(".add")
var remove = document.querySelector(".remove")
var input = document.querySelector("input")

var li ;
add.addEventListener("click", function(){
          if(input.value.trim() === ''){}
          else{
             li = document.createElement("li");
             li.innerHTML = input.value ; 
             ul.appendChild(li);
             input.value = "";
          }
})
remove.addEventListener("click", function(){
    ul.removeChild(li);
})