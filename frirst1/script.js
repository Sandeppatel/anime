var names = document.querySelector("#name")
var email = document.querySelector("#email")
var pass = document.querySelector("#pass")

var submit = document.querySelector("#sub")

var one  = document.querySelector("#one")
var two  = document.querySelector("#two")
var three  = document.querySelector("#three")
var forth  = document.querySelector("#forth")

var inputtype = document.querySelector("input text")

console.log(inputtype);

function check(){
    var invalid = true ;

if(names.value.trim() === ''){
    one.style.opacity = 1;
    invalid = false;
}else{
    one.style.opacity= 0;
}

if(email.value.trim() === ''){
    two.style.opacity = 1
    invalid = false 
}
else{
    two.style.opacity = 0
}

if(pass.value.trim() === ''){
    three.style.opacity = 1;
    invalid = false 
}
else{
    three.style.opacity = 0;
}

return !invalid
}

submit.addEventListener("click", function(event){
    if (!check()) {
        event.preventDefault(); // Prevent form submission if validation fails
        forth.style.opacity = 1;
        forth.style.color = "blue";
        forth.innerHTML = "Form submitted successfully!";
    }else{
        forth.style.opacity = 0 ;
    }
    
})
