 var body = document.querySelector("body")
 var circle = document.querySelector(".circle");

 body.addEventListener("mousemove", (dats)=>{
             circle.style.left = dats.clientX + "px";
             circle.style.top = dats.clientY + "px";
 })