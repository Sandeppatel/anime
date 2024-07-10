var body = document.querySelector("body");
var curser = document.querySelector(".curser");

body.addEventListener("mousemove", function(dets) {
    curser.style.left = dets.clientX + "px";
    curser.style.top = dets.clientY + "px";
});

