var one = document.querySelector(".one")
var text2 = document.querySelector(".text2")

one.addEventListener("mouseenter",function(){
    text2.style.opacity = 1;
})
one.addEventListener("mouseleave",function(){
    text2.style.opacity = 0;
})

var main = document.querySelector(".main")

main.addEventListener("mousemove", function(dets){
           text2.style.left = dets.clientX+"px"
})
