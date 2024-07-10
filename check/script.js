var body = document.querySelector("body")
var curcle = document.querySelector(".curcle")

body.addEventListener("mousemove" , (dets)=>{
        curcle.style.left  =  dets.clientX + "px"
        curcle.style.top  =  dets.clientY + "px"
})